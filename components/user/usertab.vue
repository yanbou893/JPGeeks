<template>
    <div class="tabs">
  <input id="all" type="radio" name="tab_item" checked>
  <label class="tab_item" for="all">product</label>
  <input id="programming" type="radio" name="tab_item">
  <label class="tab_item" for="programming">skill</label>
  <input id="design" type="radio" name="tab_item">
  <label class="tab_item" for="design">contact</label></label>
  <div class="tab_content" id="all_content">
    <div class="tab_content_description">
      <product />
    </div>
  </div>
  <div class="tab_content" id="programming_content">
    <div class="tab_content_description">
      <skill />
    </div>
  </div>
  <div class="tab_content" id="design_content">
    <div class="tab_content_description">
      <contact />
    </div>
  </div>
</div>
</template>
<script>
import product from '~/components/user/product_tab_user.vue'
import contact from '~/components/contact/contact.vue'
import skill from '~/components/skill/skill.vue'
  
export default {
  components: {
    product,
    contact,
    skill
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
.tab_item {
  width: calc(100%/3);
  height: 50px;
  border-bottom: 3px solid #5ab4bd;
  background-color: #40e0d0;
  line-height: 50px;
  font-size: 16px;
  text-align: center;
  color: #565656;
  display: block;
  float: left;
  text-align: center;
  font-weight: bold;
  transition: all 0.2s ease;
}
.tab_item:hover {
  opacity: 0.75;
}

/*ラジオボタンを全て消す*/
input[name="tab_item"] {
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
#programming:checked ~ #programming_content,
#design:checked ~ #design_content {
  display: block;
}

/*選択されているタブのスタイルを変える*/
.tabs input:checked + .tab_item {
  background-color: #5ab4bd;
  color: #fff;
}
</style>