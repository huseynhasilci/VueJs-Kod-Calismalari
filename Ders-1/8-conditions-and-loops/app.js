const app = Vue.createApp({
    data(){ 
        return{
            //todoList:["Todo1","Todo2","Todo3","Todo4"]
            todoList: [
                {id:1, text:"Vue Bootcamp Hafta 1",completed: false},
                {id:2, text:"Vue Bootcamp Hafta 2",completed: false},
                {id:3, text:"Vue Bootcamp Hafta 3",completed: false},
                {id:4, text:"Vue Bootcamp Hafta 4",completed: false},
                {id:5, text:"Vue Bootcamp Hafta 5",completed: false},
            ]
        }
    },
    methods: {
        addTodo(event){
            // this.todoList.push(event.target.value);
            this.todoList.push({
                id: new Date().getTime(),
                text: event.target.value,
                completed: false
            })
            event.target.value = "";
        },
        removeItem(todoItem){
            console.log(todoItem);
            this.todoList = this.todoList.filter(todo => todo.id !== todoItem.id)
        }
    },
    computed:{
        completedItemCount(){
            return this.todoList.filter(t => t.completed == true).length;
        },
        uncompletedItemCount(){
            return this.todoList.filter(t => t.completed == false).length;
        },
        
    }
}).mount('#app');