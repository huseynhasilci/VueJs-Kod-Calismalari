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
            url:"https://www.youtube.com/"
        };
    }

}).mount('#app');