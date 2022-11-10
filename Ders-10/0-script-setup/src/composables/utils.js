import { ref, onMounted } from "vue";
export default function () {
  const title = ref("baslik");
  const counter = ref(0);
  const inc = () => {
    counter.value += 1;
  };
  const alertMe = (info) => {
    console.log(info);
  };
  onMounted(() => {
    console.log("mounted esnasında yapılabilecekler burada");
  })

  return {title,counter,inc,alertMe};
}
