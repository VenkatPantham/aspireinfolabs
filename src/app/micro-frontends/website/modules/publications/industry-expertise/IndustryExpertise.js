import React, { useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { PUBLICATIONS_BACKGROUND_IMAGE } from "../../../shared/images/pageHeadImages";
import LightPageHead from "../../../shared/components/page-head-sections/LightPageHead";
import {
  Blogs,
  CaseStudies,
  // WhitePapers,
  // Events,
} from "../data/PublicationsContent.data";
import PublicationSections from "../shared/PublicationSections";
import BlogCard from "./cards/BlogCard";
import CaseStudyCard from "./cards/CaseStudyCard";
// import WhitePaperCard from "./cards/WhitePaperCard";
// import EventCard from "./cards/EventCard";
import { PAGE_HEAD, PUBLICATION_SECTION } from "./IndustryExpertise.content";
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
  const [blogs] = useState(() => Blogs);
  const [caseStudies] = useState(() => CaseStudies);
  // const [whitePapers] = useState(() => WhitePapers);
  // const [events] = useState(() => Events);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Our blogs, learnings and case studies to help better understand Aspire’s work and methodology."
        />
        <title>Aspire- blogs, learnings and case studies</title>
      </Helmet>
      <Container className={classes.root}>
        <LightPageHead heading={PAGE_HEAD.heading}>
          <img
            src={PUBLICATIONS_BACKGROUND_IMAGE}
            alt="Aspire Infolabs is at the forefront of innovation and disruption in the IT recruitment and training space. Our work is at the forefront of revolutionary hiring practices, and has repeatedly proven effectiveness for our clients. We bring together the best students, train them on a variety of essential skills, and prepare them to seamlessly fit into your organization."
            className={classes.pageHeadImage}
          />
        </LightPageHead>
        <Container className={classes.cardSection}>
          <PublicationSections title={PUBLICATION_SECTION[0]}>
            {blogs.map((el) => (
              <BlogCard key={el.id} item={el} />
            ))}
          </PublicationSections>
          <PublicationSections title={PUBLICATION_SECTION[1]}>
            {caseStudies.map((el) => (
              <CaseStudyCard key={el.id} item={el} />
            ))}
          </PublicationSections>
          {/* <PublicationSections title={"White Papers"}>
        {whitePapers.map((el) => (
          <WhitePaperCard key={el.id} item={el} />
        ))}
      </PublicationSections>
      <PublicationSections title={"Events"}>
        {events.map((el) => (
          <EventCard key={el.id} item={el} />
        ))}
      </PublicationSections> */}
        </Container>
      </Container>
    </>
  );
};

export default IndustryExpertise;
