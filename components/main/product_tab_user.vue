<template>
	<div>
	  <div class="allcontents">
	 <newproduct  :key="index" v-for="(content,index) in contents" :content=content />
  </div>
  </div>
</template>
<script>
import newproduct from '~/components/main/newproduct.vue'
import axios from "@/plugins/axios"

export default {
  components: {
    newproduct,
  },
  data:function(){
  	return{
          contents:[],
          id:0,
  		serch_bar:false
  	}
  },
  beforeMount(){
                
                axios.get('v1/apps',{params:{user_id:this.$store.state.user.id}})
                .then(res => {
                      console.log(res.data);
                      this.contents = res.data;
                      console.log(this.contents);
                })
                .catch(error => {
                      console.log(error);
                });
        
    }
}
</script>
<style>
@media (max-width: 480px) {
}

</style>