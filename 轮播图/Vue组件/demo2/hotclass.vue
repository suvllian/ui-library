<template>
	<section id="hotclass" class="slide-new slide-box">
		<div class="section-inner">
			<div class="section-title">
				<h2 class="section-title-h">
					<span>热门课程推荐</span>
				</h2>
			</div>
			<div class="slide-animate">
				<ul class="slide-list">
					<li class="list-item current">
						<a href="">
							<img class="list-pic" src="./../assets/hot-img-1.jpg" alt="">
						</a>
					</li>
					<li class="list-item next">
						<a href="">
							<img class="list-pic" src="./../assets/hot-img-2.jpg" alt="">
						</a>
					</li>
					<li class="list-item">
						<a href="">
							<img class="list-pic" src="./../assets/hot-img-3.jpg" alt="">
						</a>
					</li>
					<li class="list-item">
						<a href="">
							<img class="list-pic" src="./../assets/hot-img-4.jpg" alt="">
						</a>
					</li>
					<li class="list-item prev">
						<a href="">
							<img class="list-pic" src="./../assets/hot-img-5.jpg" alt="">
						</a>
					</li>
				</ul>
			</div>
			<div class="slide-switch">
				<a class="slide-switch-item" href="" @click.prevent="goIndex(0)">
					<i class="slide-switch-bg switch-active"></i>
				</a>
				<a class="slide-switch-item" href="" @click.prevent="goIndex(1)">
					<i class="slide-switch-bg"></i>
				</a>
				<a class="slide-switch-item" href="" @click.prevent="goIndex(2)">
					<i class="slide-switch-bg"></i>
				</a>
				<a class="slide-switch-item" href="" @click.prevent="goIndex(3)">
					<i class="slide-switch-bg"></i>
				</a>
				<a class="slide-switch-item" href="" @click.prevent="goIndex(4)">
					<i class="slide-switch-bg"></i>
				</a>
			</div>
		</div>

		<div class="slide-action">
			<div class="slide-action-left">
				<a class="slide-action-btn" @click="prev()" href="javascript:;">
					<i class="fa fa-angle-left fa-3x"></i>
				</a>
			</div>
			<div class="slide-action-right">
				<a class="slide-action-btn" @click="next()" href="javascript:;">
					<i class="fa fa-angle-right fa-3x"></i>
				</a>
			</div>
		</div>
		
	</section>
</template>

<script>
export default{
	data(){
		return{
			index:1,
			handle:null
		}
	},
	methods: {
		slideImage(){
			let liItem = document.querySelectorAll(".list-item");
			let switchItem = document.querySelectorAll("#hotclass .slide-switch-bg");
			let length = liItem.length;
			let $this = this;

			// 清除所有样式
			var init = function(){
				for (let i = 0; i< length; i++) {
					liItem[i].className = "list-item";
					switchItem[i].className = "slide-switch-bg";
				}
			}

			// 转换焦点图
			var focus = function(index) {
				init();
				liItem[index].className = "list-item current";
				switchItem[index].className = "slide-switch-bg switch-active";

				liItem[index-1] ? liItem[index-1].className = "list-item prev" :
					liItem[4].className = "list-item prev";
				liItem[index+1].className = "list-item next";
			}

			var setLast = function(){
				init();
				liItem[4].className = "list-item current";
				switchItem[4].className = "slide-switch-bg switch-active";

				liItem[3].className = "list-item prev";
				liItem[0].className = "list-item next";
			}

			var setIndex = function(index){
				if (0 <=  index && index < 4 ) {		
					$this.index = index + 1;		
				} else if (index >= 4){
					$this.index = 0;				
				}
			}

			// 循环变换
			var slide = function(index){
				let indexValue = index || $this.index;
				if (0 <=  indexValue && indexValue < 4 ) {		
					focus(indexValue);	
				} else if (indexValue >= 4){
					setLast();			
				}
				
			}

			return {
				clickBtn:function(value){	
					slide(value);
				},
				slide:function(){
					slide();
					setIndex($this.index);
				}
			}
		},

		next(){
			clearInterval(this.handle);
			this.index = this.index + 1;
			if (this.index > 4){
				this.index = 0;
			}
			this.slideImage().clickBtn();
			this.handle = setInterval(this.slideImage().slide, 3000);
		},

		prev(){
			clearInterval(this.handle);
			this.index = this.index - 1;
			if (this.index < 0){
				this.index = 4;
			}
			this.slideImage().clickBtn();
			this.handle = setInterval(this.slideImage().slide, 3000);
		},

		goIndex(index){
			clearInterval(this.handle);
			this.index = index;
			this.slideImage().clickBtn();
			this.handle = setInterval(this.slideImage().slide, 3000);
		}
	},

	mounted(){
		this.handle = setInterval(this.slideImage().slide, 3000);
	}
}
</script>