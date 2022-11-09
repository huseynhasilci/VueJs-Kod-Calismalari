<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" />
  {{ titleLengthMessage }}
  <button @click="toggleIt">Toggle</button>
  <p v-if="show">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi sint, perspiciatis libero praesentium reiciendis voluptatum quisquam
    recusandae eius rerum, id totam! Repudiandae quidem, laudantium quia maiores sunt corporis placeat.
  </p>
  <hr />
  <button @click="counter++">{{ counter }} {{ oddOrEven }}</button>
  <hr />
  <input type="text" v-model="searchText" />
  <p v-if="isTyping">Şu an yazıyor</p>
</template>

<script>
//import { ref, computed, watch, watchEffect } from "vue"; // reactive effect
import Counter from "./composables/Counter.js";
import Header from "./composables/Header.js";
import Search from "./composables/Search.js";
import Toggle from "./composables/Toggle.js";
export default {
  // data(){
  //   return{
  //     title:"bu bir baslik"
  //   }
  // },
  // beforeCreate(){
  //   console.log("beforeCreate");
  // },
  // created(){
  //   console.log("created");
  // },
  setup() {
  
    const {counter,oddOrEven} = Counter();
    const {show,toggleIt} = Toggle();
    const {title,titleLengthMessage} = Header();
    const {searchText,isTyping} = Search();
    return {
      title,
      show,
      toggleIt,
      titleLengthMessage,
      counter,
      oddOrEven,
      searchText,
      isTyping,
    };
  },
};
</script>
