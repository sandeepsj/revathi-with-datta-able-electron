import React from "react";

const SignUp1 = React.lazy(() =>
  import("./Demo/Authentication/SignUp/SignUp1")
);
const Signin1 = React.lazy(() =>
  import("./Demo/Authentication/SignIn/SignIn1")
);
const StudentSubWin = React.lazy(() =>
  import("./WorkSpace/SubWindows/StudentDetails")
);

const route = [
  { path: "/auth/signup-1", exact: true, name: "Signup 1", component: SignUp1 },
  { path: "/auth/signin-1", exact: true, name: "Signin 1", component: Signin1 },
  {
    path: "/WorkSpace/SubWindows/StudentDetails",
    exact: true,
    name: "Sub Window Student",
    component: StudentSubWin,
  },
];

export default route;
