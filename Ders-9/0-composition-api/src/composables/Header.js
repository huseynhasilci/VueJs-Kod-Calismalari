import { ref, computed } from "vue";
export default function () {
  const title = ref("bu bir setup basliki");
  const titleLengthMessage = computed(() => {
    return title.value.length + " adet karakter yazılmıştır";
  });
  return{
    title,
    titleLengthMessage
  }
}
