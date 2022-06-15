const MainLayout = () => import("src/layouts/MainLayout.vue");

const routes = [
  {
    // 메인화면
    path: "/",
    component: MainLayout,
    children: [
      { path: "/", component: () => import("pages/MainPage.vue") },
      {
        path: "/estimate",
        component: () =>
          import("src/components/template/estimate/estimatePage.vue"),
      },
      {
        path: "/completion",
        component: () =>
          import("src/components/template/estimate/completionPage.vue"),
      },
      {
        path: "/Description",
        component: () =>
          import("src/components/template/estimate/Description.vue"),
      },
      {
        path: "/ComparativeEstimate",
        component: () =>
          import("src/components/template/estimate/ComparativeEstimate.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
