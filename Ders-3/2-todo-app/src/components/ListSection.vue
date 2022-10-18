<template>
    <TodoList @delete-todo-item="$emit('delete-todo-item',$event)" :myData="todoList"></TodoList>
    <ResultBar :itemCount="provideData.todoList.length" ></ResultBar>
</template>


<script>
    import TodoList from "@/components/TodoList.vue";
    import ResultBar from "@/components/ResultBar.vue"

    export default{
        inject:["provideData"],
        props:{
            todoList:{
                type: Array,
                required: true
            },

        },
        components:{
            ResultBar:ResultBar,
            TodoList:TodoList
        }
    }
</script>