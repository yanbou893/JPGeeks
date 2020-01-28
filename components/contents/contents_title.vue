<template>
    <div class="contents_title">
        <a href="#" style="text-decoration: none">
        <div class="box5">
          <div class="contents_item">
            <img class="contents_icon" src="~/assets/image/images.png">
            <div class="contents_text" style="text-align:left;padding-top:20px;padding-left:20px">
              <p class="contents_name" style="padding-bottom:10px">JP Geeks</p>
              <p class="contents_content">ポートフォリオ兼個人開発作品共有サービス</p>
            </div>
            <!--<div class="contents_tag" style="margin:0 20% 0 auto">-->
            <!--    <p class="category">AI</p>-->
            <!--    <p class="model">広告</p>-->
            <!--    <p class="pratform">iOS</p>-->
            <!--</div>-->
          </div>
        </div>
        </a>
      </div>
</template>
<style>
    
.contents_title {
        width: 80%;
        height: 200px;
        margin:10px auto;
        border-radius: 5px;
        background-color: #fff;
        padding-top:10px;
        background-color:gray;
        justify-content: center;
        align-items: center;
    }
    .box5 {
        margin-top:10px;
        margin-bottom:10px;
    }
    .contents_item{
        display: flex;
        padding-bottom:30px;
        align-items: center;
    }
    .contents_icon {
        width: 100px;
        height: 100px;
        margin-left:40px;
        border: 0px solid black;
        border-radius: 50%;
        line-height: 50px;
        margin-top:50px;
    }
    .contents_text{
        align-items: center;
        margin-left:10px;
    }
    .contents_name {
        font-size: 125%;
        margin-top:10px;
        color:white;
    }
    .contents_content {
        font-size: 80%;
        color:white;
    }
    .contents_tag{
        display:flex;
    }
    .contents_tag p{
        padding-right:10px;
        border: 1px solid black;
        
    }
</style>