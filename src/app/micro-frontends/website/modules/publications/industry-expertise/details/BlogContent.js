import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const usePublicationsBlogStyles = makeStyles((theme) => ({
  description: {
    fontSize: 20,
    lineHeight: 1.5,
    marginTop: theme.spacing(5),
  },
  orderedList: {
    paddingLeft: 25,
    marginTop: theme.spacing(2),
  },
  heading: {
    marginTop: theme.spacing(4),
    fontWeight: "bold",
  },
}));

const BlogContent = ({ details }) => {
  const classes = usePublicationsBlogStyles();
  return (
    <>
      {details.map((el1, index1) => (
        <Typography
          variant="subtitle1"
          className={classes.description}
          key={index1}
        >
          {el1.data}
          <ol className={classes.orderedList}>
            {el1.list
              ? el1.list.map((el2, index2) => (
                  <>
                    <li key={index2}>{el2.text}</li>
                    {el2.subText ? (
                      <ol className={classes.orderedList} type="a">
                        {el2.subText.map((el3, index3) => (
                          <li key={index3}>{el3.text}</li>
                        ))}
                      </ol>
                    ) : null}
                  </>
                ))
              : null}
          </ol>
          {el1.sections
            ? el1.sections.map((el2, index2) => (
                <>
                  <p key={index2} className={classes.heading}>
                    {el2.heading}
                  </p>
                  {el2.list.map((el3, index3) => (
                    <p key={index3}>{el3.text}</p>
                  ))}
                </>
              ))
            : null}
        </Typography>
      ))}
    </>
  );
};

export default BlogContent;
