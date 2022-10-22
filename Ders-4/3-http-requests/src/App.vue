<template>
  <div class="container">
    <h3>alış veriş listesi</h3>
    <hr>

    <div>
      <input type="text" placeholder="ne alacaksın" @keydown.enter="onSave">
    </div>
    <ul v-if="itemCount > 0">
      <li v-for="item in itemList" :key="item.id" class="d-flex justify-content-between align-items-center">
        <span>{{item.title}}</span>
        <button @click="onDelete(item)" class="sm red">Sil</button>
      </li>
    </ul>
    <div v-else class="bg-blue">
      Herhangi  bir ürün yoktur.
    </div>
    <small class="mt-2 text-blue">{{itemCount}} ürün vardır</small>
    
  </div>
</template>

<script>
  import axios from "axios";
  export default{
    
    
    data(){
      return{
        itemList : []
      }
    },
    mounted(){
      axios.get("http://localhost:3000/items").then(itemResponse => {
        console.log(itemResponse);
        this.itemList = itemResponse.data || [];
        console.log(this.itemList);
      });
    },  
    methods:{
      onSave(e){
        const saveObject = {
          title:e.target.value,
          created_at:new Date(),
          completed:false
        }

        axios.post("http://localhost:3000/items",saveObject).then(saveResponse => {
          console.log(saveResponse);
          this.itemList.push(saveResponse.data);
          e.target.value = '';
          e.target.focus();
        });
      },
      onDelete(item){
        axios.delete(`http://localhost:3000/items/${item.id}`).then(deleteResponse => {
          console.log(deleteResponse)
          this.itemList = this.itemList.filter(i => i.id !== item.id);

        });
        
      }
    },
    computed:{
      itemCount(){
        return this.itemList.length || 0;
      }
    }

  }

</script>


