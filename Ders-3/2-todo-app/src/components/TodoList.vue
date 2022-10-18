<template>
    <ul>
        <!-- <li v-for="todoItem in todoList" :key="todoItem.id" class="d-flex justify-content-between align-item-center">
            <span>To-do Item {{todoItem.text}}</span>
            <button @click="deleteItem(todoItem)" class="sm red">Sil</button>
        </li> -->
        <TodoListItem @delete-todo-item="$emit('delete-todo-item',$event)" v-for="item in provideData.todoList" :key="item.id" :item="item"></TodoListItem>
    </ul>
</template>

<script>
    import TodoListItem from './TodoListItem.vue';
    export default{
        // props:["myData"],
        inject:["provideData"],
        // data:{
        //     return{

        //     }
        // },
        components:{
            TodoListItem:TodoListItem
        }
    }


</script>