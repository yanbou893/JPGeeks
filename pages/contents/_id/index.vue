<template>
  <div class="contents_all">
      <ContentsTitle />
      <ContentsBar />
      <div class="contents_like" style="float:left">
        <i class="far fa-heart"></i>
      </div>
      <div class="contents_commentform">
        <form>
          <input type="text" name=""/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
      <div class="contents_comment">
        コメント
      </div>
  </div>
</template>

<script>
import ContentsBar from '~/components/contents/contents_bar.vue'
import ContentsTitle from '~/components/contents/contents_title.vue'
  
export default {
  components: {
    ContentsBar,
    ContentsTitle
  }
}
</script>

<style>
.contents_all{
  text-align:center;
  color:white;
  background-color:gray;
  padding-top:0;
}
</style>