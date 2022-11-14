<template>
  <div>
    <div class="p-2 grid grid-cols-8 gap-4">
      <BookmarkListItemVue v-for="item in props.items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script setup>
import BookmarkListItemVue from "./BookmarkListItem.vue";
import { defineProps } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
