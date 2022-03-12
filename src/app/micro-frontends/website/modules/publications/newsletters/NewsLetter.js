import React, { useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import LightPageHead from "../../../shared/components/page-head-sections/LightPageHead";
import { PUBLICATIONS_BACKGROUND_IMAGE } from "../../../shared/images/pageHeadImages";
import { NewsLetters } from "../data/PublicationsContent.data";
import PublicationSections from "../shared/PublicationSections";
import NewsLetterCard from "./NewsLetterCard";
import { PAGE_HEAD, PUBLICATION_SECTION } from "./NewsLetter.content";
import Helmet from "react-helmet";

const usePublicationsCardSectionStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  pageHeadImage: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: "90vh",
      objectFit: "cover",
      objectPosition: "top left",
    },
  },
  cardSection: {
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(10),
    },
  },
}));

const IndustryExpertise = () => {
  const classes = usePublicationsCardSectionStyles();
  const [newsLetters] = useState(() => NewsLetters);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Newsletters and alumni stories to hear from our students themselves. Follow their career trajectories to gain insights into our training programs and their value."
        />
        <title>Aspire- Newsletters and alumni stories</title>
      </Helmet>
      <Container className={classes.root}>
        <LightPageHead heading={PAGE_HEAD.heading}>
          <img
            src={PUBLICATIONS_BACKGROUND_IMAGE}
            alt="At Aspire, our students’ careers are our sole focus. We go out of our way to give them the best technical, behavioral, analytical and soft skills training, to make sure they succeed in their careers. Aspire students have seen fast paced career growth and high learning curves in their careers, and continue to contribute to the progress of the IT industry. Our Alumni Speaks newsletters track some of these success stories."
            className={classes.pageHeadImage}
          />
        </LightPageHead>
        <Container className={classes.cardSection}>
          <PublicationSections title={PUBLICATION_SECTION[0]}>
            {newsLetters.map((el) => (
              <NewsLetterCard key={el.id} item={el} />
            ))}
          </PublicationSections>
        </Container>
      </Container>
    </>
  );
};

export default IndustryExpertise;
