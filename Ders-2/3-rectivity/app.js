const app = Vue.createApp({
    data(){
        return{
            counter:0,
            counter2:0,
            itemList:[]
        }
    },
    methods: {
        addItem(){
            this.itemList.push(new Date().getTime());
        }
    },
    computed:{
        getResult(){
            console.log("c1 calisti");
            return this.counter > 0 ? 'Pozitif' : this.counter < 0 ? 'Negatif' : 'Sıfır';
        },
        getResult2(){
            console.log("c2 calisti");
            return this.counter2 > 0 ? 'Pozitif' : this.counter2 < 0 ? 'Negatif' : 'Sıfır';
        }
    },
    watch:{
        counter(newValue,oldValue){
            //console.log("counter watcher calisti",newValue,oldValue);
        },
        getResult(newValue,oldValue){
            console.log(`getResult watcher calisti, ${newValue},${oldValue}`);
        },
        itemList:{
            deep:true, // eger itemlist gibi obje varsa o degeri bus ekilde tanimlayip takibini yapabiliyoruz. handler icerisinde fonksiyon gibi islem yapabiliyoruz
            handler(itemList){
                console.log(itemList);
            },
        }
        
    }
});

app.mount(".app");
