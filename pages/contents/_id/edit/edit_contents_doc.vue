<template>
    <div class="addcontentsdoc">
        <div class="contents_docmentacion">作品の内容について</div>
        {{$store.state.contents.title}}
    <div style="display:flex" class="bodycontents">
    <textarea v-model="model" class="bodyformat"></textarea>
    <i class="fas fa-arrow-right fa-2x" style="padding-top:250px"></i>
    <div v-html="$md.render(model)" class="outputformat"></div>
    </div>
    <div class="next_money">
     <p><nuxt-link to="/contents/${id}" @click.native="next_money">更新する</nuxt-link></p>
    </div>
    </div>
</template>
 
<script>
export default {
  data:function() {
    return {
      model: "# なぜつくったのか等"
    }
  },
  computed: {
    title() {
      return this.$store.state.contents.title;
    }
  },
  methods:{
      	next_money:function(){
      	    this.$store.commit('contents/contentsbody(this.model)');
      	}
  }
}
</script> 
<style>
.contents_docmentacion{
    font-size:20px;
    padding-left:70px;
    padding-bottom:20px;
}
.addcontentsdoc{
	padding-top:20px;
	padding-bottom:40px;
}
    .bodyformat, .outputformat{
        width:35%;
        margin:0 auto;
        border : solid 1px black;
    }
    .bodyformat{
        height:500px;
    }
    .next_money{
        float:right;
        padding-right:70px;
        padding-bottom:30px;
    }
    .bodycontents{
        padding-bottom:20px;
    }
</style>