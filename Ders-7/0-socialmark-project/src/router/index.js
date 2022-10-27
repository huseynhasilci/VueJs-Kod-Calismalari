import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import NewBookmark from "@/views/NewBookmark.vue";
const routes = [
    {
        name:"Home",
        path: "/",
        component: HomePage
    },
    {
        name:"LoginPage",
        path: "/login",
        component: LoginPage
    },
    {
        name:"RegisterPage",
        path: "/register",
        component: RegisterPage
    },
    {
        name:"NewBookmarkPage",
        path: "/new",
        component: NewBookmark
    }
]


export default createRouter({
    routes: routes,
    history: createWebHashHistory()
})