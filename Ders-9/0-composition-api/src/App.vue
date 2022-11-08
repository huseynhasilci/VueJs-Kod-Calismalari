<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" />
  <p v-if="show">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi sint, perspiciatis libero praesentium reiciendis voluptatum quisquam
    recusandae eius rerum, id totam! Repudiandae quidem, laudantium quia maiores sunt corporis placeat.
  </p>
  <button @click="show = !show">Toggle</button>
</template>

<script>
import { ref } from "vue"; // reactive effect
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
    const title = ref("bu bir setup basliki");
    const show = ref(false);

    return {
      title,
      show,
    };
  },
};
</script>
