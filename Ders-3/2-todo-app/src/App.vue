<template>
  <div class="container">
    <h3 class="text-center">todo app</h3>
    <hr class="my-2">
    <AddSection @addNewTodo="addNewTodo" @add-todo="addNewTodo"></AddSection>
    <!-- <ListSection @delete-todo-item="deleteItem" :todoList="todoList" :itemCount="todoList.length"></ListSection> -->
    <ListSection></ListSection>
  </div>
  
</template>



<script>
  import AddSection from "@/components/AddSection.vue"; 
  import ListSection from "@/components/ListSection.vue";
  // import TodoList from "@/components/TodoList.vue";
  // import ResultBar from "@/components/ResultBar.vue"
  export default{
    components:{
      AddSection:AddSection,
      ListSection:ListSection
      // TodoList: TodoList,
      // ResultBar:ResultBar
    },
    data(){
      return {
        provideData:{
          todoList:[
            {id:1,text:"Bootcamp 1"},
            {id:2,text:"Bootcamp 1.2"},
            {id:3,text:"Bootcamp 1.3"},
            {id:4,text:"Bootcamp 1.4"},
            {id:5,text:"Bootcamp 1.5"},
            {id:6,text:"Bootcamp 1.6"},
          ]
        }
        
      };
    },
    provide(){
      return {
        todoList:this.provideData.todoList,
        deleteItem: this.deleteItem
      }
    
    },
    methods:{
      testEvent(data){
        alert(data);
      },
      deleteItem(item){
        this.todoList = this.provideData.todoList.filter((t) => t !== item);
      },
      addNewTodo(todo){
        this.provideData.todoList.push({id:new Date().getDate(), text:todo});
      }
    }
  }

</script>