import { ref, computed, watch} from "vue";

export default function () {
  const counter = ref(0);
  const oddOrEven = computed(() => {
    if (counter.value % 2 == 0) {
      return "Çift";
    } else {
      return "Tek";
    }
  });

  watch(counter, (old_c, new_c) => {
    console.log(old_c, new_c);
  });
  return {counter,oddOrEven}
}
