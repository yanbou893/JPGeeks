<template>
  <div class="header">
    <div class="Header_Title">
      <nuxt-link to="/" style="text-decoration: none ;color:white">JP Geeks</nuxt-link>
    </div>
    <div class="Header_item" style="float: right">
      <div v-if="this.$store.state.user.isAuth" style="display:flex">
        <div class="Header_user" v-if="true">
          <nuxt-link v-bind:to="{name:'user-id',params:{id:this.$store.state.user.uid}}" style="text-decoration: none ;color:white"><i class="fas fa-user-circle  fa-2x"></i></nuxt-link>
        </div>
        <div class="Header_Logout" style="padding-bottom:20px">
          <nuxt-link @click.native="logout" :to="{path:'/'}" style="text-decoration: none ;color:white">Logout</nuxt-link>
        </div>
      </div>
      <div v-if="!this.$store.state.user.isAuth"  style="display:flex">
        <div class="Header_Login">
          <nuxt-link to='/login' style="text-decoration: none ;color:white">Login</nuxt-link>
        </div>
        <div class="Header_Signup">
          <nuxt-link to='/signup' style="text-decoration: none ;color:white">SignUp</nuxt-link>
        </div>
      </div>
  </div>
  </div>
</template>
<script>
import firebase from '@/plugins/firebase'

export default {
  components: {
  },
  data(){
    return{
      id:this.$store.state.user.uid
    }
  },
  methods: {
  logout: function() {
    window.localStorage.clear();
      firebase.auth().signOut();
    }
  }
}
</script>
<style>
.header {
  height: 100px;
  width: 100%;
  padding: 15px 0;
  background-color: #f1fcfc;
  color: white;
  display:flex;
}
.Header_Title{
    line-height: 70px;
    font-size: 40px;
    margin-left: 15%;
}
.Header_item{
  display:flex;
  padding-top: 25px;
  width:60%;
  justify-content:flex-end;
}
.Header_user {
  padding-top:5px;
  margin: 0 20px;
  text-align: right;
}
.Header_Login, .Header_Logout{
  background-color:pink;
  padding:10px;
  margin-right:10px;
}
.Header_Signup{
  background-color:black;
  padding:10px;
}
@media screen and (max-width: 480px) {
  
.header {
  height: 50px;
  width: 100%;
  padding: 7px 0;
  background-color: #5ab4bd;
  color: white;
}
.Header_Title{
    line-height: 35px;
    float: left;
    font-size: 20px;
    margin-left: 50px;
    margin-left: 20%;
}
.Header_user {
  font-size: 0.7em;
  display: inline-block;
  margin: 0 10px;
}
.Header_item{
  padding-top: 10px;
}
}
</style>