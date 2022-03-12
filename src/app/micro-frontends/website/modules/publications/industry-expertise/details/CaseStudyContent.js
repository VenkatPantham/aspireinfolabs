import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const usePublicationsCaseStudyStyles = makeStyles((theme) => ({
  description: {
    fontSize: 20,
    lineHeight: 1.5,
    marginTop: theme.spacing(5),
  },
  orderedList: {
    paddingLeft: 25,
    marginTop: theme.spacing(2),
  },
  sectionHeaders: {
    fontWeight: 700,
    marginTop: theme.spacing(10),
  },
}));

const CaseStudyContent = ({ details }) => {
  const classes = usePublicationsCaseStudyStyles();
  return (
    <>
      {details.map((el1, index1) => (
        <>
          <Typography
            variant="h3"
            className={classes.sectionHeaders}
            key={index1}
          >
            {el1.heading} :
          </Typography>
          {el1.body.map((el2, index2) => (
            <Typography
              variant="subtitle1"
              className={classes.description}
              key={index2}
            >
              {el2.text}
              <ol className={classes.orderedList}>
                {el2.list
                  ? el2.list.map((el3, index3) => (
                      <li key={index3}>{el3.subText}</li>
                    ))
                  : null}
              </ol>
            </Typography>
          ))}
        </>
      ))}
    </>
  );
};

export default CaseStudyContent;
