const app = Vue.createApp({
    data(){
        return{
            myClass: "text-green bg-orange",
            counter: 0
        }
    },
    created(){
        setInterval(() => {
            this.counter++;
        },2000);
    },
    computed:{
        boxClass(){
            return { 'text-red': this.counter === 2, 'text-green': this.counter === 0, 'text-orange': this.counter === 1 };
        }
    }


}).mount('#app')