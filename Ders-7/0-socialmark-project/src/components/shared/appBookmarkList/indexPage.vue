<template>
  <div>
    <div class="p-2 grid grid-cols-8 gap-4">
        <BookmarkListItemVue v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import BookmarkListItemVue from './BookmarkListItem.vue';
export default {
    components:{
        BookmarkListItemVue:BookmarkListItemVue
    },
    props:{
      items: {
        type: Array,
        required: true,
        default: () => []
      }
    }
}
</script>
