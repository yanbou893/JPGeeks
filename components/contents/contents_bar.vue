<template>
    <div class="tabs">
      
      <input id="all" type="radio" name="tab_item_contents" checked>
        <label class="tab_item_contents" for="all">
          <div style="margin:0 auto;">
            <div style="font-size:12px">Docment</div>
              <p style="padding-top:3px"><i class="fas fa-file-alt fa-lg"></i></p>
          </div>
        </label>
      
      <input id="update" type="radio" name="tab_item_contents">
        <label class="tab_item_contents" for="update">
          <div style="margin:0 auto;">
            <div style="font-size:12px">Note</div>
              <p style="padding-top:3px;font-size:20px;">{{notes.length}}</p>
          </div>
        </label>
      
      <input id="revenu" type="radio" name="tab_item_contents">
        <label class="tab_item_contents" for="revenu">
          <div style="margin:0 auto;">
            <div style="font-size:12px">Revenue</div>
            <div style="padding-top:3px;font-size:15px;">
              <div v-if="monetizes.length!=0">{{maxmoney}}円</div>
              <div v-if="monetizes.length==0">0円</div>
            </div>
          </div>
        </label>
      
      <input id="user" type="radio" name="tab_item_contents">
        <nuxt-link v-bind:to="{name:'user-id',params:{id:user.uid}}">
          <label class="tab_item_contents" for="user">
            <div style="margin:0 auto;">
              <div style="font-size:12px">Founder</div>
          
              <p style="padding-top:3px"><i class="fas fa-user fa-lg"></i></p>
            </div>
          </label>
        </nuxt-link>
      
      
    <div class="tab_content" id="all_content">
      <div class="tab_content_description">
        
        <div v-if="String(user.uid) == this.$store.state.user.uid">
          <nuxt-link v-bind:to="{name:'contents-id-edit-edit_contents_body',params:{id:content.id}}" style="text-decoration: none ;color:white">
              <div class="plusbtn" style="float: right;">編集する</div>
          </nuxt-link>
        </div>
        
        <Contents  :content="content" :user="user" />
      
      </div>
    </div>
    
    
    <div class="tab_content" id="update_content">
      <div class="tab_content_description">
        
        <div v-if="String(user.uid) == this.$store.state.user.uid">
          <nuxt-link v-bind:to="{name:'contents-id-add-add_contents_note',params:{id:content.id}}" style="text-decoration: none ;color:white">
              <div class="plusbtn" style="float: right;">追加する</div>
          </nuxt-link>
        </div>
        
        <Note  :key="index" v-for="(note,index) in notes" :note=note :content="content" :user="user" />
      </div>
    </div>
    
    
    <div class="tab_content" id="revenu_content">
      <div class="tab_content_description">
        
        
        <div class="chart-container">
          <line-chart :chartData="chartData" :options="chartOption" :styles="chartStyles" />
        </div>
        
        <div v-if="String(user.uid) == this.$store.state.user.uid">
          <Revenu  :content="content" :user="user" :datalength="datalength" />
        </div>
        <div v-if="String(user.uid) == this.$store.state.user.uid">
          <nuxt-link v-bind:to="{name:'contents-id-edit-edit_contents_revenu',params:{id:content.id}}" style="text-decoration: none ;color:white">
              <div class="plusbtn" style="float: right;">編集する</div>
          </nuxt-link>
        </div>
        <!--:key="index" v-for="(monetize,index) in monetizes" :monetize=monetize-->
      </div>
    </div>
    
  </div>
</template>
<script>
import Contents from '~/components/contents/contents_body.vue'
import Note from '~/components/contents/contents_note.vue'
import Revenu from '~/components/contents/contents_revenu.vue'
import LineChart from '~/components/contents/BarChart.vue'
import axios from "@/plugins/axios"
  
export default {
    props:{
        content:Object,
        user:Object
    },
  data:function(){
    return{
        monetizes:[],
        notes:[],
        datalength:[],
        chartData:null,
        chartOption:null,
        chartStyles:null,
        maxmoney:0,
        labels:[],
        data:[],
        app:[],
        userdata:[]
        
        
    }
  },
  components: {
    Contents,
    Note,
    Revenu,
    LineChart
  },
    created() {
              axios.get('v1/monetizes',{params: {app_id: this.$route.params.id}})
              .then(res => {
                console.log(this.content.id)
                console.log(res.data)
                this.monetizes= res.data
                this.datalength = this.monetizes.length
                console.log(this.monetizes[0].money)
                
                for(var i=0;i<this.datalength;i++){
                //対象データへのアクセスは data[i] の様な形式
                this.data.push(this.monetizes[i].money)
                this.labels.push(this.monetizes[i].date)
                if(this.maxmoney<=this.monetizes[i].money){
                  this.maxmoney=this.monetizes[i].money
                }
              }
              })
              axios.get('v1/notes',{params: {app_id: this.$route.params.id}})
              .then(res => {
                console.log(res.data)
                this.notes = res.data
              })
              
              // axios.get('v1/apps',{params: {appid: this.$route.params.id}})
              // .then(res => {
              //   console.log(res.data)
              //   this.app = res.data
              //   axios.get('v1/users',{params: {id: this.app.id}})
              //   .then(res => {
              //     console.log(res.data)
              //     this.userdata=res.data
                  
              //   })
              // })
              
              this.chartData={
                labels:this.labels,
                datasets:[
                  {
                    label:"収益",
                    data:this.data,
                    borderColor: "red",
                    fill: false
                  }]
              }
              
                // チャートのオプション
                this.chartOption = {
                  // アスペクト比を固定しないように変更
                  maintainAspectRatio: false
                };
              
                // チャートのスタイル: <canvas>のstyle属性として設定
                this.chartStyles = {
                  height: "100%",
                  width: "100%"
                };
              
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
  width: calc(100%/4);
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
#revenu:checked ~ #revenu_content {
  display: block;
}

/*選択されているタブのスタイルを変える*/
.tabs input:checked + .tab_item_contents {
  background-color: #5ab4bd;
  color: #fff;
}
.chart-container {
  /**
   * vue-chartjsで生成する<canvas>がabsoluteのため、
   * relateveを設定
   */
  position: relative;

  /**
   * chartStylesを設定しているので、
   * height/wightが有効になる
   */
  height: 50vh;
  width: 80vw;
  margin: 0 auto;
}
</style>