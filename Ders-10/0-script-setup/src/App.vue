<template>
  <h3>{{title}}</h3>
  <input type="text" v-model="title">
  <button @click="inc">{{counter}}</button>
  <hr>
  <oddOrEven :counter="counter" @odd-event="alertMe"></oddOrEven>
  <hr>
  <h1>User App</h1>
  <input type="text" v-model="state.personal.name">
  <input type="text" v-model="state.personal.lname">
  
</template>


<script setup>
  import { ref,reactive,watch } from "vue";
  import oddOrEven from "./components/oddOrEven.vue";
  import Utils from "./composables/utils.js";
  //import UserApp from "./composables/UserApp.js";

  const {title,counter,inc,alertMe} = Utils();

  // ! userApp
  const name = ref("");
  const lname = ref("");
  const state = reactive({
    personal: {
      name: "hüsomettin",
      lname: null
    },
    itemList: []
  })
  
  watch(() => JSON.parse(JSON.stringify(state.personal)), (newPersonal,oldPersonal) => {
    console.log(oldPersonal,newPersonal);
  })

</script>