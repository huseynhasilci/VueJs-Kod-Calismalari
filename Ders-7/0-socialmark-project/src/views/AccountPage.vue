<template>
  <app-header></app-header>
  <div class="flex flex-row">
    <side-bar></side-bar>
    <component :is="$route.meta.componentName" :items="bookmarkList"></component>
    <!-- {{$route}} -->
    <!-- <app-bookmark-list v-if="bookmarkList.length > 0" :items="bookmarkList"/>
    <div v-else>Henüz eklenmiş bir bookmark bulunmamaktadır</div> -->
  </div>
  
  
</template>

<script>

import AppHeader from "@/components/shared/appHeader.vue";
import SideBar from '../components/Home/SideBar.vue';

export default {
  components: {
    AppHeader,
    SideBar
  },
  data(){
    return{
      bookmarkList:[]
    }
  },
  created(){
    this.$appAxios.get('/bookmarks?_expand=category&_expand=user').then((bookmark_list_response) => {
      console.log(bookmark_list_response)
      this.bookmarkList = bookmark_list_response?.data || [];
    }).catch((err) => {
      console.log(err)
    });
  }
};
</script>
