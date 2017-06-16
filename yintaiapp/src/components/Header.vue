<template>
  <header>
    	<div class="logo"><img src="../assets/newlogo.png"></div>
    	<div class="search">
    		<input type="text" />
    		<span><i><img src="../assets/home-search.png"></i></span>
    	</div>
    	<div class="user"><a><img src="../assets/bar-default-my.png"></a></div>
    </header>
</template>

<script>
export default {
  name: 'Header',
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
  margin: 0 10px;
}

a {
  color: #42b983;
}
*{
	margin:0;
	padding:0;
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
</style>
