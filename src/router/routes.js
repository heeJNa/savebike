const MainLayout = () => import("src/layouts/MainLayout.vue");

const routes = [
  {
    // 메인화면
    path: "/",
    component: MainLayout,
    children: [
      { path: "/", component: () => import("pages/MainPage.vue") },

      {
        path: "/estimate1",
        component: () =>
          import("src/components/template/estimate/estimatePageF.vue"),
      },
      {
        path: "/Description",
        component: () =>
          import("src/components/template/estimate/Description.vue"),
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
