$(function(){area(),local(),down();var e=null;$(".cms-left a").click(function(){var t=$(this).index();$(this).addClass("current").siblings().removeClass("current");!function(t,n){clearInterval(t.timer),t.timer=setInterval(function(){var o=(n-t.offsetTop)/10;o=o>0?Math.ceil(o):Math.floor(o),t.style.top=t.offsetTop+o+"px",Math.abs(n-t.offsetTop)<Math.abs(o)&&(t.style.top=n+"px",clearInterval(e))},10)}(document.getElementById("cms-right").children[0],-303*t)}),$(".shop-item").mouseover(function(){$(this).children().children(".shop-search").show()}).mouseout(function(){$(this).children().children(".shop-search").hide()})});