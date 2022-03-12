import {
  ROUTE_ABOUT_US,
  ROUTE_ALUMNI_SPEAKS,
  ROUTE_CONTACT,
  ROUTE_INDUSTRY_EXPERTISE,
  ROUTE_PRODUCT_SERVICES,
  ROUTE_PUBLICATIONS,
  ROUTE_SERVICES,
  ROUTE_TALENT_AND_TRAINING_SERVICES,
} from "../../shared/constants/route.const";

export const menuItems = [
  {
    id: "about-us",
    name: ROUTE_ABOUT_US.name,
    path: ROUTE_ABOUT_US.path,
    children: [],
  },
  {
    id: "our-services",
    name: ROUTE_SERVICES.name,
    path: ROUTE_SERVICES.path,
    children: [
      {
        id: "talent-and-training-services",
        name: ROUTE_TALENT_AND_TRAINING_SERVICES.name,
        path: ROUTE_TALENT_AND_TRAINING_SERVICES.path,
      },
      {
        id: "product-services",
        name: ROUTE_PRODUCT_SERVICES.name,
        path: ROUTE_PRODUCT_SERVICES.path,
      },
    ],
  },
  {
    id: "publications",
    name: ROUTE_PUBLICATIONS.name,
    path: ROUTE_PUBLICATIONS.path,
    children: [
      {
        id: "industry-expertise",
        name: ROUTE_INDUSTRY_EXPERTISE.name,
        path: ROUTE_INDUSTRY_EXPERTISE.path,
      },
      {
        id: "newsletters",
        name: ROUTE_ALUMNI_SPEAKS.name,
        path: ROUTE_ALUMNI_SPEAKS.path,
      },
    ],
  },
  {
    id: "contact",
    name: ROUTE_CONTACT.name,
    path: ROUTE_CONTACT.path,
    children: [],
  },
];
