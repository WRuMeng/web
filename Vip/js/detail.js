$(function(){
	
	area();
	//调用地址
	local();
	//下拉菜单
	down();
	//ajax获取数据
	$.ajax({
		url:'php/detail.php',
		type:'get',
		success:function(info){
			var info=JSON.parse(info);
			console.log(info.length);
			for(var i=0;i<info.length;i++){
				var div=document.createElement('div');
				div.className='shop-item'
			    div.innerHTML=' <a href="###"><img src="'+info[i].path+'" class="lazy" width="490" height="235"/><div class="shop-item-hidden">'+ info[i].hidden +'</div>'
								+'<div class="shop-item-info">'
								     +'<span class="shop-item-discount"><i>'+info[i].price+'</i>折起</span>'
								     +'<p class="shop-item-name">'+info[i].name+'</p>'
									+'<span class="shop-item-time"><i></i><em>'+info[i].time+'</em></span>'
								+'</div>'
							 +'</a>';
				$('.shop-sort').append(div);
			}
		}
	});
	
	//固定导航效果
	window.onscroll=function(){
		var nav_top=$('.hot-category').offset().top;
		var Top=scroll().top;
		if(Top>nav_top){
			$('.hide-nav').show();
		}else{
			$('.hide-nav').hide();
		}
	}
	//明日预告
	$('.shop-item').mouseover(function(){
		$(this).children().children('.shop-search').show();
	}).mouseout(function(){
		$(this).children().children('.shop-search').hide();
	});
	
});
