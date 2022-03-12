import {
  ROUTE_DASHBOARD,
  ROUTE_CONTENT,
  ROUTE_CONTENT_PUBLICATIONS,
  ROUTE_SETTINGS,
} from "../../shared/constants/route.const";

export const adminMenuItems = [
  {
    id: "dashboard",
    name: ROUTE_DASHBOARD.name,
    path: ROUTE_DASHBOARD.path,
    children: [],
  },
  {
    id: "content",
    name: ROUTE_CONTENT.name,
    path: ROUTE_CONTENT.path,
    children: [
      {
        id: "publications",
        name: ROUTE_CONTENT_PUBLICATIONS.name,
        path: ROUTE_CONTENT_PUBLICATIONS.path,
      },
    ],
  },
  {
    id: "settings",
    name: ROUTE_SETTINGS.name,
    path: ROUTE_SETTINGS.path,
    children: [],
  },
];
