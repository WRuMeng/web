window.onload=function(){
	//显示隐藏效果
	$('.main_bd_list li').mouseover(function(){
		$(this).children('.innerbox').stop().animate({'top':'0'},100);
		}).mouseout(function(){
		$(this).children('.innerbox').stop().animate({'top':'100%'},100);	
			
			});
	
	//tab栏
	$('.main_hd a').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
		var index=$(this).index();
		$('.main_bd').children().eq(index).addClass('current').siblings().removeClass('current');
		})
	
	
	
	
	
	
	
	
	
	
	
	
	}
