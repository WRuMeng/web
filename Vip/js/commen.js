
function local(){
		$('.sel-area').mouseover(function(){
			$(this).children('.sel-area-change').css({'border-left':'1px solid #cdcdcd','border-right':'1px solid #cdcdcd','background-color':'white'});
			$('.sel-area-box i').show();
			$('.sel-area-box').show();
			$(this).children('.sel-area-change').children('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up').css({'color':'#f10180'});
		}).mouseout(function(){
			$(this).children('.sel-area-change').css({'border-left':'1px solid #f5f5f5','border-right':'1px solid #f5f5f5','background-color':'#f5f5f5'});
			$('.sel-area-box i').hide();
			$('.sel-area-box').hide();
			$(this).children('.sel-area-change').children('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down').css({'color':'#999'});
		});
	}
function area(){
	$('.sel-area-box span').click(function(){
		$('.sel-area-btn').html($(this).html());
		$(this).addClass('current').siblings().removeClass('current');
		$(this).parents().siblings().children().removeClass('current');
	})
}
//下拉菜单
function down(){
		//顶部下拉菜单效果
		$('.top-nav-tool li.wp-current').mouseover(function(){
			$(this).children('.wp-top').css({'background':'white','borderColor':'#cdcdcd'}).children('span').css({'color':'white'});
			$(this).children('.wp-top').children('a').children('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
			$(this).children('.wp-bottom').show();
		}).mouseout(function(){
			$(this).children('.wp-top').css({'background':'#f5f5f5','borderColor':'#f5f5f5'}).children('span').css({'color':'#dcdcdc'});
			$(this).children('.wp-bottom').hide();
			$(this).children('.wp-top').children('a').children('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
		});
		$('.nav-more').mouseover(function(){
			$(this).children('div').show();
			$(this).children('a').children('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
		}).mouseout(function(){
			$(this).children('div').hide();
			$(this).children('a').children('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
		});
	}
function animate2(ele,target){
		clearInterval(ele.timer);
		ele.timer=setInterval(function(){
			var speed=(target-ele.offsetTop)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			ele.style.top=ele.offsetTop+speed+'px';
			if(Math.abs(speed)<Math.abs(target-ele.offsetTop)){
				ele.style.top=target+'px';
				clearInterval(ele.tiemr);
			}
		},100);
	}		
	
	//缓动动画封装
	function animate(ele,target) {
	    clearInterval(ele.timer);
	    ele.timer = setInterval(function () {
	        var step = (target-ele.offsetLeft)/10;
	        step = step>0?Math.ceil(step):Math.floor(step);
	        ele.style.left = ele.offsetLeft + step + "px";
	        if(Math.abs(target-ele.offsetLeft)<Math.abs(step)){
	            ele.style.left = target + "px";
	            clearInterval(ele.timer);
	        }
	    },20);
	}
	//轮播图效果
	function focus(index){
		var timer=null;
		var n=0;
		var banner=document.getElementById(index);
		var ul=banner.children[0];
		var ulLis=ul.children;
		var ol=banner.children[1];
		var olLis=ol.children;
		var bl=banner.children[2];
		var br=banner.children[3];
		var square=ol.children[5];
		timer=setInterval(autoPlay,3000);
		var leader=0;
		var target=0;
		//自动播放效果
		function autoPlay(){
			n++;
			if(n>olLis.length-2){
				n=0;
			}
			$(ulLis).eq(n).hide().stop().fadeIn(1000).siblings().stop().hide();
			$(olLis).eq(n).addClass('current').siblings().removeClass('current');
			animate(square,n*195);
		}
		$(banner).mouseover(function(){
			clearInterval(timer);
			$(bl).css({'left':'0'});
			$(br).css({'right':'0'});
			clearInterval();
		}).mouseout(function(){
			timer=setInterval(autoPlay,3000);
			$(bl).css({'left':'-33px'});
			$(br).css({'right':'-33px'});
		});
		$(br).click(autoPlay);
		$(bl).click(function(){
			n--;
			if(n<0){
				n=olLis.length-2;
			}
			$(ulLis).eq(n).hide().stop().fadeIn(1000).siblings().stop().hide();
			$(olLis).eq(n).addClass('current').siblings().removeClass('current');
			animate(square,n*195);
		});
		//操作olLis
		for(var i=0;i<olLis.length-1;i++){
			$(olLis).eq(i).click(function(){
				$(this).addClass('current').siblings().removeClass('current');
				n=$(this).index();
				$(ulLis).eq(n).hide().fadeIn(1000).siblings().stop().hide();
				animate(square,n*195);
			})
		}
		
   }
	//  鼠标滚动效果
	function scroll() {  // 开始封装自己的scrollTop
	    if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
	        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
	        return {
	            left: window.pageXOffset,
	            top: window.pageYOffset
	        }
	    }
	    else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
	        return {
	            left: document.documentElement.scrollLeft,
	            top: document.documentElement.scrollTop
	        }
	    }
	    return {   // 未声明 DTD
	        left: document.body.scrollLeft,
	        top: document.body.scrollTop
	    }
	}