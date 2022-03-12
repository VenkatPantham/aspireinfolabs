import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromHTML, ContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Button, Container } from "@material-ui/core";
import { useStyles } from "./TextEditor.styles";

const TextEditor = ({ details, detailsHandler, handleBack, handleNext }) => {
  const classes = useStyles();

  const blocksFromHTML = convertFromHTML(details);
  const state = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(state)
  );

  const editorStateHandler = (text) => {
    setEditorState(text);
  };

  return (
    <Container className={classes.root}>
      <Editor
        editorState={editorState}
        editorClassName={classes.editor}
        onEditorStateChange={editorStateHandler}
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontFamily",
            "list",
            "textAlign",
            "colorPicker",
            "link",
            "image",
          ],
          inline: {
            inDropdown: false,
            options: [
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "monospace",
            ],
          },
          blockType: {
            inDropdown: true,
          },
          list: {
            options: ["unordered", "ordered"],
          },
          link: {
            showOpenOptionOnHover: false,
          },
        }}
      />
      <div className={classes.buttons}>
        <Button
          variant="contained"
          onClick={handleBack}
          className={classes.button}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            detailsHandler(
              draftToHtml(convertToRaw(editorState.getCurrentContent()))
            );
            handleNext();
          }}
          className={classes.button}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default TextEditor;
