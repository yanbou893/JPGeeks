<template>
	<div>
    <div class="cp_tab" style="justify-content: center;">
	    <input type="radio" name="cp_tab" id="tab1_1" aria-controls="first_tab01" checked>
	    <label for="tab1_1">新着</label>
	    <input type="radio" name="cp_tab" id="tab1_2" aria-controls="second_tab01">
	    <label for="tab1_2">人気</label>
	    <input type="radio" name="cp_tab" id="tab1_3" aria-controls="therd_tab01" >
	    <label for="tab1_3">アップデート</label>
	          <nuxt-link to="/user/${id}/product/newcontents"  class="plusbtn_contents"><i class="fas fa-plus fa-lg" style="float: right;color:white"></i></nuxt-link>
	    <div class="cp_tabpanels">
	    	<div id="first_tab01" class="cp_tabpanel">
	    	    <newproduct />
	    	</div>
	    	<div id="second_tab01" class="cp_tabpanel">
	    	    <favproduct />
	    	</div>
	    	<div id="therd_tab01" class="cp_tabpanel">
	    	    <newproduct />
	    	</div>
	    </div>
    </div>
    </div>
</template>
<script>
import favproduct from '~/components/main/favproduct.vue'
import newproduct from '~/components/main/newproduct.vue'
export default {
  components: {
    newproduct,
    favproduct,
  }
}
</script>
<style>
.plusbtn_contents nuxt-link {
  display: block;
  
  margin: 0 5px 5px 0;
  padding: 0;
  color: white;
}
.fa-filter{
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border: 1px solid white;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
}
.plusbtn_contents i {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border: 1px solid white;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  
}
.plusbtn_contents .fa-plus { background: #EF5350; }
    .cp_tab *, .cp_tab *:before, .cp_tab *:after {
	-webkit-box-sizing: border-box;
	        box-sizing: border-box;
}
.cp_tab {
	margin: 1em auto;
	width:70%;
}
.cp_tab > input[type='radio'] {
	margin: 0;
	padding: 0;
	border: none;
	border-radius: 0;
	outline: none;
	background: none;
	-webkit-appearance: none;
	        appearance: none;
	display: none;
}
.cp_tab .cp_tabpanel {
	display: none;
}
.cp_tab > input:first-child:checked ~ .cp_tabpanels > .cp_tabpanel:first-child,
.cp_tab > input:nth-child(3):checked ~ .cp_tabpanels > .cp_tabpanel:nth-child(2),
.cp_tab > input:nth-child(5):checked ~ .cp_tabpanels > .cp_tabpanel:nth-child(3),
.cp_tab > input:nth-child(7):checked ~ .cp_tabpanels > .cp_tabpanel:nth-child(4),
.cp_tab > input:nth-child(9):checked ~ .cp_tabpanels > .cp_tabpanel:nth-child(5),
.cp_tab > input:nth-child(11):checked ~ .cp_tabpanels > .cp_tabpanel:nth-child(6) {
	display: block;
}
.cp_tab > label {
	position: relative;
	display: inline-block;
	padding: 15px;
	cursor: pointer;
	border: 1px solid transparent;
	border-bottom: 0;
}
.cp_tab > label:hover,
.cp_tab > input:focus + label {
	color: #0066cc;
}
.cp_tab > input:checked + label {
	margin-bottom: -1px;
	border-color: #cccccc;
	border-bottom: 1px solid #ffffff;/*背景色と同じ*/
	border-radius: 6px 6px 0 0;
}
.cp_tab .cp_tabpanel {
	padding: 0.5em 1em;
	border-top: 1px solid #cccccc;
}
@media (max-width: 480px) {
	.cp_tab {
		width: 100%;
		font-size: 0.8em;
	}
	.cp_tab label {
		padding: 0.5em;
	}
.plusbtn_contents i {
  width: 25px;
  height: 25px;
  margin: 0 auto;
  border: 1px solid white;
  border-radius: 50%;
  line-height: 25px;
  text-align: center;
}
.fa-plus{
	font-size:0.7rem;
}
.fa-filter{
	font-size:1rem;
  width: 25px;
  height: 25px;
  padding-right: 35px;
  margin: 0 auto;
  border: 1px solid white;
  border-radius: 50%;
  line-height: 25px;
  text-align: center;
}
}

</style>