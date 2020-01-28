<template>
    <div class="tabs">
      <input id="all" type="radio" name="tab_item_contents" checked>
      <label class="tab_item_contents" for="all">
        <div style="margin:0 auto;">
          <div style="font-size:12px">Docment</div>
          
          <p style="padding-top:3px"><i class="fas fa-file-alt fa-lg"></i></p>
        </div></label>
      
      <input id="update" type="radio" name="tab_item_contents">
      <label class="tab_item_contents" for="update">
        <div style="margin:0 auto;">
          <div style="font-size:12px">Updates</div>
          
          <p style="padding-top:3px;font-size:20px;">2</p>
        </div>
        </label>
      
      <input id="doll" type="radio" name="tab_item_contents">
      <label class="tab_item_contents" for="doll">
        <div style="margin:0 auto;">
          <div style="font-size:12px">Revenue</div>
          
          <p style="padding-top:3px;font-size:20px;">3</p>
        </div></label>
      
      <input id="eye" type="radio" name="tab_item_contents">
      <label class="tab_item_contents" for="eye">
        <div style="margin:0 auto;">
          <div style="font-size:12px">View</div>
          
          <p style="padding-top:3px;font-size:20px;">12</p>
        </div></label>
      
      <input id="user" type="radio" name="tab_item_contents">
      <nuxt-link to="/user/${id}"><label class="tab_item_contents" for="user">
        <div style="margin:0 auto;">
          <div style="font-size:12px">Founder</div>
          
          <p style="padding-top:3px"><i class="fas fa-user fa-lg"></i></p>
        </div>
          </label></nuxt-link>
      
      <input id="twitter" type="radio" name="tab_item_contents">
      <a href="#" target="_blank"><label class="tab_item_contents" for="twitter">
        <div style="margin:0 auto;">
          <div style="font-size:12px">Twitter</div>
          
          <p style="padding-top:3px"><i class="fab fa-twitter fa-lg"></i></p>
        </div>
          </label></a>
      
    <div class="tab_content" id="all_content">
      <div class="tab_content_description">
        <Contents />
      </div>
    </div>
    <div class="tab_content" id="update_content">
      <div class="tab_content_description">
        <Update />
      </div>
    </div>
    <div class="tab_content" id="doll_content">
      <div class="tab_content_description">
        <Doll />
      </div>
    </div>
    <div class="tab_content" id="eye_content">
      <div class="tab_content_description">
        <Wacth />
      </div>
    </div>
</div>
</template>
<script>
import Contents from '~/components/contents/contents_contents.vue'
import Update from '~/components/contents/contents_update.vue'
import Doll from '~/components/contents/contents_doll.vue'
import Wacth from '~/components/contents/contents_wacth.vue'
  
export default {
  components: {
    Contents,
    Update,
    Doll,
    Wacth
  }
}
</script>
<style>
.tabs {
  margin-top: 50px;
  padding-bottom: 40px;
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
	justify-content: center;}

/*タブのスタイル*/
.tab_item_contents {
  width: calc(100%/6);
  height: 50px;
  border-bottom: 3px solid #5ab4bd;
  background-color: #d9d9d9;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #565656;
  display: block;
  float: left;
  text-align: center;
  font-weight: bold;
  transition: all 0.2s ease;
}
.tab_item_contents:hover {
  opacity: 0.75;
}

/*ラジオボタンを全て消す*/
input[name="tab_item_contents"] {
  display: none;
}

/*タブ切り替えの中身のスタイル*/
.tab_content {
  display: none;
  padding: 40px 40px 0;
  clear: both;
  overflow: hidden;
}


/*選択されているタブのコンテンツのみを表示*/
#all:checked ~ #all_content,
#update:checked ~ #update_content,
#doll:checked ~ #doll_content,
#eye:checked ~ #eye_content {
  display: block;
}

/*選択されているタブのスタイルを変える*/
.tabs input:checked + .tab_item_contents {
  background-color: #5ab4bd;
  color: #fff;
}
</style>