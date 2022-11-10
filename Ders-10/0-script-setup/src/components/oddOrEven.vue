<template>
    <h1>sasadasd</h1>
    <h3>{{props.counter}}</h3>
    <h3>{{result}}</h3>
</template>


<script setup>
import { computed, watch } from "@vue/runtime-core";

const props = defineProps({counter:Number});
const emit = defineEmits(["odd-event"]);
const result = computed(() => {
    if (props.counter % 2 ===0){
        return "Cift";
    }
    else{
        return "Tek";
    }
     
})
watch(result,(result) => {
    if (result === "Tek"){
        emit("odd-event",true);
    }
})
</script>