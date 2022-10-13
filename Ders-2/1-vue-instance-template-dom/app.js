const app = Vue.createApp({
    data(){
        return{
            title: "Bu vue tarafından gelen bir bilgidir.",
            content: "lorem bla bla",
            hobbies: [1,2,3,4,5],
            personal: {
                name:"Gokhan",
                lname: "Kandemir",
                phone: "123123"
            },
            details: `<a href="https://www.youtube.com/">Müfredat için tıklanınız</a>`,
            url:"https://www.youtube.com/",
            coordX:0,
            coordY:0,
            fullName: "Gokhan Kandemir"
        };
    },
    methods: {
        updateTitle(title){
            this.title = title || "Bu benim yenim mesajım";
            this.fullName = "Degistirildi";
        },
        updateCoords(e){
            this.coordX=e.offsetX;
            this.coordY=e.offsetY;
            this.updateTitle(`${this.coordX},${this.coordY}`);
            
        },
        updateValue(customText,event){
            console.log(customText);
            this.fullName = event.target.value;
        }
    },
}).mount('#app');