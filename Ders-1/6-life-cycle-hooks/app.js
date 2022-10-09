const app = Vue.createApp({
    data(){
        return {
            title: "Test Başliği",
            itemList: []
        }
    },
    beforeCreate() {
        console.log("beforeCreate calisti");
    },
    created() {
        console.log("created calisti");
        setTimeout(() => {
            this.itemList = [1,2,3,4,5,6,7,8]
        },2000);
        setTimeout(() => {
            this.title = "Bu yeni baslik"
        },3000);
    },
    beforeMount() {
        console.log("beforeMount calisti");
    },
    mounted() {
        console.log("mounted calisti");
    },
    beforeUpdate() {
        console.log("beforeUpdate calisti");
    },
    updated() {
        console.log("updated calisti");
    },
    beforeUnmount() {
        console.log("beforeUnmount calisti");
    },
    unmounted() {
        console.log("unmounted calisti");
    },
}).mount('#app');