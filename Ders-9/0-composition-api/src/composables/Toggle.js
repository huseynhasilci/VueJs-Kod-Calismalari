import { ref } from "vue";
export default function () {
  let show = ref(false);
    const toggleIt = () => {
      show.value = !show.value;
    };
  return{
    show,
    toggleIt
  }
}
