import React from "react";
import $ from "jquery";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import("./WorkSpace/Dashboard"));

const NewAdmission = React.lazy(() => import("./WorkSpace/NewAdmission"));
const FeePayment = React.lazy(() => import("./WorkSpace/FeePayment"));
const StudentsTable = React.lazy(() => import("./WorkSpace/StudentsTable"));
const SubjectsTable = React.lazy(() => import("./WorkSpace/SubjectsTable"));
const FeeHistory = React.lazy(() => import("./WorkSpace/FeeHistory"));
const OtherDocs = React.lazy(() => import("./Demo/Other/Docs"));
const StudentDetails = React.lazy(() =>
  import("./WorkSpace/SubWindows/StudentDetails")
);
const AllTables = React.lazy(() => import("./WorkSpace/AllTable"));

const routes = [
  {
    path: "/dashboard/default",
    exact: true,
    name: "Default",
    component: DashboardDefault,
  },
  {
    path: "/WorkSpace/StudentsTable",
    exact: true,
    name: "Bootstrap Table",
    component: StudentsTable,
  },
  {
    path: "/WorkSpace/SubjectsTable",
    exact: true,
    name: "Bootstrap Table",
    component: SubjectsTable,
  },
  {
    path: "/WorkSpace/FeeHistory",
    exact: true,
    name: "Bootstrap Table",
    component: FeeHistory,
  },
  {
    path: "/WorkSpace/AllTables",
    exact: true,
    name: "Bootstrap Table",
    component: AllTables,
  },
  {
    path: "/WorkSpace/NewAdmission",
    exact: true,
    name: "Forms Elements",
    component: NewAdmission,
  },
  {
    path: "/WorkSpace/FeePayment",
    exact: true,
    name: "Forms Elements",
    component: FeePayment,
  },
  {
    path: "/WorkSpace/SubWindows/StudentDetails",
    exact: true,
    name: "BootStrap Vertical Pills Table",
    component: StudentDetails,
  },
  { path: "/docs", exact: true, name: "Documentation", component: OtherDocs },
];

export default routes;
