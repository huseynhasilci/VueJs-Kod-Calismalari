<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Register</h3>
    <input v-model="userData.username" type="text" placeholder="Tam Ad" class="input mb-3" />
    <input v-model="userData.fullname" type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
    <input v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" />
    <button class="default-button" @click="onSave">Kayıt ol</button>
    <span class="text-center mt-3 text-sm">
      Zaten Üyeyim,
      <router-link :to="{name:'LoginPage'}" class="text-red-900 hover:text-black">
        Giriş Yap!
      </router-link>
    </span>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import CryptoJS from "crypto-js";

const store = useStore();
const appAxios = inject("appAxios");
const router = useRouter();
const userData = ref({
  username: null,
  fullname: null,
  password: null
})

const onSave = () => {
      const password = userData.value.password;
      //const key = "booklike123!456?";
      const cryeptedPassword = CryptoJS.HmacSHA1(password,store.getters._saltKey).toString();
      appAxios.post("/users", { ...userData.value, password: cryeptedPassword}).then(() => {
        router.push({name: "Home"})
      });
    } 
</script>




