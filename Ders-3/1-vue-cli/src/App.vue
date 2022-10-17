
<template>
  <app-header></app-header>
  <div class="container">
    <h3>Bu benim ilk Vue CLI uygulamam</h3>
    <p>Bugün compjene ve Vue CLI Konularını görüyortuz</p>
  </div>
  <CounterITem></CounterITem>
  <CounterITem></CounterITem>
</template>

<script>
  import CounterITem from "@/components/CounterItem.vue";
  export default{
    components:{
      CounterITem:CounterITem
    }
  }
</script>