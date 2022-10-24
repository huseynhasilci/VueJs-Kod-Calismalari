<template>
  <div class="container">
    <p>
      <!-- {{$store.state.user}}
      {{$store.state.theme}} -->
    </p>
    <!-- <ul>
      <li v-for="permission in $store.state.permissions" :key="permission">
        {{permission}}
      </li>

    </ul> -->
    <!-- <ul>
      <li v-for="user in $store.state.userList" :key="user">
        {{user}}
      </li>

    </ul> -->
    <UserList/>
    <NewUser/>
  </div>
  
  
</template>

<script>
//import { mapGetters } from 'vuex';
import UserList from "@/components/UserList.vue";
import NewUser from "@/components/NewUser.vue";
export default {
  name: 'App',
  components:{
    NewUser,
    UserList
  },
  created(){
    //console.log(this.$store.state.user);
    //console.log(this.$store.state.theme);
    console.log(this.$store.getters._woodItems);
    //console.log(this.$store.getters.activeUser);
    console.log('this.activeUser :>> ', this.activeUser);
  },
  
  // methods:{
  //   updateName(){
  //     this.$store.state.itemList.push({id:6,title:"Raf",type:"mobilya1"})
  //     this.$store.state.fullname = new Date().getTime();
  //   }
  // },
  // computed:{
  //   //...mapGetters(["woodItems","activeUser"]),
  //   ...mapGetters({
  //     woodItems: "_woodItems",
  //     activeUser: "_activeUser"
  //   }),
  //   // customComputed(){

  //   // }
  // }
  //computed: mapGetters(["woodItems","activeUser"])
  //{
    // mobilyaElemanlari(){
    //   return this.$store.getters.woodItems;
    // },
  
  //}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
