// JavaScript Document
$(function(){
	/*下拉列表*/
	$('.site_nav_bd_r .site_nav_menu').mouseover(function(){
		$(this).children('.site-nav_menu_list').children('.site_nav_menu_list_panel').show();
		$(this).children('.site_nav_menu_hd').css({'background-color':'white'});
		$(this).children('.site-nav_menu_list').children('.site_nav_menu_list_panel').css({'border-top-color':'white'});
		$(this).children('.site_nav_menu_hd').css({'border-color':'#eee'});
		}).mouseout(function(){
			$(this).children('.site-nav_menu_list').children('.site_nav_menu_list_panel').hide();
			$(this).children('.site_nav_menu_hd').css({'background-color':'#f5f5f5'});
			$(this).children('.site_nav_menu_hd').css({'border-color':'#f5f5f5'});
			});

	/*tab栏效果*/
	$('.btn_search .search_tab li').click(function(){
		var index=$(this).index();
		$(this).css({'background':'#ff5500','color':'white'}).siblings().css({'background':'white','color':'#3c3c3c'});
		if(index==1){
			$(this).css({'background':'#c40000','color':'white'}).siblings().css({'background':'white','color':'#3c3c3c'});
			}
		$('.search_btn li').eq(index).show().siblings().hide();
		$('.search_hots li').eq(index).show().siblings().hide();
		});
	/*手机版关闭*/
	$('.mtb').click(function(){
		$('.tbh_qr').hide();
		});

	/*侧边栏效果*/
	$('.services_bd li').mouseover(function(){
		var index=$(this).index();
		$('.services_float_item').eq(index).show();
		$('.services_float_item').eq(index).mouseover(function(){
			$(this).show();
			});
		}).mouseout(function(){
			var index=$(this).index();
			$('.services_float_item').eq(index).hide();
			$('.services_float_item').eq(index).mouseout(function(){
				$(this).hide();
				$('.services_float').hide();
				});
			});


/*轮播图*/
f2('banner1');
/*天猫轮播图效果*/
function f4(myId){
	var n=document.getElementById('num');
	var Id=document.getElementById(myId); //找到Id
	var ul_s=Id.children[0];//找到ul的内容
	var ol_s=Id.children[1];//找到ol
	var a_l=Id.children[2];//左按钮
	var a_r=Id.children[3];//右按钮
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
		n.innerHTML=num+1;
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
		n.innerHTML=num+1;
		 });
	$(a_r).click(function(){ //按动右边按钮
		num++;
		if(num>number)
		{
			num=0;}
		$(ols).eq(num).addClass('current').siblings().removeClass('current');
		$(uls).eq(num).hide().stop().fadeIn().siblings().hide();
		n.innerHTML=num+1;
		});
	}
f4('banner2');
/*tab*/
$('.notice_hd a').mouseover(function(){
	$(this).addClass('current').siblings().removeClass('current');
	$(this).css({'font-weight':'600'}).siblings().css({'font-weight':'normal'});
	var index=$(this).index();
	$('.notice_bd_item').eq(index).show().siblings().hide();
	})
/*透明度*/
$('.fi_dwrap>a').mouseover(function(){
	$(this).children('.a_all').css({'background':'white'});
	}).mouseout(function(){
		$(this).children('.a_all').css({'background':'rgba(255,255,255,.6)'});
		
		})

/*上升效果*/
$('.fi_banner').mouseover(function(){
	$(this).children('.all').stop().animate({'bottom':'0px'});
	}).mouseout(function(){
		$(this).children('.all').stop().animate({'bottom':'-54px'});
		})

/*外边栏效果*/
$('.like1,.like2,.like3,.like4').mouseover(function(){
	$(this).children('.fi_contain').children('.fi_bottom,.fi_right,.fi_top').addClass('current');
	}).mouseout(function(){
		$(this).children('.fi_contain').children('.fi_bottom,.fi_right,.fi_top').removeClass('current');
		})

/*显示隐藏效果*/
$('.sale_contain').mouseover(function(){
	$(this).children('.item_hover').show();
	}).mouseout(function(){
		$(this).children('.item_hover').hide();
		});
$('.hot_sale_item').mouseover(function(){
	$(this).children('.hot_item_hover').show();
	}).mouseout(function(){
		$(this).children('.hot_item_hover').hide();
		
		})
	
	
	})