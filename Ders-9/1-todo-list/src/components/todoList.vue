<template>
  <section class="mt-4">
    <todoListItemVue @delete-event="$emit('delete-event',$event)" v-for="todoItem in todoList" :key="todoItem" :todo="todoItem"></todoListItemVue>
    <small>{{todoLength}} adet Item vardır</small>
    <Summary :todoList="todoList" ></Summary>
  </section>
</template>

<script>
    import todoListItemVue from './todoListItem.vue';
    import Summary from './Summary.vue';
    import { computed } from "vue";
    export default{
        components:{
            todoListItemVue,
            Summary
        },
        props:{
            todoList: Array,
        },
        setup(props){
            
            const todoLength =  computed(() => {
                return props.todoList.length;
            })
            return{
                todoLength
            }
        }
    }


</script>
