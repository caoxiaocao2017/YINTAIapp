<template>
  <div class="fenlei">
    <div class="left">
    	<ul>
    		<li>时尚名品</li>
    		<li>潮流女装</li>
    		<li>精品男装</li>
    		<li>品质鞋靴</li>
    		<li>时尚箱包</li>
    		<li>运动户外</li>
    		<li>珠宝饰品</li>
    		<li>母婴精选</li>
    		<li>家居家纺</li>
    	</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      msg: ''
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
	/*height:9.28rem;*/
	display:flex;
	justify-content: space-between;
	
}
.left{
	width:1.6rem;
	/*height:9.26rem;*/
	background:#f5f5f5;
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
  font-family: sans-serif;
  font-size:.28rem;
  line-height:1.1rem;
}
.right{
	width:4.8rem;
	height:9.26rem;
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
  font-family: sans-serif;
  font-size:.28rem;
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
	height:7.3rem;
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
	font-family: sans-serif;
  font-size:.28rem;
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
  font-family: sans-serif;
  font-size:.28rem;
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
	height:8.74rem;
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
  font-family: sans-serif;
  font-size:.28rem;
}
.xxxian1,.xxxian2{
	width:1.4rem;
	height:.02rem;
	background:#D2D2D2;
	/*margin-top:7px;*/
}
.gdlmlist{
	height:4.4rem;
	/*display:flex;
	justify-content: space-between;
	flex-direction:row;*/
}
.gdlmlist li{
	width:1.36rem;
	height:1.1rem;
	margin-bottom:3px;
	line-height:1.1rem;
}
</style>
