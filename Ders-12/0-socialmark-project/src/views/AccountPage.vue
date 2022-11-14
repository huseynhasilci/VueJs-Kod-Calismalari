<template>
  <app-header></app-header>
  <div class="flex flex-row">
    <side-bar></side-bar>
    <!-- <div class="socket"> 
      <input type="text" @keydown.enter="SEND_MESSAGE">
    </div> -->
    <!-- <component :is="$route.meta.componentName" :items="bookmarkList"></component> -->
    <!-- {{$route}} -->
    <!-- <app-bookmark-list v-if="bookmarkList.length > 0" :items="bookmarkList"/>
    <div v-else>Henüz eklenmiş bir bookmark bulunmamaktadır</div> -->
  </div>
  
  
</template>

<script>

import AppHeader from "@/components/shared/appHeader.vue";
import SideBar from '../components/Home/SideBar.vue';
//import io from "socket.io-client";
export default {
  components: {
    AppHeader,
    SideBar
  },
  data(){
    return{
      bookmarkList:[],
    }
  },
  created(){
    this.$appAxios.get('/bookmarks?_expand=category&_expand=user').then((bookmark_list_response) => {
      console.log(bookmark_list_response)
      this.bookmarkList = bookmark_list_response?.data || [];
    }).catch((err) => {
      console.log(err)
    });
  },
  mounted(){
    // this.$socket = io("http://localhost:1987");
    // this.$socket.on("WELCOME_MESSAGE", this.WELCOME_MESSAGE);
  },
  methods:{
    // WELCOME_MESSAGE(data){
    //   console.log(data);
    // },
    // SEND_MESSAGE(e){
    //   console.log(e.target.value);
    //   this.$socket.emit("INPUTTAN_GONDERILEN_SEND_MESSAGE",e.target.value);
    // }
  }
};
</script>
