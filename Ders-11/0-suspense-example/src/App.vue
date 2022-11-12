<template>
  <span v-if="err" class="error">{{err}}</span>
  <suspense v-else>
    <template #default>
      <div>
        <Users></Users>
        <hr>
        <Todos></Todos>
      </div>
      
    </template>
    <template #fallback>
      <div>
        Loading...
      </div>
    </template>

  </suspense>
  
  <!-- <User></User> -->

</template>

<script setup>
import {ref,onErrorCaptured,defineAsyncComponent} from "@vue/runtime-core"
//import Todos from "./components/Todos.vue";
//import User from "./components/User.vue";
const err = ref(null);
const Todos = defineAsyncComponent(() => import("./components/Todos.vue"))
const Users = defineAsyncComponent(() => import("./components/User.vue"))
onErrorCaptured((e) => {
  err.value = e;
  return true;
})
</script>


<style>
  .error{
    color: red;
    font-size: 20px;
  }

</style>