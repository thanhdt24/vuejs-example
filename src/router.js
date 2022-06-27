import { createWebHistory, createRouter } from "vue-router";
const routes =  [
    {
        path: "/",
        alias: "/picking-word",
        name: "picking-word",
        component: () => import("./components/PickingWord")
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;