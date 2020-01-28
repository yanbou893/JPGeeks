<template>
    <div class="addcontentsdoc">
        <div style="border:solid 1px black;margin:10px;padding:10px;background-color:pink">
        <div class="contents_docmentacion">作品の内容について</div>
        <div class="contents_docmentacion_sub">こだわった点や、どういった発想で生まれたサービスなのかを教えてください。</div>
        <div class="contents_docmentacion_sub">＊MarkDown記法でご記入いただけます。</div>
        </div>
    <div style="display:flex" class="bodycontents">
    <textarea v-model="model" class="bodyformat"></textarea>
    <div v-html="$md.render(model)" class="outputformat"></div>
    </div>
    <div class="next_money">
    <nuxt-link to="/user/${id}/product/newcontents_money" @click.native="next_money" class="button">次へ</nuxt-link>
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
  },
  mounted: function() {
  window.onbeforeunload = function(e) {
    e.returnValue = "本当にページを閉じますか？";
  }
  }
}
</script> 
<style>
.contents_docmentacion{
    font-size:20px;
    padding-left:20px;
}
.contents_docmentacion_sub{
    font-size:15px;
    padding-left:30px;
}
.addcontentsdoc{
	padding-top:20px;
	padding-bottom:40px;
}
    .bodyformat, .outputformat{
        width:50%;
        margin:0 auto;
        border : solid 1px lightgray;
    }
    .outputformat{
        background-color:lightgray;
        overflow:scroll;
    }
    .bodyformat{
    }
    .next_money{
        float:right;
        padding-right:70px;
        padding-bottom:30px;
    }
    .bodycontents{
        padding-bottom:20px;
        height:700px;
    }
    .button {
      background-color: #333;
      color: #fff;
      text-decoration: none ;
      padding:10px;
      border-radius:20%;
    }
    .button:hover {
      background-color: #59b1eb;
    }
</style>