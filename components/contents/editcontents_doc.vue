<template>
    <div>
        <p>※Markdown記法で記入できます</p>
    <div style="display:flex">
    <textarea v-model="model" class="bodyformat"></textarea>
    <div v-html="$md.render(model)" class="outputformat"></div>
    </div>
    </div>
</template>
 
<script>
export default {
  data() {
    return {
      docment: this.$store.state.contents.docment
    }
  }
}
</script> 
<style>
    .bodyformat, .outputformat{
        width:40%;
        height:300px;
    }
    h1{
        background-color:blue;
    }
</style>