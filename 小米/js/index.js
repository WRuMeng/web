// JavaScript Document
$(function(){
	/*首页*/
	/*表单效果*/
	function f1(){
	$('.text').focus(function(){
		$(this).css({'border':'1px solid #ff6700'});
		$('.sub').css({'border':'1px solid #ff6700'});
		$('.search_word').stop().hide();
		$('.result_list').show();
		}).blur(function(){
			$(this).css({'border':'1px solid #e0e0e0'});
			$('.sub').css({'border':'1px solid #e0e0e0'});
			$('.result_list').hide();
			$('.search_word').stop().show();
	});
	}
	f1();
	f2('nav_banner');
	f3('list_banner4');
  f3('list_banner3');
  f3('list_banner2');
  f3('list_banner1');
   function f3(myId){
	var Id=document.getElementById(myId); //找到Id
	var con=Id.children[0];
	var ul_s=Id.children[1];//找到ul的内容
	var ol_s=Id.children[2];//找到ol
	var a_l=Id.children[3];//左按钮
	var a_r=Id.children[4];//右按钮
	var ols=ol_s.getElementsByTagName('li');//ol的li
	var uls=ul_s.getElementsByTagName('li');//ul 的li
	var number=ul_s.getElementsByTagName('li').length-1;//求出ul li的个数
    var time=null;
    var num=0;
    time=window.setInterval(fun,5000);//开启定时器
	  function fun()
	  {
		  num++;
		  if(num>number)
		  {
			num=0;
			}
		$(ols).eq(num).addClass('current').siblings().removeClass('current');
		$(uls).eq(num).hide().stop().fadeIn().siblings().hide();
	 }
	$(Id).mouseover(function(){ //鼠标移入的时候
		$(a_l).hide().stop().show();
		$(a_r).hide().stop().show();
		window.clearInterval(time);
		}).mouseout(function(){
			$(a_l).hide();
		    $(a_r).hide();
			time=window.setInterval(fun,5000);
			});
	$(ols).mouseover(function(){ //ol移入的时候
		$(this).addClass('current').siblings().removeClass('current');
		num=$(this).index();
		$(uls).eq(num).hide().stop().fadeIn().siblings().hide();
		});
	 $(a_l).click(function(){ //按左边按钮
		num--;
		if(num<0)
		{
			num=number;
		}
		$(ols).eq(num).addClass('current').siblings().removeClass('current');
		$(uls).eq(num).hide().stop().fadeIn().siblings().hide();
		 });
	$(a_r).click(function(){ //按动右边按钮
		num++;
		if(num>number)
		{
			num=0;}
		$(ols).eq(num).addClass('current').siblings().removeClass('current');
		$(uls).eq(num).hide().stop().fadeIn().siblings().hide();
		});
}


/*左右切换效果*/
function fun3(){
	  var timer=null;
	  var num=0;
	  timer=window.setInterval(fn,10000);
	  function fn(){
		  num++;
		  if(num>1)
		  {
			  num=0;  
		  }
			  $('.box_bd>ul>li').eq(num).hide().stop().fadeIn().siblings().hide();
			   $('.more button').eq(num).removeClass('current').siblings().addClass('current');
		  }
			 $('button.right').click(function(){
			  $('.box_bd>ul>li').eq(1).hide().stop().fadeIn().siblings().hide();
			  $('.more button').eq(1).removeClass('current').siblings().addClass('current');
				 });
			 $('button.left').click(function(){
			  $('.box_bd>ul>li').eq(0).hide().stop().fadeIn().siblings().hide();
			 $('.more button').eq(0).removeClass('current').siblings().addClass('current');
				 })
	
	}
fun3();
/*tab效果*/
function fun4(){
	$('#match .box_hd>ul>li').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index=$(this).index();
		$('#match .main_right').eq(index).stop().show().siblings().stop().hide();
	})
	}

fun4();
/*显示隐藏效果*/
function fun5(){
	$('.main_item').mouseover(function(){
		$(this).children('.review_wrap').stop().animate({'bottom':'0px'},800);	
		}).mouseout(function(){
		       $(this).children('.review_wrap').stop().animate({'bottom':'-80px'},800);			
			})
	}

fun5();



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	})