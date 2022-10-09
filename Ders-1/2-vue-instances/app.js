const app = Vue.createApp({
    data(){
        return {
            title: "Vue.js Bootcamp 1. gün",
            content: "Lorem ipsum dolor sit amet",
            eduflow:{
                title:"Müfredat",
                target:"_blank",
                url: "https://www.google.com/",
                alt: "mufredat"
            },
            owner: "Pogaca",
            coords:{
                x:0,
                y:0
            }
        }; // ! buradan index.html içerisindeki h1 etiketine değeri göndereceğiz.
    },
    methods: {
        cahngerTitle(pTitle){
            this.title = pTitle;
        },
        updadateCoords(message,event){
            this.cahngerTitle(`${event.x}, ${event.y}`)
            console.log(message,event.x,event.y);
            this.coords = {
                x:event.x,
                y:event.y
            }
            //this.coords.x = event.x;
            //this.coords.y = event.y;
        }
    },
}).mount("#app");
// ! burasi vue instance









