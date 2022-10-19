<template>
    <div class="container">
        <UserSection></UserSection>
        
    </div>
</template>


<script>
    import UserSection from './components/UserSection.vue';
    export default {
        
    data() {
        return {
            providedData:{
                userList: [
                    "tayfun","gokhan","defne"
                ]
            }
        };
    },
    components: { UserSection },
    provide(){
        return{
            userList : this.providedData.userList,
            newItem: this.newItem
        }
    },
    methods:{
        newItem(item){
            this.providedData.userList.push(item);
        }
    }
}
</script>