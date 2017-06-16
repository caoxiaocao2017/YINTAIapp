<template>
  <div id="app">
    <header>
    	<div class="logo"><img src="./assets/newlogo.png"></div>
    	<div class="search">
    		<input type="text" />
    		<span><i><img src="./assets/home-search.png"></i></span>
    	</div>
    	<div class="user"><a><img src="./assets/bar-default-my.png"></a></div>
    </header>
    <div class="content">
    	<router-view></router-view>
    </div>
    <footer>
    	<ul>
    		<li>
    			<router-link to="/">
	    			<i><img src="./assets/bar-hover-home.png"></i>
	    			<span>首页</span>
	    		</router-link>
    		</li>
    			<li>
    			<router-link to="/qx">
	    			<i><img src="./assets/bar-default-sale.png"></i>
	    			<span>抢先</span>
    			</router-link>
    		</li>
    		<li>
    			<router-link to="/fl">
	    			<i><img src="./assets/bar-default-class.png"></i>
	    			<span>分类</span>
	    		</router-link>
    		</li>
    		<li>
    			<router-link to="/shopping">
	    			<i><img src="./assets/bar-default-cart.png"></i>
	    			<span>购物车</span>
	    		</router-link>
    		</li>
    		<li>
    			<router-link to="/me">
	    			<i><img src="./assets/bar-default-my.png"></i>
	    			<span>我的</span>
	    		</router-link>
    		</li>
    	</ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
	margin:0;
	padding:0;
}
a{
	text-decoration: none;
}
ul li{
	list-style-type:none;
}
body,html{
	font-size:15.625vw;
}
header{
	width:100%;
	height:1rem;
	position:fixed;
	top:0;
	padding-top: 6px;
	background:white;
	z-index:999;
}
.logo{
	width:1.5rem;
	height:.85rem;
	float:left;
}
.logo img{
	width:100%;
	height:100%;
}
.search{
	width:3.52rem;
	height:.73rem;
	border:1px solid #d2d2d2;
	border-radius:5px;
	float:left;
	position:relative;
}
.search input{
	width:3.24rem;
	height:.6rem;
	position:absolute;
	top:3px;
	left:6px;
	border:none;
	outline:none;
	
}
.search span{
	display:inline-block;
	width:.84rem;
	height:.6rem;
	border-left:1px solid #D2D2D2;
	position: absolute;
	right:0;
	top:3px;
	}
	.search span i{
		display:inline-block;
		width:.4rem;
		height:.4rem;
		margin-top:5px;
		margin-left:11px;
		position:absolute;
		top:0;
		left:0;
	}
	.search span i img{
		width:100%;
		height:100%;
		position:absolute;
		top:0;
		left:0;
	}
.user{
	width:1.1rem;
	height:.85rem;
	float:right;
	position:relative;
}
.user a{
	display:inline-block;
	width:.6rem;
	height:.6rem;
	position:absolute;
	top:6px;
	left:11px;
}
.user a img{
	width:100%;
	height:100%;
	position:absolute;
	top:0px;
	left:0px;
}
.content{
	font-size:.32rem;
}

footer{
	height:1.08rem;
	position:fixed;
	bottom:0;
	font-size:.28rem;
	background: white;
	color:#666;
}
footer ul{
	height:1.08rem;
	display:flex;
	justify-content: space-between;
	flex-direction:row;
}
footer ul li{
	width:1.3rem;
	height:.98rem;
	position:relative;
	/*display:flex;
	flex-direction:column;
	align-items: center;*/
}
footer ul li i{
	display:inline-block;
	width:.4rem;
	height:.4rem;
	margin-top:5px;
	margin-bottom:5px;
}
footer ul li i img{
	width:100%;
	height:100%;
}
footer ul li span{
	position:absolute;
	left:30%;
	bottom:0;
	color:#666;
}
</style>
