import { createWebHistory, createRouter } from "vue-router";
const routes =  [
    {
        path: "/",
        alias: "/picking-word",
        name: "picking-word",
        component: () => import("./components/PickingWord")
    },
    {
        path: "/init-docx",
        alias: "/init-docx",
        name: "init-docx",
        component: () => import("./components/InitDocx")
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;