window.onload=function(){$(".main_bd_list li").mouseover(function(){$(this).children(".innerbox").stop().animate({top:"0"},100)}).mouseout(function(){$(this).children(".innerbox").stop().animate({top:"100%"},100)}),$(".main_hd a").click(function(){$(this).addClass("current").siblings().removeClass("current");var n=$(this).index();$(".main_bd").children().eq(n).addClass("current").siblings().removeClass("current")})};