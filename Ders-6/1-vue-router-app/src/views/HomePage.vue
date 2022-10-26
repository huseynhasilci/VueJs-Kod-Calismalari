<template>
  <div class="card border p-2">
    <div class="d-flex justify-content-end">
      <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'NewBookmark' })">+ Yeni Ekle</button>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Başlık</th>
          <th scope="col">URL</th>
          <th scope="col">Sil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bookmark in bookmarkList" :key="bookmark.id">
          <th scope="row">{{bookmark.id}}</th>
          <td>{{bookmark.title}}</td>
          <td>
            <a href="bookmark.url" target="_blank">{{bookmark.url}}</a>
          </td>
          <td><button class="btn btn sm btn-danger" @click="deleteItem(bookmark)">Sil</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        bookmarkList: []
      }
      
    },
    created(){
      this.$appAxios.get("/bookmarks").then(bookmark_list_response => {
        this.bookmarkList = bookmark_list_response.data || [];
        //console.log(bookmark_list_response);
      });
    },
    methods:{
      deleteItem(deleteBookmark){
        //console.log("deleteBookmark",deleteBookmark);
        this.$appAxios.delete(`/bookmarks/${deleteBookmark.id}`).then(delete_response => {
          if (delete_response.status === 200){
            this.bookmarkList = this.bookmarkList.filter(b => b.id !== deleteBookmark.id);
          }
        })
      }
    }
  }

</script>
