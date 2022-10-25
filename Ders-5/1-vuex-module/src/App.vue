<template>
  <div>
    <p>
      {{$store.state.mainName}}

    </p>

    <p>

      {{ $store.state.contact.contactName}}
    </p>

    <p>

      {{contact}}
    </p>
  </div>
  



</template>

<script>
import { mapGetters } from 'vuex';



export default {
  name: 'App',
  created(){
    console.log(this.$store.getters["contact/_contactName"]);
  },
  computed:{
    ...mapGetters({
      contact:"contact/_contactName"
    })
  }
}
</script>


