// JavaScript Document
$(function(){
	/*阅读页*/
	/*下拉菜单*/
$('.qr').mouseover(function(){
	$(this).children('.cnt').show();
	$(this).css({'border-bottom-color':'white'});
	}).mouseout(function(){
		$(this).children('.cnt').hide();
		$(this).css({'border-bottom-color':'#e0e4e0'});
		});
/*tab栏*/
$('.u_nav_tab .itm').click(function(){
	$(this).addClass('current').siblings().removeClass('current');
	var index=$(this).index();
	if(index==2){
		$('.g_sd').children('.cnt').eq(index-1).addClass('current').siblings().removeClass('current');
		}
	else if(index==4){
		$('.g_sd').children('.cnt').eq(index-2).addClass('current').siblings().removeClass('current');
		}
	else{
		$('.g_sd').children('.cnt').eq(0).addClass('current').siblings().removeClass('current');
		}
	
  });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	})