import { createStore } from "vuex";
import contact from "./modules/contact";
import taskManager from "./modules/taskManager";

const store = createStore({
    namespaced: true,
    state:{
        mainName:"kablosuzhuso"
    },
    modules:{
        contact:contact,
        taskManager:taskManager
    }
    // modules:{
    //     contact,
    //     taskManager (boyle de olur) 
    // }
})

export default store;



