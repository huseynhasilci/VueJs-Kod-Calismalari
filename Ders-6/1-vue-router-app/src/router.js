import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import NewBookmark from "@/views/NewBookmark.vue";

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: HomePage
    },
    {
        name: "NewBookmark",
        path: "/new",
        component: NewBookmark
    }
];

const router = createRouter({
    routes:routes,
    history: createWebHashHistory()

});




export default router;