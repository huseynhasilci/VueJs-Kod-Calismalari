<template>
  <!-- <ModalSection :onSave="onSave" :title="'Modal Title'" :content="content"></ModalSection> -->
  <ModalSection>
    <template #title>
      <h3>Slot ile gelen title bilgisi</h3>
    </template>
    
    <template #content>
      <p class="text-green">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sunt repellendus maiores itaque obcaecati laudantium numquam, eligendi, eius soluta alias minima quis illum voluptas aperiam ipsa quod, rerum vero accusamus!</p>
    </template>
    <!-- <template v-slot:content> yukarıdakinin aynısı
      <p class="text-green">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sunt repellendus maiores itaque obcaecati laudantium numquam, eligendi, eius soluta alias minima quis illum voluptas aperiam ipsa quod, rerum vero accusamus!</p>
    </template> -->
    <template #default>
      bu default olarak gösterilecek
    </template>
  </ModalSection>
</template>

<script>
  import ModalSection from "./components/ModalSection.vue";
  
  export default{
    components:{
      ModalSection:ModalSection
    },
    data(){
      return{
        content:`<h3 class="text-red">title</h3>`
      }
    },  
    methods:{
      onSave(){
        alert("Saved!!");
      }
    }
  }
</script>