import { lazy } from "react";

const routers = [
  {
    path: "/",
    component: lazy(() => import("../components/HomePage/HomePage.jsx")),
  },
];
export default routers;
