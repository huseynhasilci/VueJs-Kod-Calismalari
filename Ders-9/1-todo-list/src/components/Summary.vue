<template>
    <div><small class="text-green-300">{{completed}} Tamamlanmışlar</small></div>
    <div><small class="text-red-400">{{unCompleted}} Tamamlanmamışlar</small></div>
</template>

<script>
import {computed} from "vue";
export default{
    
    props:{
        todoList: Array
    },
    setup(props){
        const completed = computed(() => {
            return props.todoList.filter((i) => i.completed).length;   
        });
        const unCompleted = computed(() => {
            return props.todoList.filter((i) => !i.completed).length;
            
        });
        return {
            completed,unCompleted
        }
    }
}


</script>
