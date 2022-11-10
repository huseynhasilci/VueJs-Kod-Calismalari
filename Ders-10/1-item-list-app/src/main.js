import { createApp } from 'vue'
//import './style.css'
import appHeading from "./components/ui/appHeading.vue";
import App from './App.vue'
import "./assets/index.css";
const app = createApp(App);
app.component("heading",appHeading);
app.mount('#app');
