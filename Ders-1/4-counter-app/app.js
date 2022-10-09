const app = Vue.createApp({
    data(){
        return{
            counter:0,
            counter2:0
        }
    },
    methods: {
        // inc(){
        //     this.counter++;
        // },
        // dec(){
        //     this.counter--;
        // },
        // getCounterResults(){
        //     return this.counter > 5 ? 'Buyuk' : 'Kucuk' 
        // },
        // getCounter2Results(){
        //     return this.counter2 > 5 ? 'Buyuk' : 'Kucuk' 
        // },
    },
    computed: {
        getCounterResults(){ // bir deger degistigi anda icerisindeki degerlere gore bir deger return etmek zorunda izler degerleri degisti mi ne oldu diye bizim yazdıgımız ve istedigimiz sekle gore
            console.log('1. calisti');
            return this.counter > 5 ? 'Buyuk' : 'Kucuk' 
        },
        getCounter2Results(){
            console.log('2. calisti');
            return this.counter2 > 5 ? 'Buyuk' : 'Kucuk' 
        },
    },
    watch:{ // watcher bir deger return etmek zorunda degil ancak bir deger degistigi anda tek bir degeri inceler ve onun eski bilgisini ve yeni bilgisini bize verir ve geriye bir deger dondurmek zorunda degildir.
        counter(newValue, oldValue){
            console.log(oldValue,newValue);
        },
        getCounterResults(newValue, oldValue){
            console.log(oldValue,newValue);
        }
    }
}).mount("#app")