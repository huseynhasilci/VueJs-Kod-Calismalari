<script setup>
// import Input from "./components/form-components/Input.vue";
// import label from "./components/form-components/label.vue";
// import Select from "./components/form-components/Select.vue";
import * as Form from "./components/form-components.js";
</script>



<template>
  <!-- <label>
    Başlık
    <Input/>
  </label>

  <label>
    Kategori
    <Select/>
  </label> -->
  <Form.label>
    Başlık
    <Form.Input/>
  </Form.label>

  <Form.label>
    Kategori
    <Form.Select/>
  </Form.label>
</template>