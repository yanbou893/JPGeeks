<template>
    <div class="favproduct">
    <div class="card1">
        <p>リリース日</p>
        <p>作成者</p>
        <img src="sample.jpg" class="image1">
        <p class="title1">タイトル</p>
        <p class="content1">本文</p>
    </div>
    <div class="card1">
        <p>リリース日</p>
        <p>作成者</p>
        <img src="sample.jpg" class="image1">
        <p class="title1">タイトル</p>
        <p class="content1">本文</p>
    </div>
    <div class="card1">
        <p>リリース日</p>
        <p>作成者</p>
        <img src="sample.jpg" class="image1">
        <p class="title1">タイトル</p>
        <p class="content1">本文</p>
    </div>
    <div class="card1">
        <p>リリース日</p>
        <p>作成者</p>
        <img src="sample.jpg" class="image1">
        <p class="title1">タイトル</p>
        <p class="content1">本文</p>
    </div>
    <div class="card1">
        <p>リリース日</p>
        <p>作成者</p>
        <img src="sample.jpg" class="image1">
        <p class="title1">タイトル</p>
        <p class="content1">本文</p>
    </div>
    <div class="card1">
        <p>リリース日</p>
        <p>作成者</p>
        <img src="sample.jpg" class="image1">
        <p class="title1">タイトル</p>
        <p class="content1">本文</p>
    </div>
    </div>
</template>
<style type="text/css">
    .favproduct{
        display: flex;
	    flex-wrap:wrap;
    	justify-content: center;
    }
    .card1 {
        width: 300px;
        margin: 20px;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 3px 6px #ccc;
    }
    .image1 {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 5px 5px 0 0;
    }
    .title1 {
        font-size: 150%;
        margin: 10px;
        color: #444;
    }
    .content1 {
        padding: 10px;
        color: #666;
    }
</style>