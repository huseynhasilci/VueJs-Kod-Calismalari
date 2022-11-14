<template>
  <AppHeader></AppHeader>

  <div class="flex flex-row">
    <SideBarVue @category-changed="updateBookmartList"></SideBarVue>
    <app-bookmark-list v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>Henüz eklenmiş bir bookmark bulunmamaktadır</div>
  </div>
</template>

<script setup>
import SideBarVue from "@/components/Home/SideBar.vue";
import { ref,onMounted, inject } from "vue";
//import { useStore } from "vuex";
const bookmarkList = ref([]);
const appAxios = inject("appAxios");
const socket = inject("socket");
//const store = useStore()
onMounted(() => {
  socket.on("NEW_BOOKMARK_ADDED", (bookmark) => {
      bookmarkList.value.push(bookmark);
    });
})

const updateBookmartList = (categoryId) => {
      const url = categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}` : `/bookmarks?_expand=category&_expand=user`;
      appAxios
        .get(url)
        .then((bookmark_list_response) => {
          //console.log(bookmark_list_response);
          bookmarkList.value = bookmark_list_response?.data || [];
        })
        .catch((err) => {
          console.log(err);
        });
    }
const fetchedData= () => {
  appAxios
    .get("/bookmarks?_expand=category&_expand=user")
    .then((bookmark_list_response) => {
      //console.log(bookmark_list_response);
      bookmarkList.value = bookmark_list_response?.data || [];
    })
    .catch((err) => {
      console.log(err);
    });
    // appAxios
    // .get("/user_bookmarks/?_expand=bookmark&_expand=user")
    // .then((user_bookmark_response) => {
    //   //console.log(bookmark_list_response);
    //   store.commit("setBookmarks",user_bookmark_response?.data);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
    // appAxios
    // .get("/user_likes/?_expand=bookmark&_expand=user")
    // .then((user_likes_response) => {
    //   //console.log(bookmark_list_response);
    //   store.commit("setBookmarks",user_likes_response?.data);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
}
fetchedData();

</script>
