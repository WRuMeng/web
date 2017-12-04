$(function(){
	area();
	local();
	//下拉菜单
	down();
	var timer=null;
	function animate2(ele,target){
		clearInterval(ele.timer);
		ele.timer=setInterval(function(){
			var step=(target-ele.offsetTop)/10;
			step=step>0?Math.ceil(step):Math.floor(step);
			ele.style.top=ele.offsetTop+step+'px';
			if(Math.abs(target-ele.offsetTop)<Math.abs(step)){
				ele.style.top=target+'px';
				clearInterval(timer);
			}
		},10);
	}
	$('.cms-left a').click(function(){
		var index=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		var cms=document.getElementById('cms-right');
		var ul=cms.children[0];
		animate2(ul,-303*index);
	});
	$('.shop-item').mouseover(function(){
		$(this).children().children('.shop-search').show();
	}).mouseout(function(){
		$(this).children().children('.shop-search').hide();
	});
	
	
	
	
});
