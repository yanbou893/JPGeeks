<template>
    <div class="contentsform">
        <form>
            <p>サービス名</p>
            <input type="text" v-model="title" />
            <p>サービスの内容</p>
            <input type="text" v-model="intro" />
            <p>URL</p>
            <input type="text" v-model="URL" />
            <p>アイコン</p>
            <input type="file" @change="onUpload($event)"/>
            <p>Twitter</p>
            <input type="text" v-model="twitter" />
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
            <p><nuxt-link to="/user/${id}/product/newcontents_doc" @click.native="next_doc">次へ</nuxt-link></p>
        </form>
    </div>
</template>
<script>
import axios from "@/plugins/axios"
import uuid from 'uuid'

export default {
  data:function(){
      return{
          user:[],
          model: '# なぜつくったのか等',
          title:'',
          intro:'',
          URL:'',
          icon:'',
          twitter:'',
          aaa:[],
          bbb:[],
          bisinesmodel:'',
          pratform:'',
          input:this.icon
      }
  },
  methods:{
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
      	    const app ={
      	        user_id:this.user.id,
      	        title:this.title,
      	        semititle:this.intro,
      	        URL:this.URL,
      	        icon:this.icon,
      	        twitter:this.twitter,
      	        bisinessmodel:this.bisinesmodel,
      	        pratform:this.pratform,
      	        release:'',
      	        body:this.model
      	    }
            axios.post('v1/apps',{app})
            this.$router.push("/");
      	}
  },
    beforeMount() {
        axios.get('v1/users',{params: {uid: this.$route.params.id}})
        .then(response => {
              console.log(response.data);
              console.log(response.data.id);
              this.user = response.data;
        })
        .catch(error => {
              console.log(error);
        });
    }
  
}
</script>