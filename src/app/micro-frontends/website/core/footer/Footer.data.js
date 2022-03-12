import {
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  LINKEDIN_ICON,
  TWITTER_ICON,
  YOUTUBE_ICON,
} from "../../shared/images/iconsAndShapes";

import {
  ROUTE_ABOUT_US,
  ROUTE_ALUMNI_SPEAKS,
  ROUTE_CONTACT,
  ROUTE_INDUSTRY_EXPERTISE,
  ROUTE_PRODUCT_SERVICES,
  ROUTE_TALENT_AND_TRAINING_SERVICES,
} from "../../shared/constants/route.const";

import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from "../../../../shared/constants/social.const";

export const footerLinks = [
  {
    id: "footer-company",
    name: "Company",
    links: [
      {
        id: "footer-about-us",
        name: ROUTE_ABOUT_US.name,
        path: ROUTE_ABOUT_US.path,
      },
      {
        id: "footer-contact",
        name: ROUTE_CONTACT.name,
        path: ROUTE_CONTACT.path,
      },
    ],
  },
  {
    id: "footer-our-services",
    name: "Our Services",
    links: [
      {
        id: "footer-talent-and-hiring-services",
        name: ROUTE_TALENT_AND_TRAINING_SERVICES.name,
        path: ROUTE_TALENT_AND_TRAINING_SERVICES.path,
      },
      {
        id: "footer-product-services",
        name: ROUTE_PRODUCT_SERVICES.name,
        path: ROUTE_PRODUCT_SERVICES.path,
      },
    ],
  },
  {
    id: "footer-publications",
    name: "Publications",
    links: [
      {
        id: "footer-industry-expertise",
        name: ROUTE_INDUSTRY_EXPERTISE.name,
        path: ROUTE_INDUSTRY_EXPERTISE.path,
      },
      {
        id: "footer-newsletter",
        name: ROUTE_ALUMNI_SPEAKS.name,
        path: ROUTE_ALUMNI_SPEAKS.path,
      },
    ],
  },
];
export const footerIcons = [
  {
    id: "facebook-footer-icon",
    name: "Connect with us on our Facebook page for regular updates about our work",
    icon: FACEBOOK_ICON,
    url: FACEBOOK_URL,
  },
  {
    id: "instagram-footer-icon",
    name: "Connect with us on our Instagram page for regular updates about our work ",
    icon: INSTAGRAM_ICON,
    url: INSTAGRAM_URL,
  },
  {
    id: "twitter-footer-icon",
    name: "Connect with us on our Twitter page for regular updates about our work",
    icon: TWITTER_ICON,
    url: TWITTER_URL,
  },
  {
    id: "youtube-footer-icon",
    name: "Connect with us on our YouTube page for regular updates about our work ",
    icon: YOUTUBE_ICON,
    url: YOUTUBE_URL,
  },
  {
    id: "linked-in-footer-icon",
    name: "Connect with us on our LinkedIn page for regular updates about our work",
    icon: LINKEDIN_ICON,
    url: LINKEDIN_URL,
  },
];
