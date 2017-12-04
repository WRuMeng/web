// JavaScript Document
$(function(){
	/*社区页*/		
	f2('nav_banner2');
	/*下拉列表*/
function fun6(){
	$('.moblie_qr').mouseover(function(){
	$(this).children('.qr').show();
		}).mouseout(function(){
			$('.qr').hide();
			});
	}
fun6();
/*有动画的下拉列表*/
function fun7(){
	
	$('.header_menu li').mouseover(function(){
		$(this).children('.list_more_menu').show();
		$(this).children('.header_list_menu').show();
		}).mouseout(function(){
		$(this).children('.list_more_menu').hide();
		$(this).children('.header_list_menu').hide();
			});
	}
fun7();
	/*tab*/
$('.tab>span').mouseover(function(){
	$(this).addClass('fb').siblings().removeClass('fb');
	var index=$(this).index();
	$('.tab_content>ul').eq(index).addClass('current').siblings().removeClass('current');
	})

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	})