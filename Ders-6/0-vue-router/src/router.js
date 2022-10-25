import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Details from "@/views/Details.vue";
const routes = [
    {
        path : "/",
        component: Home,
        name: 'HomePage',
    },
    {
        path : "/hakkimda",
        component: About,
        name: 'AboutPage',
    },
    {
        path : "/detay/:userID",
        component: Details,
        name: 'DetailsPage',
    },
];

const router = createRouter({
    routes,
    //history: createWebHistory()
    history: createWebHashHistory()
});

export default router;

