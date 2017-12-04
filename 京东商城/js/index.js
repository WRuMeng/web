// JavaScript Document
$(function(){
	/*下拉菜单*/
	$('.fl').mouseover(function(){
		$(this).children('span').css({'border-color':'#ddd','background':'white','border-bottom-color':'white'});
		$(this).children('.drop_down').show();
		}).mouseout(function(){
			$(this).children('span').css({'border-color':'#e3e4e5','background':'#e3e4e5','border-bottom-color':'#ddd'});
		    $(this).children('.drop_down').hide();
			});
	$('.fr .dropdown_menu').mouseover(function(){
		$(this).css({'border-left-color':'#e3e4e5','background':'white','border-bottom-color':'white'});
		$(this).children('.drop_down').show();
		}).mouseout(function(){
			$(this).css({'border-color':'#e3e4e5','background':'#e3e4e5','border-bottom-color':'#ddd'});
		    $(this).children('.drop_down').hide();
			});
    var add=document.getElementById('adress');
	$('.item a').click(function(){
		add.innerHTML=this.innerHTML;
		})
	$('.dd .item').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
		});
		
	$('.settleup.dropdown_menu').mouseover(function(){
		$(this).css({'border-left-color':'#e3e4e5','border-bottom-color':'white'});
		$(this).children('.drop_down').show();
		}).mouseout(function(){
			$(this).css({'border-color':'#e3e4e5','border-bottom-color':'#ddd'});
		    $(this).children('.drop_down').hide();
			});
	
	/*侧边栏导航*/
	$('.cate_menu li').mouseover(function(){
		var index=$(this).index();
		$('.cate_pop').eq(index).show();
		$('.cate_pop').eq(index).mouseover(function(){
			$(this).show();
			});
		}).mouseout(function(){
			var index=$(this).index();
			$('.cate_pop').eq(index).hide();
		    $('.cate_pop').eq(index).mouseout(function(){
			$(this).hide();
			});
			})
			/*轮播图*/
f2('banner');
f2('banner2');
f3('banner3');
f3('banner4');
f3('banner5');
/*tab栏*/
tab2('tab1');
tab('tab2');
/*广告效果*/
$('.adv_list a').mouseover(function(){
	$(this).stop().fadeTo(300,0.6).siblings().stop().fadeTo(300,1);
	}).mouseout(function(){
		$(this).fadeTo(300,1);
		});
		
/*向上滑动效果*/

/*浏览器滑动效果*/































	});
