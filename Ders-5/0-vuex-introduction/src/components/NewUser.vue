<template>
    <button @click="updateName">Yeni item ekle</button>
</template>


<script>
    export default{
        methods:{
            updateName(){
                const userData= {id:new Date().getTime(),title:"Raf",type:"mobilya1"}
                //this.$store.commit("newItem",userData);  // commit mutation cagirir mutation anlık olarak (senkron şekilde) güncelleme yapar
                //this.$store.state.itemList.push(userData)
                this.$store.dispatch("newItem",userData); //actionlar dispatch edilir
                this.$store.state.fullname = new Date().getTime();
            }
        },
    }

</script>