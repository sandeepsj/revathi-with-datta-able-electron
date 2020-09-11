export default {
  items: [
    {
      id: "navigation",
      title: "Navigation",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "dashboard",
          title: "Dashboard",
          type: "item",
          url: "/dashboard/default",
          icon: "feather icon-home",
        },
      ],
    },
    {
      id: "ui-forms",
      title: "Forms",
      type: "group",
      icon: "icon-group",
      children: [
        {
          id: "new-admission",
          title: "New Admission",
          type: "item",
          url: "/WorkSpace/NewAdmission",
          icon: "feather icon-file-text",
        },
        {
          id: "fee-payment",
          title: "Fee Payment",
          type: "item",
          url: "/WorkSpace/FeePayment",
          icon: "feather icon-file-text",
        },
      ],
    },

    {
      id: "ui-tables",
      title: "Tables",
      type: "group",
      icon: "icon-group",
      children: [
        {
          id: "students-table",
          title: "Students Table",
          type: "item",
          icon: "feather icon-server",
          url: "/WorkSpace/StudentsTable",
        },
        {
          id: "subjects-table",
          title: "Subjects Table",
          type: "item",
          icon: "feather icon-server",
          url: "/WorkSpace/SubjectsTable",
        },
        {
          id: "fee-history",
          title: "Fee History",
          type: "item",
          icon: "feather icon-server",
          url: "/WorkSpace/FeeHistory",
        },
      ],
    },
    {
      id: "pages",
      title: "Pages",
      type: "group",
      icon: "icon-pages",
      children: [
        {
          id: "docs",
          title: "Documentation",
          type: "item",
          url: "/docs",
          classes: "nav-item",
          icon: "feather icon-help-circle",
        },
      ],
    },
    // {
    //   id: "student-profile",
    //   title: "Student Profile",
    //   type: "group",
    //   icon: "icon-pages",
    //   children: [
    //     {
    //       id: "student-details",
    //       title: "Student Details",
    //       type: "item",
    //       url: "/WorkSpace/SubWindows/StudentDetails",
    //       classes: "nav-item",
    //       icon: "feather icon-help-circle",
    //     },
    //   ],
    // },
  ],
};
