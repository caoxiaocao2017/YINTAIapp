<template>
  <div class="home">
  	<div class="banner">
	    <mt-swipe :auto="4000">
			  <mt-swipe-item><img src="../assets/banner1.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/banner2.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/banner3.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/banner4.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/banner5.jpg"/></mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="list">
			<ul>
				<li>
					<i><img src="../assets/list1.png"/></i>
					<span>商城同款</span>
				</li>
				<li>
					<i><img src="../assets/list2.png"/></i>
					<span>奢品</span>
				</li>
				<li>
					<i><img src="../assets/list3.png"/></i>
					<span>断码折扣</span>
				</li>
				<li>
					<i><img src="../assets/list4.png"/></i>
					<span>会员专区</span>
				</li>
				<li>
					<i><img src="../assets/list5.png"/></i>
					<span>惠生活</span>
				</li>
			</ul>
		</div>
		<div class="baokuan">
			<div class="bar1"><img src="../assets/bar1.png"/></div> 
			<div class="bklist">
				<ul id="wrapper">
					<li class="scroll" >
						<div v-for="(item,index) in arrs">
							<a><img :src="item.imgurl"/></a>
							<p>{{item.extra.productdetail.name}}</p>
							<span>￥{{item.extra.productdetail.price}}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="tuijian">
			<div class="bar2"><img src="../assets/bar2.png"/></div> 
			<div class="tjlist">
				<div class="tjlist-1">
					<div class="img-1"><img :src="tjgoods1[0].imgurl"/></div>
					<div class="img-2"><img :src="tjgoods1[1].imgurl"/></div>
				</div>
				<div class="tjlist-2">
					<div class="img-1"><img :src="tjgoods2[0].imgurl"/></div>
					<div class="img-2"><img :src="tjgoods2[1].imgurl"/></div>
				</div>
				<div class="bigbar1"><img :src="bar3[0].imgurl"/></div>
			</div>
		</div>
		<div class="tongkuang">
			<div class="bar3"><img src="../assets/bar3.jpg"/></div> 
			<div class="tklist-top">
					<div class="tklist-top-l"><img :src="tktop[0].imgurl"/></div>
					<div class="tklist-top-r">
						<div class="tklist-top-r-1"><img :src="tktop[1].imgurl"/></div>
						<div class="tklist-top-r-2"><img :src="tktop[2].imgurl"/></div>
					</div>
			</div>
			<div class="tklist-m">
				<div class="tklist-m-1"><img :src="tkmiddle[0].imgurl"/></div>
				<div class="tklist-m-2"><img :src="tkmiddle[1].imgurl"/></div>
				<div class="tklist-m-3"><img :src="tkmiddle[2].imgurl"/></div>
			</div>
			<div class="bigbar2"><img :src="bigbar2[0].imgurl"/></div>
		</div>
		<div class="beauty">
			<div class="bar4"><img :src="bar4[0].imgurl"/></div> 
			<div class="btlist-top">
					<div class="btlist-top-r">
						<div class="btlist-top-r-1"><img :src="beautytop[0].imgurl"/></div>
						<div class="btlist-top-r-2"><img :src="beautytop[1].imgurl"/></div>
					</div>
					<div class="btlist-top-l"><img :src="beautytop[2].imgurl"/></div>
			</div>
			<div class="btlist-m">
				<div class="btlist-m-1"><img :src="beautymiddle[0].imgurl"/></div>
				<div class="btlist-m-2"><img :src="beautymiddle[1].imgurl"/></div>
				<div class="btlist-m-3"><img :src="beautymiddle[2].imgurl"/></div>
			</div>
			<div class="bigbar3"><img :src="bigbar3[0].imgurl"/></div>
		</div>
		<div class="shepin">
			<div class="bar5"><img :src="bar5[0].imgurl"/></div> 
			<div class="splist-top">
					<div class="splist-top-l"><img :src="sptop[0].imgurl"/></div>
					<div class="splist-top-r">
						<div class="splist-top-r-1"><img :src="sptop[1].imgurl"/></div>
						<div class="splist-top-r-2"><img :src="sptop[2].imgurl"/></div>
					</div>
			</div>
			<div class="splist-m">
				<div class="splist-m-1"><img :src="spmiddle[0].imgurl"/></div>
				<div class="splist-m-2"><img :src="spmiddle[1].imgurl"/></div>
				<div class="splist-m-3"><img :src="spmiddle[2].imgurl"/></div>
			</div>
		</div>
		<div class="haitao">
			<div class="bar6"><img :src="bar6[0].imgurl"/></div> 
			<div class="htlist">
				<ul>
					<li><img :src="ht1[0].imgurl"/></li>
					<li><img :src="ht1[1].imgurl"/></li>
					<li><img :src="ht2[0].imgurl"/></li>
					<li><img :src="ht2[1].imgurl"/></li>
				</ul>
			</div>
		</div>
		<div class="chaoliu">
			<div class="bar7"><img :src="bar7[0].imgurl"/></div> 
			<div class="cllist-top">
					<div class="cllist-top-l"><img :src="womantop[0].imgurl"/></div>
					<div class="cllist-top-r">
						<div class="cllist-top-r-1"><img src="../assets/cl02.jpg"/><img :src="womantop[1].imgurl"/></div>
						<div class="cllist-top-r-2"><img :src="womantop[2].imgurl"/></div>
					</div>
			</div>
			<div class="cllist-m">
				<div class="cllist-m-1"><img :src="womanmiddle[0].imgurl"/></div>
				<div class="cllist-m-2"><img :src="womanmiddle[1].imgurl"/></div>
				<div class="cllist-m-3"><img :src="womanmiddle[2].imgurl"/></div>
			</div>
			<div class="bigbar4"><img :src="bigbar4[0].imgurl"/></div>
		</div>
		<div class="sport">
			<div class="bar8"><img :src="bar8[0].imgurl"/></div> 
			<div class="sptlist-top">
					<div class="sptlist-top-r">
						<div class="sptlist-top-r-1"><img :src="sporttop[0].imgurl"/></div>
						<div class="sptlist-top-r-2"><img :src="sporttop[1].imgurl"/></div>
					</div>
					<div class="sptlist-top-l"><img :src="sporttop[2].imgurl"/></div>
			</div>
			<div class="sptlist-m">
				<div class="sptlist-m-1"><img :src="sportmiddle[0].imgurl"/></div>
				<div class="sptlist-m-2"><img :src="sportmiddle[1].imgurl"/></div>
				<div class="sptlist-m-3"><img :src="sportmiddle[2].imgurl"/></div>
			</div>
			<div class="bigbar5"><img :src="bigbar5[0].imgurl"/></div>
		</div>
		<div class="jingpinman">
			<div class="bar9"><img :src="bar9[0].imgurl"/></div> 
			<div class="jplist-top">
					<div class="jplist-top-l"><img :src="mantop[0].imgurl"/></div>
					<div class="jplist-top-r">
						<div class="jplist-top-r-1"><img :src="mantop[1].imgurl"/></div>
						<div class="jplist-top-r-2"><img :src="mantop[2].imgurl"/></div>
					</div>
			</div>
			<div class="jplist-m">
				<div class="jplist-m-1"><img :src="manmiddle[0].imgurl"/></div>
				<div class="jplist-m-2"><img :src="manmiddle[1].imgurl"/></div>
				<div class="jplist-m-3"><img :src="manmiddle[2].imgurl"/></div>
			</div>
		</div>
		<div class="shoe">
			<div class="bar10"><img :src="bar10[0].imgurl"/></div> 
			<div class="shtlist-top">
					<div class="shtlist-top-r">
						<div class="shtlist-top-r-1"><img :src="shoetop[0].imgurl"/></div>
						<div class="shtlist-top-r-2"><img :src="shoetop[1].imgurl"/></div>
					</div>
					<div class="shtlist-top-l"><img :src="shoetop[2].imgurl"/></div>
			</div>
			<div class="shtlist-m">
				<div class="shtlist-m-1"><img :src="shoemiddle[0].imgurl"/></div>
				<div class="shtlist-m-2"><img :src="shoemiddle[1].imgurl"/></div>
				<div class="shtlist-m-3"><img :src="shoemiddle[2].imgurl"/></div>
			</div>
			<div class="bigbar6"><img :src="bigbar6[0].imgurl"/></div>
		</div>
		<div class="bag">
			<div class="bar11"><img :src="bar11[0].imgurl"/></div> 
			<div class="baglist-top">
					<div class="baglist-top-l"><img :src="bagtop[0].imgurl"/></div>
					<div class="baglist-top-r">
						<div class="baglist-top-r-1"><img :src="bagtop[1].imgurl"/></div>
						<div class="baglist-top-r-2"><img :src="bagtop[2].imgurl"/></div>
					</div>
			</div>
			<div class="baglist-m">
				<div class="baglist-m-1"><img :src="bagmiddle[0].imgurl"/></div>
				<div class="baglist-m-2"><img :src="bagmiddle[1].imgurl"/></div>
				<div class="baglist-m-3"><img :src="bagmiddle[2].imgurl"/></div>
			</div>
		</div>
		<div class="peishi">
			<div class="bar12"><img :src="bar12.imgurl"/></div> 
			<div class="pslist-top">
					<div class="pslist-top-r">
						<div class="pslist-top-r-1"><img :src="pstop[0].imgurl"/></div>
						<div class="pslist-top-r-2"><img :src="pstop[1].imgurl"/></div>
					</div>
					<div class="pslist-top-l"><img :src="pstop[2].imgurl"/></div>
			</div>
			<div class="pslist-m">
				<div class="pslist-m-1"><img :src="psmiddle[0].imgurl"/></div>
				<div class="pslist-m-2"><img :src="psmiddle[1].imgurl"/></div>
				<div class="pslist-m-3"><img :src="psmiddle[2].imgurl"/></div>
			</div>
			<div class="bigbar7"><img src="../assets/bigbar7.jpg"/></div>
		</div>
		<div class="children">
			<div class="bar13"><img :src="bar13[0].imgurl"/></div> 
			<div class="chlist-top">
					<div class="chlist-top-l"><img :src="childrentop[0].imgurl"/></div>
					<div class="chlist-top-r">
						<div class="chlist-top-r-1"><img :src="childrentop[1].imgurl"/></div>
						<div class="chlist-top-r-2"><img :src="childrentop[2].imgurl"/></div>
					</div>
			</div>
			<div class="chlist-m">
				<div class="chlist-m-1"><img :src="childrenmiddle[0].imgurl"/></div>
				<div class="chlist-m-2"><img :src="childrenmiddle[1].imgurl"/></div>
				<div class="chlist-m-3"><img :src="childrenmiddle[2].imgurl"/></div>
			</div>
		</div>
		<div class="haohuo">
			<div class="bar14"><img :src="bar14[0].imgurl"/></div> 
			<div class="hhlist">
				<ul>
					<li>
						<em><img :src="hh1[0].imgurl"/></em>
						<h2>{{hh1[0].extra.productdetail.name}}</h2>
						<span>￥{{hh1[0].extra.productdetail.price}}</span><i>￥{{hh1[0].extra.productdetail.marketprice}}</i>
					</li>
					<li>
						<em><img :src="hh1[1].imgurl"/></em>
						<h2>{{hh1[1].extra.productdetail.name}}</h2>
						<span>￥{{hh1[1].extra.productdetail.price}}</span><i>￥{{hh1[1].extra.productdetail.marketprice}}</i>
					</li>
					<li>
						<em><img :src="hh2[0].imgurl"/></em>
						<h2>{{hh2[0].extra.productdetail.name}}</h2>
						<span>￥{{hh2[0].extra.productdetail.price}}</span><i>￥{{hh2[0].extra.productdetail.marketprice}}</i>
					</li>
					<li>
						<em><img :src="hh2[1].imgurl"/></em>
						<h2>{{hh2[1].extra.productdetail.name}}</h2>
						<span>￥{{hh2[1].extra.productdetail.price}}</span><i>￥{{hh2[1].extra.productdetail.marketprice}}</i>
					</li>
				</ul>
			</div>
		</div>
		<div class="ft">
			<div class="ft-1">
				<div class="ft-1-top">
					<a href="#javascript">首页</a>
					<a href="#javascript">分类</a>
					<a href="#javascript">购物车</a>
					<a href="#javascript">我的</a>
				</div>
				<div class="ft-1-bottom">
					<div class="ft-1-bottom-l">
						<a class="login">登录</a>
						|
						<a class="login">注册</a>
					</div>
					<div class="ft-1-bottom-r">客户端下载</div>
				</div>
				
			</div>
			<div class="ft-2">
				<p>客服电话：400-119-1111(8:00-24:00)</p>
				<p>浙ICP备10200233号</p>
			</div>
		</div>
  </div>
</template>

<script>
import Vue from 'vue'
import jsonp from 'jsonp'
export default {
  name: 'home',
  data () {
    return {
     arrs:"",
     tjgoods1:"",
     tjgoods2:"",
     bar3:"",
     tktop:"",
     tkmiddle:"",
     bigbar2:"",
     bar4:"",
     beautytop:"",
     beautymiddle:"",
     bigbar3:"",
     bar5:"",
     sptop:"",
     spmiddle:"",
     bar6:"",
     ht1:"",
     ht2:"",
     bar7:"",
     womantop:"",
     womanmiddle:"",
     bigbar4:"",
     bar8:"",
     sporttop:"",
     sportmiddle:"",
     bigbar5:"",
     bar9:"",
     mantop:"",
     manmiddle:"",
     bar10:"",
     shoetop:"",
     shoemiddle:"",
     bigbar6:"",
     bar11:"",
     bagtop:"",
     bagmiddle:"",
     bar12:"",
     pstop:"",
     psmiddle:"",
     bar13:"",
     childrentop:"",
     childrenmiddle:"",
     bar14:"",
     hh1:"",
     hh2:""
    }
  },
  created(){
  	//爆款专区跨域数据：
  	var url="/Services/Proxy.ashx?r=20170614935&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1"
		Vue.axios.get(url).then((data) => {
		   //console.log(data.data.data.templatelist[3].items)
		   this.arrs = data.data.data.templatelist[3].items
		  // console.log(this.arrs)
		})
		var tjgoodsurl = "/Services/Proxy.ashx?r=20170616928&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1"
		Vue.axios.get(tjgoodsurl).then((data) =>{
			//console.log(data.data.data.templatelist[6].items)
			this.tjgoods1 = data.data.data.templatelist[6].items;
			this.tjgoods2 = data.data.data.templatelist[7].items;
			this.bar3 = data.data.data.templatelist[8].items;
			this.tktop = data.data.data.templatelist[11].items;
			this.tkmiddle = data.data.data.templatelist[12].items;
			this.bigbar2 = data.data.data.templatelist[13].items;
			this.bar4 = data.data.data.templatelist[15].items;
			this.beautytop = data.data.data.templatelist[16].items;
			this.beautymiddle = data.data.data.templatelist[17].items;
			this.bigbar3 = data.data.data.templatelist[18].items;
			this.bar5 = data.data.data.templatelist[20].items;
			this.sptop = data.data.data.templatelist[21].items;
			this.spmiddle = data.data.data.templatelist[22].items;
			this.bar6 = data.data.data.templatelist[24].items;
			this.ht1 = data.data.data.templatelist[25].items;
			this.ht2 = data.data.data.templatelist[26].items;
			this.bar7 = data.data.data.templatelist[28].items;
			this.womantop = data.data.data.templatelist[29].items;
			this.womanmiddle = data.data.data.templatelist[30].items;
			this.bigbar4 = data.data.data.templatelist[31].items;
			this.bar8 = data.data.data.templatelist[33].items;
			this.sporttop = data.data.data.templatelist[34].items;
			this.sportmiddle = data.data.data.templatelist[35].items;
			this.bigbar5 = data.data.data.templatelist[36].items;
			this.bar9 = data.data.data.templatelist[38].items;
			this.mantop = data.data.data.templatelist[39].items;
			this.manmiddle = data.data.data.templatelist[40].items;
			this.bar10 = data.data.data.templatelist[42].items;
			this.shoetop = data.data.data.templatelist[43].items;
			this.shoemiddle = data.data.data.templatelist[44].items;
			this.bigbar6 = data.data.data.templatelist[45].items;
			this.bar11 = data.data.data.templatelist[47].items;
			this.bagtop = data.data.data.templatelist[48].items;
			this.bagmiddle = data.data.data.templatelist[49].items;
		})
		var goodsurl2="/Services/Proxy.ashx?r=201706161027&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=2"
		Vue.axios.get(goodsurl2).then((data) => {
		   //console.log(data.data.data.templatelist[1].items[0].imgurl)
		   this.bar12 = data.data.data.templatelist[1].items[0]
		   this.pstop = data.data.data.templatelist[2].items
		   this.psmiddle = data.data.data.templatelist[4].items
		   this.bar13 = data.data.data.templatelist[5].items
		   this.childrentop= data.data.data.templatelist[6].items
		   this.childrenmiddle= data.data.data.templatelist[7].items
		   this.bar14 = data.data.data.templatelist[11].items
		   this.hh1 = data.data.data.templatelist[12].items
		   this.hh2 = data.data.data.templatelist[13].items
		   //console.log{data.data.data.templatelist[12].items}
		})
		
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
body,html{
	font-size:15.625vw;
}
.banner{
	height:2.6rem;
}
.banner img{
	width:100%;
	height:100%;
	/*display:block;
	vertical-align:middle*/
}
.banner .mint-swipe .mint-swipe-indicators .is-active{
	background:red;
	opacity:1;
}
.list{
	height:1.34rem;
}
.list ul{
	display:flex;
	flex-direction:row;
	justify-content: space-between;
}
.list ul li{
/*	width:1.28rem;*/
	height:1.32rem;
	float:left;
}
.list ul li i{
	display:inline-block;
	width:1.2rem;
	height:.68rem;
}
.list ul li i img{
	width:100%;
	height:100%;
}
.list ul li span{
	font-size:.28rem;
	font-family: sans-serif;
}
.baokuan{
	height:3.88rem;
}
.bar1{
	height:.5rem;
}
.bar1 img{
	width:100%;
	height:100%;
}
.bklist{
	height:3.38rem;
}
.bklist ul{
	height:3.38rem;
	overflow:scroll;
}
.bklist ul li{
	width:13.24rem;
	height:3.16rem;

}
.bklist ul li div{
	width:1.46rem;
	height:3.16rem;
	float:left;
}
.bklist ul li div a{
	display:inline-block;
	width:1.38rem;
	height:1.84rem;
	border:1px solid #d2d2d2;
}
.bklist ul li div a img{
	width:100%;
	height:100%;
}
.bklist ul li div p{
	width:1.42rem;
	height:.72rem;
	font-size:.28rem ;
	/*font-family: sans-serif;*/
	overflow:hidden;
}
.bklist ul li div span{
	width:1.26rem;
	height:.38rem;
	font-size:.28rem ;
	font-family: sans-serif;
	color:#e5004f;
}
.tuijian{
	height:6rem;
}
.bar2{
	height:.5rem;
}
.bar2 img{
	width:100%;
	height:100%;
}
.tjlist{
	height:4.12rem;
}
.tjlist div{
	height:2.06rem;
}
.tjlist div div{
	width:3.20rem;
	height:2.06rem;
	float:left;
}
.tjlist div div img{
	width:100%;
	height:100%;
}
.tjlist .bigbar1{
	height:1.4rem;
}
.bigbar1 img{
	height:100%;
	width:100%;
}
.tongkuang{
	height:6.88rem;
	margin-top:5px;
}
.bar3{
	height:.5rem;
}
.bar3 img{
	width:100%;
	height:100%;
}
.tklist-top{
	height:3.02rem;
	display:flex;
	flex-direction:row;
	justify-content: space-between;
}
.tklist-top div{
	width:3.2rem;
	height:3rem;
}
.tklist-top-l img{
	width:100%;
	height:100%;
}
.tklist-top-r{
	display:flex;
	flex-direction: column;
	align-items: baseline;
}
.tklist-top-r div{
	width:3.18rem;
	height:1.5rem;
	border:1px solid #D2D2D2;
}
.tklist-top-r div img{
	width:100%;
	height:100%;
}
.tklist-m{
	height:1.96rem;
	display:flex;
	justify-content: space-between;
	flex-direction:row;
}
.tklist-m div{
	width:2.12rem;
	height:1.96rem;
	border:1px solid #D2D2D2;
}
.tklist-m div img{
	width:100%;
	height:100%;
}
.tongkuang .bigbar2{
	height:1.4rem;
}
.bigbar2 img{
	height:100%;
	width:100%;
}
/**/
.beauty{
	height:6.88rem;
	margin-top:5px;
}
.bar4{
	height:.5rem;
}
.bar4 img{
	width:100%;
	height:100%;
}
.btlist-top{
	height:3.02rem;
	display:flex;
	flex-direction:row;
	justify-content: space-between;
}
.btlist-top div{
	width:3.2rem;
	height:3rem;
}
.btlist-top-l img{
	width:100%;
	height:100%;
}
.btlist-top-r{
	display:flex;
	flex-direction: column;
	align-items: baseline;
}
.btlist-top-r div{
	width:3.18rem;
	height:1.5rem;
	border:1px solid #D2D2D2;
}
.btlist-top-r div img{
	width:100%;
	height:100%;
}
.btlist-m{
	height:1.96rem;
	display:flex;
	justify-content: space-between;
	flex-direction:row;
}
.btlist-m div{
	width:2.12rem;
	height:1.96rem;
	border:1px solid #D2D2D2;
}
.btlist-m div img{
	width:100%;
	height:100%;
}
.beauty .bigbar3{
	height:1.4rem;
}
.bigbar3 img{
	height:100%;
	width:100%;
}
/*奢品*/
.shepin{
	height:5.6rem;
	margin-top:5px;
}
.bar5{
	height:.5rem;
}
.bar5 img{
	width:100%;
	height:100%;
}
.splist-top{
	height:3.02rem;
	display:flex;
	flex-direction:row;
	justify-content: space-between;
}
.splist-top div{
	width:3.2rem;
	height:3rem;
}
.splist-top-l img{
	width:100%;
	height:100%;
}
.splist-top-r{
	display:flex;
	flex-direction: column;
	align-items: baseline;
}
.splist-top-r div{
	width:3.18rem;
	height:1.5rem;
	border:1px solid #D2D2D2;
}
.splist-top-r div img{
	width:100%;
	height:100%;
}
.splist-m{
	height:1.96rem;
	display:flex;
	justify-content: space-between;
	flex-direction:row;
}
.splist-m div{
	width:2.12rem;
	height:1.96rem;
	border:1px solid #D2D2D2;
}
.splist-m div img{
	width:100%;
	height:100%;
}
/*海淘*/
.haitao{
	height:3.46rem;
}
.bar6{
	height:.5rem;
}
.bar6 img{
	width:100%;
	height:100%;
}
.htlist{
	height:3.16rem;
}
.htlist ul{
	display:flex;
	justify-content: space-between;
	flex-direction: row;
	flex-wrap: wrap;
}
.htlist ul li{
	width:3.14rem;
	height:1.48rem;
	margin-bottom:2px;
}
.htlist ul li img{
	width:100%;
	height:100%;
}
/*潮流女装*/
.chaoliu{
	height:6.88rem;
	margin-top:5px;
}
.bar7{
	height:.5rem;
}
.bar7 img{
	width:100%;
	height:100%;
}
.cllist-top{
	height:3.02rem;
	display:flex;
	flex-direction:row;
	justify-content: space-between;
}
.cllist-top div{
	width:3.2rem;
	height:3rem;
}
.cllist-top-l img{
	width:100%;
	height:100%;
}
.cllist-top-r{
	display:flex;
	flex-direction: column;
	align-items: baseline;
}
.cllist-top-r div{
	width:3.18rem;
	height:1.5rem;
	border:1px solid #D2D2D2;
}
.cllist-top-r div img{
	width:100%;
	height:100%;
}
.cllist-m{
	height:1.96rem;
	display:flex;
	justify-content: space-between;
	flex-direction:row;
}
.cllist-m div{
	width:2.12rem;
	height:1.96rem;
	border:1px solid #D2D2D2;
}
.cllist-m div img{
	width:100%;
	height:100%;
}
.chaoliu .bigbar4{
	height:1.4rem;
}
.bigbar4 img{
	height:100%;
	width:100%;
}
/*运动达人*/
.sport{
	height:6.88rem;
	margin-top:5px;
}
.bar8{
	height:.5rem;
}
.bar8 img{
	width:100%;
	height:100%;
}
.sptlist-top{
	height:3.02rem;
	display:flex;
	flex-direction:row;
	justify-content: space-between;
}
.sptlist-top div{
	width:3.2rem;
	height:3rem;
}
.sptlist-top-l img{
	width:100%;
	height:100%;
}
.sptlist-top-r{
	display:flex;
	flex-direction: column;
	align-items: baseline;
}
.sptlist-top-r div{
	width:3.18rem;
	height:1.5rem;
	border:1px solid #D2D2D2;
}
.sptlist-top-r div img{
	width:100%;
	height:100%;
}
.sptlist-m{
	height:1.96rem;
	display:flex;
	justify-content: space-between;
	flex-direction:row;
}
.sptlist-m div{
	width:2.12rem;
	height:1.96rem;
	border:1px solid #D2D2D2;
}
.sptlist-m div img{
	width:100%;
	height:100%;
}
.sport .bigbar5{
	height:1.4rem;
}
.bigbar5 img{
	height:100%;
	width:100%;
}
/*精品男装*/
.jingpinman{
	height:5.6rem;
	margin-top:5px;
}
.bar9{
	height:.5rem;
}
.bar9 img{
	width:100%;
	height:100%;
}
.jplist-top{
	height:3.02rem;
	display:flex;
	flex-direction:row;
	justify-content: space-between;
}
.jplist-top div{
	width:3.2rem;
	height:3rem;
}
.jplist-top-l img{
	width:100%;
	height:100%;
}
.jplist-top-r{
	display:flex;
	flex-direction: column;
	align-items: baseline;
}
.jplist-top-r div{
	width:3.18rem;
	height:1.5rem;
	border:1px solid #D2D2D2;
}
.jplist-top-r div img{
	width:100%;
	height:100%;
}
.jplist-m{
	height:1.96rem;
	display:flex;
	justify-content: space-between;
	flex-direction:row;
}
.jplist-m div{
	width:2.12rem;
	height:1.96rem;
	border:1px solid #D2D2D2;
}
.jplist-m div img{
	width:100%;
	height:100%;
}
/*时尚鞋靴*/
.shoe{
	height:6.88rem;
	margin-top:5px;
}
.bar10{
	height:.5rem;
}
.bar10 img{
	width:100%;
	height:100%;
}
.shtlist-top{
	height:3.02rem;
	display:flex;
	flex-direction:row;
	justify-content: space-between;
}
.shtlist-top div{
	width:3.2rem;
	height:3rem;
}
.shtlist-top-l img{
	width:100%;
	height:100%;
}
.shtlist-top-r{
	display:flex;
	flex-direction: column;
	align-items: baseline;
}
.shtlist-top-r div{
	width:3.18rem;
	height:1.5rem;
	border:1px solid #D2D2D2;
}
.shtlist-top-r div img{
	width:100%;
	height:100%;
}
.shtlist-m{
	height:1.96rem;
	display:flex;
	justify-content: space-between;
	flex-direction:row;
}
.shtlist-m div{
	width:2.12rem;
	height:1.96rem;
	border:1px solid #D2D2D2;
}
.shtlist-m div img{
	width:100%;
	height:100%;
}
.shoe .bigbar6{
	height:1.4rem;
}
.bigbar6 img{
	height:100%;
	width:100%;
}
/*品质箱包*/
.bag{
	height:5.6rem;
	margin-top:5px;
}
.bar11{
	height:.5rem;
}
.bar11 img{
	width:100%;
	height:100%;
}
.baglist-top{
	height:3.02rem;
	display:flex;
	flex-direction:row;
	justify-content: space-between;
}
.baglist-top div{
	width:3.2rem;
	height:3rem;
}
.baglist-top-l img{
	width:100%;
	height:100%;
}
.baglist-top-r{
	display:flex;
	flex-direction: column;
	align-items: baseline;
}
.baglist-top-r div{
	width:3.18rem;
	height:1.5rem;
	border:1px solid #D2D2D2;
}
.baglist-top-r div img{
	width:100%;
	height:100%;
}
.baglist-m{
	height:1.96rem;
	display:flex;
	justify-content: space-between;
	flex-direction:row;
}
.baglist-m div{
	width:2.12rem;
	height:1.96rem;
	border:1px solid #D2D2D2;
}
.baglist-m div img{
	width:100%;
	height:100%;
}
/*内衣配饰*/
.peishi{
	height:6.88rem;
	margin-top:5px;
}
.bar12{
	height:.5rem;
}
.bar12 img{
	width:100%;
	height:100%;
}
.pslist-top{
	height:3.02rem;
	display:flex;
	flex-direction:row;
	justify-content: space-between;
}
.pslist-top div{
	width:3.2rem;
	height:3rem;
}
.pslist-top-l img{
	width:100%;
	height:100%;
}
.pslist-top-r{
	display:flex;
	flex-direction: column;
	align-items: baseline;
}
.pslist-top-r div{
	width:3.18rem;
	height:1.5rem;
	border:1px solid #D2D2D2;
}
.pslist-top-r div img{
	width:100%;
	height:100%;
}
.pslist-m{
	height:1.96rem;
	display:flex;
	justify-content: space-between;
	flex-direction:row;
}
.pslist-m div{
	width:2.12rem;
	height:1.96rem;
	border:1px solid #D2D2D2;
}
.pslist-m div img{
	width:100%;
	height:100%;
}
.bag .bigbar7{
	height:1.4rem;
}
.bigbar7 img{
	height:100%;
	width:100%;
}
/*婴儿*/
.children{
	height:5.6rem;
	margin-top:5px;
}
.bar13{
	height:.5rem;
}
.bar13 img{
	width:100%;
	height:100%;
}
.chlist-top{
	height:3.02rem;
	display:flex;
	flex-direction:row;
	justify-content: space-between;
}
.chlist-top div{
	width:3.2rem;
	height:3rem;
}
.chlist-top-l img{
	width:100%;
	height:100%;
}
.chlist-top-r{
	display:flex;
	flex-direction: column;
	align-items: baseline;
}
.chlist-top-r div{
	width:3.18rem;
	height:1.5rem;
	border:1px solid #D2D2D2;
}
.chlist-top-r div img{
	width:100%;
	height:100%;
}
.chlist-m{
	height:1.96rem;
	display:flex;
	justify-content: space-between;
	flex-direction:row;
}
.chlist-m div{
	width:2.12rem;
	height:1.96rem;
	border:1px solid #D2D2D2;
}
.chlist-m div img{
	width:100%;
	height:100%;
}
/*精选好货*/
.haohuo{
	height:12.3rem;
}
.bar14{
	height:.5rem;
}
.bar14 img{
	width:100%;
	height:100%;
}
.hhlist ul{
	height: 7rem;
	border:1px solid #D2D2D2;
	display:flex;
	justify-content: space-between;
	flex-direction: row;
	flex-wrap:wrap;
}
.hhlist ul li{
	width:3.1rem;
	height:5.76rem;
	border:1px solid #D2D2D2;
	margin-bottom:2px;
	
}
.hhlist ul li em{
	display:inline-block;
	width:3.08rem;
	height:4.1rem;
}
.hhlist ul li em img{
	width:100%;
	height:100%;
}
.hhlist ul li h2{
	width:3.08rem;
	height:.82rem;
	font-size:.28rem;
	font-family: sans-serif;
	margin-bottom:5px;
	overflow: hidden;
}
.hhlist ul li span{
	width:1.52rem;
	height:.32rem;
	display:inline-block;
	font-size:.28rem;
	font-family: sans-serif;
	color:#e5004f;
	font-weight: 600;
}
.hhlist ul li i{
	font-size:.28rem;
	font-family: sans-serif;
	color:#666;
	font-style:normal;
	text-decoration: line-through;
	
}
.ft{
	height:3.76rem;
	background:#ececec;
}
.ft-1{
	height:1.3rem;
	border-bottom:1px solid #D2D2D2;
	margin-bottom:10px;
}
.ft-1-top{
	height:.56rem;
	display:flex;
	flex-direction:row;
	justify-content: space-between;
}
.ft-1-top a{
	width:1.45rem;
	height:.56rem;
	text-decoration:none;
	line-height:.56rem;
	color:#999;
	font-size:.28rem;
	font-family: sans-serif;
}
.ft-1-bottom{
	height:.6rem;
	display:flex;
	flex-direction:row;
	justify-content: space-between;
	padding-top:.15rem;
	padding-left:15px;
	padding-right:15px;
}
.ft-1-bottom-l{
	width:1.6rem;
	height:.44rem;
}
.ft-1-bottom-r{
	width:1.4rem;
	height:.44rem;
}
.ft-2{
	height:1.26rem;
	font-size:.28rem;
	font-family: sans-serif;
}
.ft-2 p{
	color: #999;
}
.ft-1-bottom-l a {
	font-weight: 500;
  color: #666;
  font-size:.28rem;
	font-family: sans-serif;
}
.ft-1-bottom-r{
	font-weight: 500;
  color: #666;
  font-size:.28rem;
	font-family: sans-serif;
}
</style>
