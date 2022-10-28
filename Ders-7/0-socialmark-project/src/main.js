import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from "./store";
import "@/assets/style.css";

import appHeader from "@/components/shared/appHeader.vue";
import appBookmarkList from "@/components/shared/appBookmarkList/indexPage.vue";
//import SideBar from "@/components/Home/SideBar.vue";
import {appAxios} from '@/utils/appAxios.js';


const app = createApp(App);
app.component("AppHeader",appHeader);
app.component("appBookmarkList",appBookmarkList);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;
app.mount('#app');
