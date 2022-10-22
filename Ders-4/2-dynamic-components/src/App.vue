<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <button class="red" @click="activeComponent='Red'">Red</button>
      <button class="green" @click="activeComponent='Green'">Green</button>
      <button class="blue" @click="activeComponent='Blue'">Blue</button>

      
    </div>
    

    <!-- <Red v-if="activeComponent == 'Red'" class="mb-2"/>
    <Green v-if="activeComponent == 'Green'" class="mb-2"/>
    <Blue v-if="activeComponent == 'Blue'" class="mb-2"/> -->
    <keep-alive> <!-- keep alive altında olan şeyler eğer daha önceden bir şey yazılmışsa domdan silindiğinde bu kısım yüklendiğinde otomatik olarak siliniyordu ancak bunun sayesinde yazdığımız gibi kalıyor -->
      <component :is="activeComponent" msg="Red Companent 2"></component>
    </keep-alive>
    
  </div>
  

  
</template>


<script>
  import Red from "@/components/Red.vue"
  import Green from "@/components/Green.vue"
  import Blue from "@/components/Blue.vue"

  export default{
    components:{
      Red:Red,
      Green:Green,
      Blue:Blue
    },
    data(){
      return{
        activeComponent: "Red"
      }
    }
  }


</script>


