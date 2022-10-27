<template>
  <div>
    <div class="p-2 grid grid-cols-8 gap-4">
        <BookmarkListItemVue v-for="i in 10" :key="i" />
    </div>
  </div>
</template>

<script>
import BookmarkListItemVue from './BookmarkListItem.vue';
export default {
    components:{
        BookmarkListItemVue:BookmarkListItemVue
    }
}
</script>
