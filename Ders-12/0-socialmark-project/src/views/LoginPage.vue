<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Login</h3>
    <input v-model="userData.username" type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
    <input v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" />
    <button @click="onSubmit" class="default-button">Giriş yap</button>
    <span class="text-center mt-3 text-sm">
      Üye değilim,

      <router-link :to="{ name: 'RegisterPage' }" class="text-red-900 hover:text-black"> Üye olmak istiyorum! </router-link>
    </span>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import CryptoJS from "crypto-js";
const userData = ref({
  username: null,
  password: null,
});
const appAxios = inject("appAxios");
const store = useStore()
const router = useRouter();

const onSubmit = () => {
  const password = userData.value.password;

  const cryeptedPassword = CryptoJS.HmacSHA1(password, store.getters._saltKey).toString();
  appAxios
    .get(`/users?username=${userData.value.username}&password=${cryeptedPassword}`)
    .then((login_response) => {
      console.log(login_response);
      if (login_response.data.length >= 1) {
        store.commit("setUser", login_response?.data[0]);
        router.push({ name: "Home" });
      } else {
        alert("Böyle bir kullanıcı bulunmamaktadır.");
      }
    })
    .catch((e) => {
      console.log("e :>> ", e);
    });
};
</script>
