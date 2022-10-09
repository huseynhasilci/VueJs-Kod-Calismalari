const app = Vue.createApp({
    data(){
        return {
            search: "",
            itemList:["elma","armut","kiraz"],
            //filteredList: []
        }
    },
    methods: {
        searchList(){
            //this.filteredList = this.itemList.filter(i => i.includes(this.search))
            //console.log("filteredList", filteredList);
        }
    },
    computed:{
        filteredList(){
            return this.itemList.filter(i => i.includes(this.search))
        }
    }
}).mount('#app');