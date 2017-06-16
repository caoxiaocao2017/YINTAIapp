<template>
  <div class="fenlei">
    <div class="left">
    	<ul>
    		<li v-for="(item,index) in arr" @click="cHange" :data-index="index" :data-id="item.id">{{item.name}}</li>
    	</ul>
    </div>
    <div class="right">
    	<div class="r-top1">
    		<div class="xian1"></div>
    		<div class="tjlm">推荐类目</div>
    		<div class="xian2"></div>
    	</div>
    	<ul class="tjlmlist">
    		<li v-for="(item,index) in tjgoods">
    			<i><img :src="item.imageurl"/></i>
    			<span>{{item.name}}</span>
    		</li>
    	</ul>
    	<div class="r-top2">
    		<div class="xxian1"></div>
    		<div class="tjpp">推荐品牌</div>
    		<div class="xxian2"></div>
    	</div>
    	<ul class="tjpplist">
    		<li v-for="(item,index) in ppgoods" >
    			<em><img :src="item.imageurl"></em>
    		</li>
    	</ul>
    	<div class="r-top3">
    		<div class="xxxian1"></div>
    		<div class="gdlm">更多类目</div>
    		<div class="xxxian2"></div>
    	</div>
    	<ul class="gdlmlist">
    		<li v-for="(item,index) in moregoods">{{item.name}}</li>
    	</ul>
    </div> 
  </div>
</template>

<script>
import Vue from 'vue'
import jsonp from 'jsonp'
export default {
  name: 'fenlei',
  data () {
    return {
      arr:"",
      tjgoods:"",
      ppgoods:"",
      moregoods:"",
      index:"",
      goodsId:""
    }
  },
  created(){
  	var url ="/Services/Proxy.ashx?r=0.3258833658238207&methodName=products.category.getcategory_3.0.0&method=products.category.getcategory&ver=3.0.0"
  	Vue.axios.get(url).then((data) => {
		  // console.log(data.data.data.data)
		   this.arr = data.data.data.data
		})
  	//console.log(this.goodsId)
  		//首页渲染时默认为id为88的；
  	var goodurl ="/Services/Proxy.ashx?r=0.6072269789421558&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=88"
  	//console.log(goodurl)
  	Vue.axios.get(goodurl).then((data) => {
		  // console.log(data.data.data.id)
		   this.tjgoods = data.data.data.recommend.categoryrecommend
		   this.ppgoods = data.data.data.brand.brandrecommend
		   this.moregoods = data.data.data.more.morerecommend
		})
  },
  methods:{
  	cHange:function(event){
  		//alert(1)
  		//var left =document.getElementsByClassName("left")[0];
  		//var lLi =left.getElementsByTagName("li")
  		//console.log(event.target.dataset.index)
  		this.index = event.target.dataset.index;
  		//lLi[this.index ].style.background="white";
  		//console.log(event.target.dataset.id)//获取点击项的ID;
  		this.goodsId = event.target.dataset.id;
  		//console.log(this.goodsId)
  			var id = this.goodsId;//menu里的ID
	  	var goodurl ="/Services/Proxy.ashx?r=0.6072269789421558&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid="+id
	  	//console.log(goodurl)
	  	Vue.axios.get(goodurl).then((data) => {
			  // console.log(data.data.data.id)
			   this.tjgoods = data.data.data.recommend.categoryrecommend
			   this.ppgoods = data.data.data.brand.brandrecommend
			   this.moregoods = data.data.data.more.morerecommend
			})
	  	}
  }
  	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0px;
}

a {
  color: #42b983;
}
*{
	margin:0;
	padding:0;
}
html,body{
	font-size:15.625vw;
}
.fenlei{
  height:9.28rem;
	display:flex;
	justify-content: space-between;
	
}
.left{
	width:1.6rem;
	height:9.26rem;
	background:#f5f5f5;
	overflow: scroll;
}
.left ul{
	display:flex;
	align-items: baseline;
	flex-direction: column;
}
.left ul li{
	width:1.6rem;
	height:1.1rem;
	border-right: 1px solid #d2d2d2;
  color: #333;
  font-size:.24rem;
  font-family: sans-serif;
  line-height:1.1rem;
}
.right{
	width:4.8rem;
	height:9.26rem;
	overflow: scroll;
}

.r-top1{
	width:4.4rem;
	height:.7rem;
	margin:0 7px;
	display:flex;
	flex-direction: row;
	justify-content:space-between;
	align-items:center;
	color: #333;
  font-size:.24rem;
  font-family: sans-serif;
}
.xian1,.xian2{
	width:1.4rem;
	height:.02rem;
	background:#D2D2D2;
	/*margin-top:7px;*/
}
.tjlm{
	width:1.44rem;
	height:.4rem;
}
.tjlmlist{
	width:4.8rem;
/*	height:7.3rem;*/
}
.tjlmlist li{
	width:1.46rem;
	height:2.14rem;
	/*display:flex;
	align-items:stretch;
	flex-direction:column;*/
	padding-top:10px;
	margin-bottom:3px;
}
.tjlmlist li i{
	display:inline-block;
	width:1.1rem;
	height:1.1rem;
}
.tjlmlist li i img{
	width:100%;
	height:100%;
}
.tjlmlist li span{
	display:inline-block;
	width:1.46rem;
	height:.4rem;
	font-size:.24rem;
  font-family: sans-serif;
  color:#666;
  margin-top:10px;
}
/*推荐品牌*/
.r-top2{
	width:4.4rem;
	height:.7rem;
	margin:0 7px;
	display:flex;
	flex-direction: row;
	justify-content:space-between;
	align-items:center;
	color: #333;
 font-size:.24rem;
  font-family: sans-serif;
}
.xxian1,.xxian2{
	width:1.4rem;
	height:.02rem;
	background:#D2D2D2;
	/*margin-top:7px;*/
}
.tjpp{
	width:1.44rem;
	height:.4rem;
}
.tjpplist{
	width:4.8rem;
/*	height:8.74rem;*/
	/*display:flex;
	justify-content: space-between;
	flex-wrap: wrap;*/
	
}
.tjpplist li{
	width:1.46rem;
	height:1.34rem;
	display:flex;
	justify-content: center;
	align-items: center;
	float:left;
	margin:2px;	
}
.tjpplist li em{
	width:1.24rem;
	height:.84rem;
	display: inline-block;
	border:2px solid #f6f6f6;
}
.tjpplist li em img{
	width:100%;
	height:100%;
}
/*更多类目*/
.r-top3{
	width:4.4rem;
	height:.7rem;
	margin:0 7px;
	display:flex;
	flex-direction: row;
	justify-content:space-between;
	align-items:center;
	color: #333;
  font-size:.24rem;
  font-family: sans-serif;
}
.xxxian1,.xxxian2{
	width:1.4rem;
	height:.02rem;
	background:#D2D2D2;
	/*margin-top:7px;*/
}
.gdlmlist{
	/*height:4.4rem;*/
	/*display:flex;
	justify-content: space-between;
	flex-direction:row;*/
}
.gdlmlist li{
	width:1.36rem;
	height:1.1rem;
	margin-bottom:3px;
	line-height:1.1rem;
	overflow: hidden;
  font-size:.24rem;
  font-family: sans-serif;
}
</style>
