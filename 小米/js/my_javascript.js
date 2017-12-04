// JavaScript Document
	/*轮播图*/
function f2(myId){
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

