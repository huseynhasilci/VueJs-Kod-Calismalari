<template>
    <label for="todoText"></label>
    <input v-model="todoText" @keydown.enter="addNewTodo" type="text" id="todoText" placeholder="Bir şeyler yazınız">
    <!-- <input type="text" id="todoText" placeholder="Bir şeyler yazınız"> -->
    <button class="green" @click="sendData">Gönder</button>
</template>


<script>
    export default {
        data(){
            return {
                todoText:null
            }
        },  
        methods:{
            addNewTodo(){
                this.$emit("add-todo",this.todoText);
                this.todoText = null;
            }
        }
    }

</script>