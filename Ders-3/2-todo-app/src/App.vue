<template>
  <div class="container">
    <h3 class="text-center">todo app</h3>
    <hr class="my-2">
    <AddSection @add-todo="addNewTodo"></AddSection>
    <TodoList :myData="todoList"></TodoList>
    <ResultBar></ResultBar>

  </div>
  
</template>



<script>
  import AddSection from "@/components/AddSection.vue"; 
  import TodoList from "@/components/TodoList.vue";
  import ResultBar from "@/components/ResultBar.vue"
  export default{
    components:{
      AddSection:AddSection,
      TodoList: TodoList,
      ResultBar:ResultBar
    },
    data(){
      return {
        todoList:[
          {id:1,text:"Bootcamp 1"},
          {id:2,text:"Bootcamp 1.2"},
          {id:3,text:"Bootcamp 1.3"},
          {id:4,text:"Bootcamp 1.4"},
          {id:5,text:"Bootcamp 1.5"},
          {id:6,text:"Bootcamp 1.6"},
        ]
      };
    },
    methods:{
      testEvent(data){
        alert(data);
      },
      deleteItem(item){
        this.todoList = this.todoList.filter((t) => t !== item);
      },
      addNewTodo(todo){
        
        this.todoList.push({id:new Date().getDate(), text:todo});
        event.target.value = "";
      }
    }
  }

</script>