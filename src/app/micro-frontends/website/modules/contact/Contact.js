import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import DarkPageHead from "../../shared/components/page-head-sections/DarkPageHead";
import ContactAddress from "./ContactAddress";
import { contactAddressData } from "./ContactAddress.data";
import ContactForm from "./ContactForm";
import { PAGE_HEAD } from "./Contact.content";
import Helmet from "react-helmet";

const useContactStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
}));

function Contact() {
  const classes = useContactStyles();
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Contact us at Aspire to change the way you hire and train your IT talent."
        />
        <title>Aspire- Contact Us</title>
      </Helmet>
      <Container className={classes.root}>
        <DarkPageHead
          heading={PAGE_HEAD.heading}
          subHeading={PAGE_HEAD.subHeading}
          contactPage={true}
        >
          <ContactForm />
        </DarkPageHead>
        <ContactAddress addressList={contactAddressData} />
      </Container>
    </>
  );
}

export default Contact;
