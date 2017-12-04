
/*tab栏*/
function tab(Id)
{
	var tab=document.getElementById(Id);
	var head=tab.children[0];
	var bd=tab.children[1];
	$(head).children().click(function(){
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
        a[i].onclick = function() {
            // alert(this.offsetLeft);			
			target = this.offsetLeft;  // 把左侧的位置 ，给 target
			current = this.offsetLeft; // 当前位置 存贮一下
			$(this).addClass('current').siblings().removeClass('current'); 
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

//轮播图
// 多个属性运动框架  添加回调函数
function animate(obj,json,fn) {  // 给谁    json
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var flag = true;  // 用来判断是否停止定时器   一定写到遍历的外面
        for(var attr in json){   // attr  属性     json[attr]  值
            //开始遍历 json
            // 计算步长    用 target 位置 减去当前的位置  除以 10
            // console.log(attr);
            var current = 0;
            if(attr == "opacity")
            {
                current = Math.round(parseInt(getStyle(obj,attr)*100)) || 0;
                console.log(current);
            }
            else
            {
                current = parseInt(getStyle(obj,attr)); // 数值
            }
            // console.log(current);
            // 目标位置就是  属性值
            var step = ( json[attr] - current)/1.5;  // 步长  用目标位置 - 现在的位置 / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            //判断透明度
            if(attr == "opacity")  // 判断用户有没有输入 opacity
            {
                if("opacity" in obj.style)  // 判断 我们浏览器是否支持opacity
                {
                    // obj.style.opacity
                    obj.style.opacity = (current + step) /100;
                }
                else
                {  // obj.style.filter = alpha(opacity = 30)
                    obj.style.filter = "alpha(opacity = "+(current + step)* 10+")";

                }
            }
            else if(attr == "zIndex")
            {
                obj.style.zIndex = json[attr];
            }
            else
            {
                obj.style[attr] = current  + step + "px" ;
            }

            if(current != json[attr])  // 只要其中一个不满足条件 就不应该停止定时器  这句一定遍历里面
            {
                flag =  false;
            }
        }
        if(flag)  // 用于判断定时器的条件
        {
            clearInterval(obj.timer);
            //alert("ok了");
            if(fn)   // 很简单   当定时器停止了。 动画就结束了  如果有回调，就应该执行回调
            {
                fn(); // 函数名 +  （）  调用函数  执行函数 暂且这样替代
            }
        }
    },30)
}
function getStyle(obj,attr) {  //  谁的      那个属性
    if(obj.currentStyle)  // ie 等
    {
        return obj.currentStyle[attr];  // 返回传递过来的某个属性
    }
    else
    {
        return window.getComputedStyle(obj,null)[attr];  // w3c 浏览器
    }
}