<template>
<div class="card3">
    <div class="box3" style="float: left">
        <img class="image3" src="~/assets/image/images.png">
        <div>
            <p class="title3">タイトル</p>
            <p class="content3">本文</p>
        </div>
    </div>
</div> 
</template>

<script>

</script>

<style type="text/css">
    .card3 {
        width: 70%;
        border-radius: 5px;
        background-color: #72b5b7;
    	margin:  0 auto;
    }
    .box3 {
        display: flex;
        margin-top:20px;
        margin-bottom:20px;
    }
    .image3 {
        width: 80px;
        height: 80px;
        margin-top:20px;
        margin-left:50px;
        border: 1px solid black;
        border-radius: 50%;
        line-height: 80px;
        object-fit: cover;
    }
    .title3 {
        font-size: 100%;
        margin-top:25px;
        margin-left:10px;
        color: #444;
    }
    .content3 {
        font-size: 80%;
        padding: 10px;
        margin-left:10px;
        color: #666;
    }
</style>