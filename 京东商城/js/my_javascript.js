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
function f3(myId){
	var Id=document.getElementById(myId); //找到Id
	var ul_s=Id.children[0];//找到ul的内容
	var a_l=Id.children[1];//左按钮
	var a_r=Id.children[2];//右按钮
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
	 $(a_l).click(function(){ //按左边按钮
		num--;
		if(num<0)
		{
			num=number;
		}
		$(uls).eq(num).hide().stop().fadeIn().siblings().hide();
		 });
	$(a_r).click(function(){ //按动右边按钮
		num++;
		if(num>number)
		{
			num=0;}
		$(uls).eq(num).hide().stop().fadeIn().siblings().hide();
		});
}
/*tab栏*/
function tab(Id)
{
	var tab=document.getElementById(Id);
	var head=tab.children[0];
	var bd=tab.children[1];
	$(head).children().mouseover(function(){
		var index=$(this).index();
		$(bd).children().eq(index).show().siblings().hide();
		});
		//缓动效果
   var s=head.children; //滑块
   var active=head.children[s.length-1];
    var a=head.children; //找到a
    var current = 0;   // 用于存放点击时候的 offsetLeft   
	var leader = 0, target = 0;
    //alert(lis.length);
    for(var i=0; i<a.length-1;i++) {
        a[i].onmouseover = function() {
            // alert(this.offsetLeft);			
			target = this.offsetLeft;  // 把左侧的位置 ，给 target
			current = this.offsetLeft; // 当前位置 存贮一下 
		}
        a[i].onmouseout = function() {
            target = current;     // 鼠标离开  target 是 刚才我们点击的位置
        }
    }
    // 缓动公式
    setInterval(function(){
        leader = leader + (target - leader ) / 10;
        active.style.left = leader + "px";
    },10);
}
 
function tab2(Id){
	var tab=document.getElementById(Id);
	var head=tab.children[0];
	var bd=tab.children[1];
	$(head).children().mouseover(function(){
		var index=$(this).index();
		$(bd).children().eq(index).show().siblings().hide();
		});
		//缓动效果
    var s=head.children; //滑块
    var active=head.children[s.length-1];
    var a=head.children; //找到a
    var current = 0;   // 用于存放点击时候的 offsetLeft   
	var leader = 0, target = 0;
    //alert(lis.length);
    for(var i=0; i<a.length-2;i++) {
        a[i].onmouseover = function(){
            // alert(this.offsetLeft);			
			target = this.offsetLeft;  // 把左侧的位置 ，给 target
			current = this.offsetLeft; // 当前位置 存贮一下 
		}
        a[i].onmouseout = function() {
            target = current;     // 鼠标离开  target 是 刚才我们点击的位置
        }
    }
    // 缓动公式
    setInterval(function(){
        leader = leader + (target - leader )/10;
        active.style.left = leader + "px";
    },10);
}