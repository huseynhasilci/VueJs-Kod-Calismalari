<template>
  <AppHeader></AppHeader>

  <div class="flex flex-row">
    <SideBarVue @category-changed="updateBookmartList"></SideBarVue>
    <app-bookmark-list v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>Henüz eklenmiş bir bookmark bulunmamaktadır</div>
  </div>
</template>

<script>
import SideBarVue from "@/components/Home/SideBar.vue";
export default {
  components: {
    SideBarVue: SideBarVue,
  },
  data() {
    return {
      bookmarkList: [],
    };
  },
  mounted() {
    this.$socket.on("NEW_BOOKMARK_ADDED", (bookmark) => {
      this.bookmarkList.push(bookmark);
    });
  },
  created() {
    this.fetchedData();
  },
  methods: {
    updateBookmartList(categoryId) {
      const url = categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}` : `/bookmarks?_expand=category&_expand=user`;
      this.$appAxios
        .get(url)
        .then((bookmark_list_response) => {
          console.log(bookmark_list_response);
          this.bookmarkList = bookmark_list_response?.data || [];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchedData() {
      this.$appAxios
        .get("/bookmarks?_expand=category&_expand=user")
        .then((bookmark_list_response) => {
          console.log(bookmark_list_response);
          this.bookmarkList = bookmark_list_response?.data || [];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
