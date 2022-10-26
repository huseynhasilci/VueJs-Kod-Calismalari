<template>
  <div class="form-area card border p-2">
    <form>
      <div class="form-group">
        <label for="title">Başlık</label>
        <input type="text" v-model="userData.title" class="form-control" id="exampleFormControlInput1" placeholder="kablosuzkedi resmi dokuman" />
      </div>
      
      
      <div class="form-group">
        <label for="url">URL</label>
        <input type="text" v-model="userData.url" class="form-control" id="url" placeholder="https://..">
      </div>
    </form>
    <div class="d-flex justify-content-end align-items-center">
        <button class="btn btn-sm btn-secondary mr-2" @click="$router.push({name:'HomePage'})">İptal</button>
        <button class="btn btn-sm btn-primary" @click="onSave">Kaydet</button>
    </div>
    
  </div>
</template>


<script>
  export default{
    data(){
      return {
        userData:{
          title:null,
          url:null,
          description:null
        }
      }
    },
    methods:{
      onSave(){
        this.$appAxios.post("/bookmarks", this.userData).then(save_response => {
          console.log("save_response",save_response);
          this.resetData();
          this.$router.push("/");
        });
      },

      resetData(){
        Object.keys(this.userData).forEach(key => this.userData[key] = null);
      }
    }
  }

</script>


