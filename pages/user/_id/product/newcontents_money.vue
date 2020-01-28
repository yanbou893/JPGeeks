<template>
    <div class="addcontentsmoney">
        <div style="border:solid 1px black;margin:10px;padding:10px;background-color:pink">
            <div class="contents_docmentacion">View数について書く</div>
        </div>
    <div style="display:flex" class="moneycontents">
    <textarea v-model="view" class="bodyformat"></textarea>
    <div v-html="$md.render(view)" class="outputformat"></div>
    </div>    
    <div style="border:solid 1px black;margin:10px;padding:10px;background-color:pink">
            <div class="contents_docmentacion">収益について書く</div>
            <div class="contents_docmentacion_sub">*adsens等の規約については各自確認をお願いします。</div>
    </div>
    <div style="display:flex" class="moneycontents">
    <textarea v-model="revenu" class="bodyformat"></textarea>
    <div v-html="$md.render(revenu)" class="outputformat"></div>
    </div>
    <div class="complete_contents">
    <nuxt-link to="/" @click.native="complete_contents" class="button">完了</nuxt-link>
    </div>
    </div>
</template>
 
<script>
export default {
  data:function() {
    return {
      view: "# なぜつくったのか等",
      revenu: "# なぜつくったのか等"
    }
  },
  computed: {
    title() {
      return this.$store.state.contents.title;
    }
  },
  methods:{
      	complete_contents:function(){
      	    this.$store.commit('contents/contentsmoney(this.model)');
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
.addcontentsmoney{
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
    .complete_contents{
        float:right;
        padding-right:70px;
        padding-bottom:30px;
    }
    .moneycontents{
        padding-bottom:20px;
        height:300px;
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
