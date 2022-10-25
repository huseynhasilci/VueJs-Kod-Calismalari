<template>
  <div class="form-area card border p-2">
    <form>
      <div class="form-group">
        <label for="title">Başlık</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="kablosuzkedi resmi dokuman" />
      </div>
      
      
      <div class="form-group">
        <label for="url">URL</label>
        <input type="text" class="form-control" id="url" placeholder="https://..">
      </div>
    </form>
    <div class="d-flex justify-content-end align-items-center">
        <button class="btn btn-sm btn-secondary mr-2" @click="$router.push({name:'HomePage'})">İptal</button>
        <button class="btn btn-sm btn-primary">Kaydet</button>
    </div>
    
  </div>
</template>
