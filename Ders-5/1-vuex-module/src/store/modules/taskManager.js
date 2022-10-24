export default {
    //namespaced: true,
    state:{
        itemList: [],
        userList: [],
    },
    mutations:{
        setItem(state,item){
            state.itemList.push(item);
        }
    },
    getters:{
        itemList: state => state.itemList
    }
}