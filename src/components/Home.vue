<template>
	<!--first-->
	<section class="home-first text-center">
		<div class="container pr">
			<div class="">
				<img src="../assets/img/bullet.svg" alt="" />
			</div>
			<p class="h3">希悦校园</p>
			<p class="h1">真正能用起来的校园系统</p>
			<br />
			<p class="h4">
				<a v-link="'/school'">了解更多&gt;</a>
			</p>
			<br />
			<div class="">
				<img class="window" src="../assets/img/window1.png" />
			</div>
			<ul class="row list-unstyled">
				<li class="col-md-3">
					<img class="func" src="../assets/img/func1.png" />
					<p class="h4">选排课</p>
				</li>
				<li class="col-md-3">
					<img class="func" src="../assets/img/func2.png" />
					<p class="h4">过程性评价</p>
				</li>
				<li class="col-md-3">
					<img class="func" src="../assets/img/func3.png" />
					<p class="h4">考勤请假</p>
				</li>
				<li class="col-md-3">
					<img class="func" src="../assets/img/func4.png" />
					<p class="h4">定向通知</p>
				</li>
			</ul>
		</div>
	</section>
	<!--first end-->
	<!--second-->
	<section class="home-second text-center">
		<div class="container">
			<div class="">
				<img src="../assets/img/bullet.svg" alt="" />
			</div>
			<p class="h3">希悦选排课</p>
			<p class="h1">迈好新课改的第一步</p>
			<br />
			<div>
				<button class="btn btn-info btn-lg" type="button" v-link="'/course'">免费使用</button>
			</div>
			<br />
			<p class="h4">
				<a v-link="'/course'">了解更多&gt;</a>
			</p>
			<br />
			<div>
				<img class="window" src="../assets/img/window2.png" />
			</div>
		</div>
	</section>
	<!--second end-->
	<!--partner-->
	<section class="home-partner text-center">
		<div class="container">
			<div class="">
				<img src="../assets/img/bullet.svg" alt="" />
			</div>
			<p class="h1">合作伙伴</p>
			<ul class="row list-unstyled">
				<li class="col-md-3">
					<a href="#"><img class=" partner-img" src="../assets/img/partner1.png" /></a>
				</li>
				<li class="col-md-2">
					<a href="#"><img class=" partner-img" src="../assets/img/partner2.png" /></a>
				</li>
				<li class="col-md-3">
					<a href="#"><img class=" partner-img" src="../assets/img/partner3.png" /></a>
				</li>
				<li class="col-md-3">
					<a href="#"><img class=" partner-img" src="../assets/img/partner4.png" /></a>
				</li>
			</ul>
		</div>
	</section>
	<!--partner end-->

	<!--school-->
	<section class="home-school text-center">
		<div class="container">
			<div class="">
				<img src="../assets/img/bullet.svg" alt="" />
			</div>
			<p class="h1">他们正在使用我们的产品</p>
			<ul class="row list-unstyled">
				<li class="col-md-3">
					<img class="school-img" src="../assets/img/school1.png" />
					<p class="h4">北京大学</p>
				</li>
				<li class="col-md-3">
					<img class="school-img" src="../assets/img/school2.png" />
					<p class="h4">浙江师范大学附属中学</p>
				</li>
				<li class="col-md-3">
					<img class="school-img" src="../assets/img/school3.png" />
					<p class="h4">北京八一中学</p>
				</li>
				<li class="col-md-3">
					<img class="school-img" src="../assets/img/school4.png" />
					<p class="h4">北京十一学校与劳动保障学院联合分校</p>
				</li>
			</ul>
		</div>
	</section>
	<!--school end-->
	<!--touch-->
	<section class="home-touch">
		<div class="container">
			<div class="home-touch-form">
				<form class="form-horizontal" action="">
					<h2 class="text-center">联系我们</h2>
					<br />
					<div class="form-group row">
						<label class="col-sm-2 control-label" for="userschool">学校名称</label>
						<div class="col-sm-10">
							<input class="form-control" type="text" name="userschool" id="userschool" value="" placeholder="请填写学校全称，以便我们更好的为您服务" />
						</div>
					</div>

					<div class="form-group">
						<label class="col-sm-2 control-label" for="username">姓名</label>
						<div class="col-sm-3">
							<input class="form-control" type="text" name="username" id="username" value="" placeholder="姓名" />
						</div>
						<div class="col-sm-7">
							<input class="form-control" type="tel" name="usertel" id="" value="" placeholder="联系电话" />
						</div>
					</div>

					<div class="form-group">
						<div class="col-sm-3 col-sm-offset-2">
							<select class="form-control" name="touch">
								<option value="1">电子邮箱</option>
								<option value="2">固定电话</option>
								<option value="3">QQ号码</option>
								<option value="4">微信</option>
							</select>
						</div>
						<div class="col-sm-7">
							<input class="form-control" type="text" name="usertouch" id="" value="" placeholder="备用联系方式" />
						</div>
					</div>

					<div class="form-group row">
						<label class="col-sm-2 control-label" for="">需求描述</label>
						<div class="col-sm-10">
							<textarea class="form-control" name="" rows="5" cols=""></textarea>
						</div>
					</div>

					<div class="clear">
						<button class="btn btn-primary pull-right">发送</button>
					</div>
				</form>

				<div>
					<hr />
				</div>
				<div class="text-center">
					<p>如您的需求较为复杂，请电话联系我们</p>
					<p class="h3 text-primary">电话：010-58751222</p>
				</div>

			</div>
		</div>
	</section>
	<!--touch end-->
</template>

<style type="text/css">
	.home-first {
		position: relative;
		background: radial-gradient(circle 2000px at 200px 60px, #519BEC 0%, #485CD7 53%, #485CD7 53%, #4124C4 100%);
		color: white;
		padding: 50px 0;
	}
	
	.home-first:before {
		content: "";
		display: block;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		background: url("../assets/img/bg1.png") no-repeat;
		background-size: 100% auto;
	}
	
	.home-first a {
		color: white;
	}
	
	.pr {
		position: relative;
	}
	
	.window {
		/*position: relative;*/
		width: 960px;
		border-radius: 3px;
		box-shadow: 0 -1px 1px #242424;
	}
	
	.func {
		width: 100px;
		margin: 10px;
	}
	
	.home-first ul {
		margin: 50px 0;
	}
	/**/
	/**/
	
	.home-second {
		position: relative;
		padding-top: 50px;
		background: url("../assets/img/bg2.png") no-repeat bottom;
		background-size: 100% auto;
		border-bottom: 1px solid #EEEEEE;
	}
	
	.home-second:after {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		bottom: 0;
		height: 250px;
		width: 100%;
		background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
	}
	
	.home-partner {
		padding: 50px 0;
	}
	
	.partner-img {
		height: 48px;
	}
	
	.home-partner ul {
		margin: 50px 0;
	}
	
	.home-school {
		padding: 50px 0;
		background-color: #F9F9F9
	}
	
	.home-school ul {
		margin: 50px 0;
	}
	
	.school-img {
		width: 60px;
		margin: 10px;
	}
	
	.home-touch {}
	
	.home-touch-form {
		width: 540px;
		padding: 20px;
		margin: 50px auto;
		border: 1px solid rgba(0, 0, 0, .1);
		border-radius: 5px;
		background-color: #FFFFFF;
	}
</style>