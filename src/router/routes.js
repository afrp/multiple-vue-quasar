const routes = [
  {
    path: "/",
    component: () => import("layouts/LayoutLogin.vue"),
    children: [{ path: "", component: () => import("pages/HalamanLogin.vue") }]
  },
  {
    path: "/layoutapp",
    component: () => import("layouts/LayoutApp.vue"),
    children: [
      { path: "/halamanapp", component: () => import("pages/HalamanApp.vue") },
      {
        path: "/profil",
        component: () => import("pages/HalamanProfil.vue")
      },
      {
        path: "/lihatjadwal",
        component: () => import("pages/LihatJadwal.vue")
      },
      {
        path: "/ceklokasi",
        component: () => import("pages/HalamanCekLokasi.vue")
      },
      {
        path: "/history",
        component: () => import("pages/HalamanHistory.vue")
      },
      {
        path: "/checkin",
        component: () => import("pages/HalamanCheckin.vue")
      },
      {
        path: "/detailhistory",
        component: () => import("pages/HalamanDetailHistory.vue")
      },
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
