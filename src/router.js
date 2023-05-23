import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        alias: "/init-docx",
        name: "init-docx",
        component: () => import("./components/InitDocx")
    }
    // {
    //     path: "/picking-word",
    //     alias: "/picking-word",
    //     name: "ThanhDT",
    //     component: () => import("./components/PickingWord")
    // }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;