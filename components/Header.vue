<template>
  <div class="header">
    
    <div class="Header_Title">
      <nuxt-link to="/" style="text-decoration: none ;color:white">JPGeeks</nuxt-link>
    </div>
    
    <div class="Header_item" style="float: right">
      <div v-if="this.$store.state.user.isAuth" style="display:flex">
        
        <div class="Header_user" v-if="true">
          <nuxt-link v-bind:to="{name:'user-id',params:{id:this.$store.state.user.uid}}" style="text-decoration: none ;color:white">
            
            <img src="image" v-if=false></img>
            <i class="fas fa-user-circle  fa-2x" v-if=true></i>
            
          </nuxt-link>
        </div>
        
        <div class="User_post" style="padding-bottom:20px">
          <nuxt-link  v-bind:to="{name:'user-id-product-newcontents',params:{id:this.$store.state.user.uid}}" style="text-decoration: none ;color:white;border-radius: 5px;">投稿する</nuxt-link>
        </div>
        
        <div class="Header_Logout" style="padding-bottom:20px">
          <nuxt-link @click.native="logout" :to="{path:'/'}" style="text-decoration: none ;color:white;border-radius: 5px;">Logout</nuxt-link>
        </div>
      </div>
      
      <div v-if="!this.$store.state.user.isAuth"  style="display:flex">
        <div class="Header_Login">
          <nuxt-link to='/login' style="text-decoration: none ;color:white;border-radius: 5px;">Login</nuxt-link>
        </div>
        
        <div class="Header_Signup">
          <nuxt-link to='/signup' style="text-decoration: none ;color:white;border-radius: 5px;">SignUp</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from '@/plugins/firebase'
var user = firebase.auth().currentUser;
export default {
  components: {
  },
  data(){
    return{
      image:'',
      id:this.$store.state.user.uid
    }
  },
  mounted: function(){
    this.image=this.$store.state.user.photoURL
  },
  methods: {
  logout: function() {
    window.localStorage.clear();
      this.$store.dispatch('user/signOut')
            this.$router.push("/");
    }
  }
}
</script>
<style>
.header {
  height: 100px;
  width: 100%;
  padding: 15px 0;
  background-color: #174a5c;
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
.Header_Login, .Header_Logout , .User_post{
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
.Header_Login, .Header_Logout , .User_post{
  background-color:pink;
  font-size: 0.7em;
  padding:5px;
  margin-right:5px;
}
.Header_Signup{
  font-size: 0.7em;
  background-color:black;
  padding:5px;
}
}
</style>