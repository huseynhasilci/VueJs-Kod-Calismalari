<template>
  <div class=" w-screen h-screen bg-gray-400 pt-10">
    <div class="rounded-md shadow-md text-white w-1/3 mx-auto bg-gray-700 p-3 ">
      <h3 class=" text-center text-2xl">Todo List</h3>
      <AddSection :AddTodo="AddTodo"></AddSection>
      <TodoList @delete-event="deleteItem" :todoList="todoList"></TodoList>
    </div>
  </div>
</template>

<script>
  import AddSection from "./components/addSection.vue";
  import TodoList from "./components/todoList.vue";
  import { ref } from "vue";
  export default{
    components:{
      AddSection,
      TodoList
    },
    setup(){
      const todoList = ref([]);
      const AddTodo = (todoText) => {
        console.log(todoText);
        todoList.value.push({
          id: new Date().getTime(),
          title: todoText,
          completed: false
        });
      };
      const deleteItem = (todo) => {
        //console.log(todo);
        todoList.value = todoList.value.filter(l => l.id !== todo.id);
      }
      return {todoList,AddTodo,deleteItem};
    }
  }

</script>
