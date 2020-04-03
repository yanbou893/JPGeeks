<template>
    <div class="contentsform">
        <form>
            <p>サービス名</p>
            <input type="text" v-model="title" />
            <p>サービスの内容</p>
            <input type="text" v-model="semititle" />
            <p>URL</p>
            <input type="text" v-model="URL" />
            <p>アイコン</p>
            <input type="file" @change="onUpload($event)"/>
            <p>Twitter</p>
            <input type="text" v-model="twitter" />
            <p>リリース日</p>
            <input type="text" v-model="release" />
            <p>ビジネスモデル</p>
                    <input type="checkbox" v-model="aaa" value="広告">広告モデル
                    <input type="checkbox" v-model="aaa" value="課金">課金モデル
                    <input type="checkbox" v-model="aaa" value="EC">ECモデル
                    <input type="checkbox" v-model="aaa" value="仲介">仲介モデル
                    <input type="checkbox" v-model="aaa" value="定額">定額課金モデル
                    <input type="checkbox" v-model="aaa" value="なし">なし
            <p>プラットフォーム</p>
                    <input type="checkbox" v-model="bbb" value="iOS">iOS
                    <input type="checkbox" v-model="bbb" value="Android">Android
                    <input type="checkbox" v-model="bbb" value="Desktop">Desktop
                    <input type="checkbox" v-model="bbb" value="Web">Web
                </select>
                <div style="border:solid 1px black;margin:10px;padding:10px;background-color:pink">
                  <div class="contents_docmentacion">作品の内容について</div>
                  <div class="contents_docmentacion_sub">こだわった点や、どういった発想で生まれたサービスなのかを教えてください。</div>
                </div>
                <div style="display:flex" class="bodycontents">
                  <textarea v-model="model" class="bodyformat"></textarea>
                  <div v-html="$md.render(model)" class="outputformat"></div>
                </div>
            <p><div @click.native="next_doc">次へ</div></p>
        </form>
    </div>
</template>
<script>

import axios from "@/plugins/axios"
import uuid from 'uuid'

export default {
  data:function(){
      return{
          title:'',
          semititle: '',
          url:'',
          icon: '',
          bisinessmodel:'',
          pratform: '',
          twitter:'',
          aaa:[],
          bbb:[],
          app_id:null
      }
  },
  methods:{
      	savenote:function(){
            axios.put('v1/apps/' + this.$route.params.id,{
      	        body:this.model})
            this.$router.push({ name: 'contents-id', params: { id: this.app_id }});
      	},
    onUpload: function(e) {
      // アップロード対象は1件のみとする
      const file = (e.target.files || e.dataTransfer.files)[0]
      if (file) {
        const fileName = uuid()
        this.$store
          .dispatch('contents/uploadImage', {
            name: fileName,
            file: file
          })
          .then(url => {
            console.log(url)
            // アップロード完了処理 (ローカルメンバに保存したり)
            this.icon = url
          })
      }
    },
      	next_doc:function(){
      	    this.bisinesmodel=this.aaa.join(',')
      	    this.pratform=this.bbb.join(',')
      	    console.log(this.user)
            axios.put('v1/apps' + this.app_id,{
      	        title:this.title,
      	        semititle:this.semititle,
      	        URL:this.URL,
      	        icon:this.icon,
      	        twitter:this.twitter,
      	        bisinessmodel:this.bisinesmodel,
      	        pratform:this.pratform,
      	        release:''})
            this.$router.push("/");
      	}
  },
  created() {
              axios.get('v1/apps',{params: {appid: this.$route.params.id}})
              .then(res => {
                this.title = res.data.title,
                this.semititle = res.data.semititle,
                this.URL = res.data.URL,
                this.icon = res.data.icon,
                this.twitter = res.data.twitter,
                this.aaa = res.data.bisinessmodel,
                this.bbb = res.data.pratform,
                this.app_id = res.data.id
              })
  
  }
}
</script>
<style>
    .contents_items{
        display:flex;
        margin-left: auto;
        margin-right: auto;
        width:40%;
        padding-left:5%;
        padding-right:5%;
    }
</style>