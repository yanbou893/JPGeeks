<template>
    <div class="contentsform">
        <form>
            <p>タイトル</p>
            <input type="text" v-model="title" />
            <p>スキル</p>
            <input type="text" v-model="skill" autocomplete="on" />
            <p>URL</p>
            <input type="text" v-model="URL" />
            <p>アイコン</p>
            <input type="text" v-model="icon" />
            <p>Twitter</p>
            <input type="text" v-model="twitter" />
            <p>リリース日</p>
            <input type="date" v-model="release" />
            <p>稼働中</p>
            <input type="radio" name="trigger" value="true" v-model="onoff">稼働中
            <input type="radio" name="trigger" value="false" v-model="onoff">閉鎖中
            <p>カテゴリ</p>
                <select name="pref" v-model="category">
                    <option value="AI">AI</option>
                    <option value="APIs">API</option>
                    <option value="Art">アート</option>
                    <option value="Books">本</option>
                    <option value="Bots">Bot</option>
                    <option value="Calendar">Calendar</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Communication">Communication</option>
                    <option value="Community">Community</option>
                    <option value="Content">Content</option>
                    <option value="Cryptocurrency">Cryptocurrency</option>
                    <option value="Design">Design</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Education">Education</option>
                    <option value="Email Marketing">Email Marketing</option>
                    <option value="Events">Events</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Finance">Finance</option>
                    <option value="Food & Drink">Food & Drink</option>
                    <option value="Games">Games</option>
                    <option value="Growth">Growth</option>
                    <option value="Hardware">Hardware</option>
                    <option value="Health & Fitness">Health & Fitness</option>
                    <option value="Home Automation">Home Automation</option>
                    <option value="Investing">Investing</option>
                    <option value="Jobs & Hiring">Jobs & Hiring</option>
                    <option value="Kids">Kids</option>
                    <option value="Legal">Legal</option>
                    <option value="Mailing Lists">Mailing Lists</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Marketplaces">Marketplaces</option>
                    <option value="Medical">Medical</option>
                    <option value="Movies & Video">Movies & Video</option>
                    <option value="Music & Audio">Music & Audio</option>
                    <option value="News & Magazines">News & Magazines</option>
                    <option value="Open Source">Open Source</option>
                    <option value="Outdoors">Outdoors</option>
                    <option value="Payments">Payments</option>
                    <option value="Photography">Photography</option>
                    <option value="Podcasting">Podcasting</option>
                    <option value="Politics">Politics</option>
                    <option value="Productivity">Productivity</option>
                    <option value="Programming">Programming</option>
                    <option value="Sales">Sales</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Sports">Sports</option>
                    <option value="Task Management">Task Management</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Travel">Travel</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Wearables">Wearables</option>
                    <option value="Weather">Weather</option>
                    <option value="WordPress">WordPress</option>
                </select>
            <p>ビジネスモデル</p>
                <select name="pref" v-model="bisinesmodel">
                    <option value="Tokyo">広告モデル</option>
                    <option value="Tokyo">課金モデル</option>
                    <option value="Tokyo">ECモデル</option>
                    <option value="Tokyo">仲介モデル</option>
                    <option value="Tokyo">なし</option>
                </select>
            <p>プラットフォーム</p>
                <select name="pref" v-model="pratform">
                    <option value="iOS">iOS</option>
                    <option value="Android">Android</option>
                    <option value="Desktop">Desktop</option>
                    <option value="Web">Web</option>
                </select>
            <p><nuxt-link to="/user/${id}/product/newcontents_doc" @click.native="next_doc">次へ</nuxt-link></p>
        </form>
    </div>
</template>
<script>

export default {
  data:function(){
      return{
          
          title:'',
          skill:'',
          URL:'',
          icon:'',
          twitter:'',
          release:'',
          onoff:'',
          category:'',
          bisinesmodel:'',
          pratform:'',
          main:[this.title,this.skill,this.URL,this.icon,this.twitter,
          this.release,this.onoff,this.category,this.bisinesmodel,this.pratform],
      }
  },
  methods:{
      	next_doc:function(){
      	    this.$store.commit('contents/maincontnents(this.main)');
      	}
  },
  mounted: function() {
  window.onbeforeunload = function(e) {
    e.returnValue = "本当にページを閉じますか？";
  }
  }
}
</script>