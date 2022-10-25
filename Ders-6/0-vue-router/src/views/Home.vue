<template>
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dicta! Corrupti aspernatur enim laborum! Facere odit unde officiis voluptatem quo ducimus assumenda voluptates nemo vitae modi tempora, veritatis dolore porro.</p>
    <input type="text" @keydown.enter="goToDetails">
</template>


<script>
export default{
    methods:{
        goToDetails(e){
            // alert(e.target.value);
            // this.$router.push(`/detay/${e.target.value}`)
            this.$router.push({
                name:"DetailsPage",
                params:{
                    userID: e.target.value
                },
                query:{
                    type:"detailAuth",
                    user:"umujjan"
                }
            })
        }
    }
}

</script>