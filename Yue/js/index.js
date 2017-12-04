// JavaScript Document
window.onload=function(){
	window.onresize=function(){
		if(window.innerWidth<1280){
			$('.wrapper').css({'background-position':'40% 0'});
			}
		if(window.innerWidth<768){
			$('.wrapper').css({'background-position':'20% 0'});
			}
		}
	
	//上升效果
	$('.qnav li').mouseover(function(){
		$(this).children('i').stop().slideUp();
		$(this).children('a').css({'line-height':'100px'});
		}).mouseout(function(){
			$(this).children('i').stop().slideDown();
			$(this).children('a').css({'line-height':'30px'});
			});
	
		$('.avfeas_list a').mouseover(function(){
		$(this).children('img').stop().slideUp();
		$(this).children('p').css({'line-height':'150px'});
		}).mouseout(function(){
			$(this).children('img').stop().slideDown();
			$(this).children('p').css({'line-height':'24px'});
			});
// 调节透明度
	$('.main_content_five a').mouseover(function(){
		$(this).fadeTo(500,0.5);
		}).mouseout(function(){
			$(this).fadeTo(500,5);
			});
//轮播图---缓动方式的
			var banner=document.getElementById('#banner');
			var slider=document.getElementById('slider');
			var ul=slider.children[0];
			var spans=document.getElementById('spans');
			var lis=spans.children;
			var timer=null;
			var key=0;
			var span=0;
			// 复制第一张：
			var img=document.createElement('li');
			img.innerHTML='<img src="images/banner1.jpg"/>';
			ul.appendChild(img);
			function animate(ele,target){
				clearInterval(ele.timer);
				ele.timer=setInterval(function(){
					var step=(target-ele.offsetLeft)/10;
					step=step>0?Math.ceil(step):Math.floor(step);
					ele.style.left=ele.offsetLeft+step+'px';
					if(Math.abs(target-ele.offsetLeft)<Math.abs(step)){
						ele.style.left=target+'px';
						clearInterval(ele.timer);
					}
				},30);
			}
		  timer=setInterval(function(){
			  key++;
			  if(key>lis.length-1){
				  key=0;
				  ul.style.left=0+'px';
			  }
			  animate(ul,-799*key);
			  span++;
			  if(span>lis.length-1){
				  span=0;
			  }
			  $('#spans li').eq(span).addClass('current').siblings().removeClass('current');
	      },1000);
		// 鼠标移动
		$('#banner').mouseover(function(){
			clearInterval(timer);
		}).mouseout(function(){
			timer=setInterval(function(){
				key++;
				if(key>lis.length-1){
					key=0;
					ul.style.left=0+'px';
				}
				animate(ul,-799*key);
				span++;
				if(span>lis.length-1){
					span=0;
				}
				$('#spans li').eq(span).addClass('current').siblings().removeClass('current');
			},2000);
		});
		// 点击spans按钮：
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){
				$(this).addClass('current').siblings().removeClass('current');
				span=key=this.index;
				animate(ul,-this.index*799);
			}
		}
		  
//tab栏效果
tab('hotnews');
tab('newsbox');
tab('newsbox2');

	

	
	
	}