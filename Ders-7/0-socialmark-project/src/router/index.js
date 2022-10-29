import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import NewBookmark from "@/views/NewBookmark.vue";
import store from "@/store";


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


const router = createRouter({
    routes: routes,
    history: createWebHashHistory()
})

router.beforeEach((to,from,next)=> {
    const authRequiredRoutes = ["Home"];
    const authNotRequiredRoutes = ["LoginPage","RegisterPage"];
    const _isAuthenticated = store.getters._isAuthenticated;

    if(authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated){
        next(false);
    }


    if (authRequiredRoutes.indexOf(to.name) > -1 ){
        if (_isAuthenticated) next();
        else next({name:"LoginPage"});
    }else{
        next();
    }

})


export default router;