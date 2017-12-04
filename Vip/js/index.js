$(function(){
	//
	area();
	//调用地址
	local();
	//下拉菜单
	down();
	//调用轮播图
	focus('banner');
	//今日特惠效果
	$('.brand-item').mouseover(function(){
		$(this).children('.brand-hover').show();
		$(this).children('.img-box').css({'opacity':'0.3'});
	}).mouseout(function(){
		$(this).children('.brand-hover').hide();
		$(this).children('.img-box').css({'opacity':'1'});
	});
	//楼层跳跃效果
	function jump(){
		var arr=[];
		var footer=document.getElementById('footer');
		console.log(footer.offsetTop);
		var target=0,timer=null;
		var leader=0;
		var shop=document.getElementById('shop');
		var item=shop.children;
		var nav=document.getElementById('inner-nav');
		var inner=nav.children;
		var that;
		for(var i=0;i<inner.length;i++){
			inner[i].index=i;
			//排他思想
			inner[i].onclick=function(){
				for(var i=0;i<inner.length;i++){
					inner[i].className='';
				}
			this.className='current';
			//楼层跳跃效果
			target=item[this.index].offsetTop-40; //把ul li距离顶部的距离赋值给target
			//console.log(target);
			    clearInterval(timer);
				timer=setInterval(function(){
					var step=(target-leader)/10;
					step=step>0?Math.ceil(step):Math.floor(step);
					leader=leader+step;
					window.scrollTo(0,leader);
					if(Math.abs(target-leader)<=Math.abs(step)){
						clearInterval(timer);
					}
				},30);
				
			}
		}
		window.onscroll=function(){
			//固定导航+跟随广告效果
			leader=scroll().top;
			if(leader>=130){
				$('.main-nav').css({'position':'fixed','top':'0'});
				if(leader>=shop.offsetTop&&leader<footer.offsetTop-400){
					$('#index-nav').show();
					var arr=[];
					var h=[];
					for(var i=0;i<inner.length;i++){
						arr[i]=item[i].offsetTop;
						var b=arr[i]-150;
						console.log(arr[i]);
						h[i]=item[i].offsetHeight;
							if(leader>=b&&leader<=(arr[i]+h[i])){
								$('#inner-nav').children('a').eq(i).addClass('current').siblings().removeClass('current');							
							}
					}
				}else{
					$('#index-nav').hide();
				}
			}else{
				$('.main-nav').css({'position':'static','top':'130px'});
			}
		}
	}
	jump();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
});
	
	
	
	
	
	
	

	
