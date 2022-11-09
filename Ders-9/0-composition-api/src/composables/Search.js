import { ref, watchEffect } from "vue";

export default function () {
  const searchText = ref("");
  const isTyping = ref(false);

  // watch(searchText,() => {
  //   if(searchText.value.length > 0){
  //     isTyping.value = true;
  //   }
  //   else{
  //     isTyping.value = false;
  //   }

  // })
  const stop = watchEffect((onInValidate) => {
    if (searchText.value.length > 0) {
      isTyping.value = true;
      const typing = setTimeout(() => {
        isTyping.value = false;
        stop(); // burada bu işlem bittikten sonra bir daha burayı izleme işlemini yapar
      }, 1500);
      onInValidate(() => {
        // eğer ki kullanıcı yazmaya devam ediyorsa setTimeout işlemini iptal et
        clearTimeout(typing);
      });
    }
  });
  return { searchText, isTyping };
}
