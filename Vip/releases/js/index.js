$(function(){area(),local(),down(),focus("banner"),$(".brand-item").mouseover(function(){$(this).children(".brand-hover").show(),$(this).children(".img-box").css({opacity:"0.3"})}).mouseout(function(){$(this).children(".brand-hover").hide(),$(this).children(".img-box").css({opacity:"1"})}),function(){var e=document.getElementById("footer");console.log(e.offsetTop);for(var n=0,o=null,t=0,i=document.getElementById("shop"),s=i.children,a=document.getElementById("inner-nav").children,r=0;r<a.length;r++)a[r].index=r,a[r].onclick=function(){for(var e=0;e<a.length;e++)a[e].className="";this.className="current",n=s[this.index].offsetTop-40,clearInterval(o),o=setInterval(function(){var e=(n-t)/10;e=e>0?Math.ceil(e):Math.floor(e),t+=e,window.scrollTo(0,t),Math.abs(n-t)<=Math.abs(e)&&clearInterval(o)},30)};window.onscroll=function(){if((t=scroll().top)>=130)if($(".main-nav").css({position:"fixed",top:"0"}),t>=i.offsetTop&&t<e.offsetTop-400){$("#index-nav").show();for(var n=[],o=[],r=0;r<a.length;r++){n[r]=s[r].offsetTop;var l=n[r]-150;console.log(n[r]),o[r]=s[r].offsetHeight,t>=l&&t<=n[r]+o[r]&&$("#inner-nav").children("a").eq(r).addClass("current").siblings().removeClass("current")}}else $("#index-nav").hide();else $(".main-nav").css({position:"static",top:"130px"})}}()});