<template>
	<!--header-->
	<header>
		<nav class="navbar navbar-default navbar-fixed-top x-nav">
			<div class="container">
				<div class="navbar-header">
					<a class="navbar-brand logo" href="#">
						<img src="assets/img/brand.png" alt="" width="75" height="32" />
					</a>
				</div>

				<ul class="nav navbar-nav navbar-right">
					<li class="">
						<a v-link="'/home'">首页</a>
					</li>
					<li>
						<a v-link="'/course'">选排课</a>
					</li>
					<li>
						<a v-link="'/school'">希悦校园</a>
					</li>
					<li>
						<a v-link="'/partner'">客户案例</a>
					</li>
					<li>
						<a v-link="'/job'">招聘</a>
					</li>
					<li>
						<a v-link="'/support'">支持</a>
					</li>
				</ul>
			</div>
		</nav>
		<!--<nav class="x-nav">
			<div class="container">
				<div class="row">
					<div class="col-xs-2">
						<a class="logo" href="#">
							<img src="assets/img/brand.png"/>
						</a>
					</div>
					<ul class="col-xs-6 col-xs-offset-4 clearfix">
						<li class=""><a href="#">首页</a></li>
						<li><a href="#">选排课</a></li>
						<li><a href="#">希悦校园</a></li>
						<li><a href="#">客户案例</a></li>
						<li><a href="#">招聘</a></li>
						<li><a href="#">支持</a></li>
					</ul>
				</div>
			</div>
		</nav>-->
	</header>
	<!--header end-->
	<div class="h60"></div>
	<router-view></router-view>
	<!--footer-->
	<footer class="">
		<div class="container">
			<div class="row x-footer">
				<div class="col-md-2 col-md-offset-1">
					<span class="h3">产品</span>
					<a href="#">产品介绍</a>
					<a href="#">希悦选排课</a>
					<a href="#">希悦校园</a>
					<a href="#">招商</a>
				</div>
				<div class="col-md-2">
					<span class="h3">公司</span>
					<a href="#">团队介绍</a>
					<a href="#">合作伙伴</a>
					<a href="#">加入我们</a>
					<a href="#">Blog</a>
				</div>
				<div class="col-md-2">
					<span class="h3">客户</span>
					<a href="#">成功案例</a>
				</div>
				<div class="col-md-4">
					<span class="h3">联系我们</span>
					<span><strong>电话  </strong>010-58751222</span>
					<a href="#"><strong>邮箱  </strong>contact@seiue.com</a>
					<span><strong>地址  </strong>北京市海淀区 海淀黄庄 大泥湾路18号</span>
					<br />
				</div>
			</div>
		</div>
	</footer>
	<!--footer end-->
</template>

<style type="text/css">
	/**/
	
	@import 'assets/css/bootstrap.css';
	body {
		font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, Heiti, 黑体, sans-serif;
	}
	
	[v-clock] {
		display: none;
	}
	.pd50{
		padding: 50px 0;
	}
	
	.pd100{
		padding: 100px 0;
	}
	.clear:after {
		content: "";
		display: block;
		clear: both;
		height: 0px;
	}
	
	.clear {
		zoom: 1;
	}
	
	.fl{
		float: left;
	}
	
	.h60 {
		height: 60px;
	}
	
	.x-nav {
		height: 60px;
		background-color: white
	}
	
	.x-nav ul li {
		margin: 0px 10px;
	}
	
	.x-nav ul li a {
		height: 60px;
		line-height: 30px;
	}
	
	footer {
		background-color: #333740;
	}
	
	.x-footer div {
		padding-top: 70px;
		padding-bottom: 70px;
	}
	
	.x-footer div {}
	
	.x-footer div {}
	/*.x-footer div span,	.x-footer div strong{
		color: white;
	}*/
	
	.x-footer div a,
	.x-footer div span {
		display: block;
		color: white;
		margin: 15px 0;
	}
</style>