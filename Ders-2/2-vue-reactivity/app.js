const app = Vue.createApp({
    data(){
        return{
            counter:0,
            counter2:0,
            itemList: []
        }
    },
    methods: {
        getResult(){
            console.log("c1 calisti");
            return this.counter > 0 ? 'Pozitif' : this.counter < 0 ? 'Negatif' : 'Sıfır';
        },
        getResult2(){
            console.log("c2 calisti");
            return this.counter2 > 0 ? 'Pozitif' : this.counter2 < 0 ? 'Negatif' : 'Sıfır';
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

});

app.mount("#app");
