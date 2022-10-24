import { createStore } from 'vuex';
const store = createStore({
    state:{
        user:{
            "name": "Gokhan",
            "lname": "Kandemir",
            "age": 33,
            "address": {},
            "password": "sadas",
            "tc":12313
        },
        fullname:"defne kanhsuo",
        theme: "dark",
        permissions : [1,2,3,4,5,6],
        userList:[
            "Gokham",
            "hguse",
            "huese",
            "harun"
        ],
        itemList:[
            {id:1, title:"masa",type:"mobilya"},
            {id:2, title:"masa1",type:"mobilya1"},
            {id:3, title:"masa2",type:"mobilya2"},
            {id:4, title:"masa3",type:"mobilya3"},
            {id:5, title:"masa4",type:"mobilya4"},
            {id:6, title:"masa5",type:"mobilya5"}
        ]
    },
    mutations:{ // senkron çalışırlar
        newItem(state,payload){
            state.itemList.push(payload);
        }
    },
    actions:{ // asenkron çalışırlar
        // newItem(context,item){
        //     console.log('item :>> ', item);
        //     setTimeout(()=> {
        //         context.commit("newItem",item);
        //     },2000);
        // }
        newItem({commit},item){
            //console.log('item :>> ', item);
            setTimeout(()=> {
                commit("newItem",item);
            },2000);
        }
    },
    getters:{
        _woodItems: state => state.itemList.filter(i => i.type ==="mobilya1"),
        _activeUser(state){
            const user = {...state.user};
            delete user.password;
            return user;
        }
    }
})

export default store;