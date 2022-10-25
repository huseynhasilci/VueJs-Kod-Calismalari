<template>
    <h1>Details</h1>
    <p>Aciklamalar burada yer alacaktir...</p>
    <p>{{$route.params.userID}}</p>
    <p>{{$route.query.klan}}</p>
    <button @click="goBack">Geri dön</button>
</template>

<script>
    export default{
        created(){
            console.log(this.$route);
        },
        methods:{
            goBack(){
                alert();
                //this.$router.push("/");
                this.$router.push("/");
            }
        }
    }

</script>
