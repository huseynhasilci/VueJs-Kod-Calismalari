<template>
  <AppHeader></AppHeader>

  <div class="flex flex-row">
    <SideBarVue></SideBarVue>
    <app-bookmark-list/>
  </div>
</template>

<script>
import SideBarVue from "@/components/Home/SideBar.vue";
export default {
  components: {
    SideBarVue: SideBarVue,
  },
};
</script>
