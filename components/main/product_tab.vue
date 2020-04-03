<template>
	<div>
	  <div class="allcontents">
	   <newproduct  :key="index" v-for="(content,index) in pagedatas[page-1]" :content=content />
	   </div>
    <ul>
      <li v-for="n of max" :key="n" @click="nav(n)" class="navbutton">{{n}}</li>
    </ul>
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
          pagedatas:[],
          pagedata:[],
          page:1,
          max:null,
  	}
  },
  beforeMount(){
    
        axios.get('v1/apps')
        .then(response => {
              console.log(response.data[0]);
              this.contents=response.data
              for(var i=0;i<response.data.length;i++){
              //対象データへのアクセスは data[i] の様な形式
                this.pagedata.push(response.data[i])
                if(i%8==0 && i!=0 ){
                  this.pagedatas.push(this.pagedata)
                  this.pagedata = [];
                }else if(i==response.data.length-1){
                  
                  this.pagedatas.push(this.pagedata)
                  this.pagedata = [];
                }
              }
              this.max=this.pagedatas.length
              
              this.contents = response.data;
              console.log(this.contents);
        })
        .catch(error => {
              console.log(error);
        });
    },
  methods:{
      	nav:function(index){
      	  this.page = index
      	}
  },
}
</script>
<style>
.navbutton{
  list-style:none;
  cursor: pointer;
  display: inline;
  padding:10px;  
}
.allcontents{
  display:flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
}
@media (max-width: 480px) {

.navbutton{
  list-style:none;
  cursor: pointer;
  display: inline;
  padding:10px;  
}
}
</style>