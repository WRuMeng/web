$(function(){area(),local(),down(),$.ajax({url:"php/detail.php",type:"get",success:function(e){e=JSON.parse(e);console.log(e.length);for(var s=0;s<e.length;s++){var i=document.createElement("div");i.className="shop-item",i.innerHTML=' <a href="###"><img src="'+e[s].path+'" class="lazy" width="490" height="235"/><div class="shop-item-hidden">'+e[s].hidden+'</div><div class="shop-item-info"><span class="shop-item-discount"><i>'+e[s].price+'</i>折起</span><p class="shop-item-name">'+e[s].name+'</p><span class="shop-item-time"><i></i><em>'+e[s].time+"</em></span></div></a>",$(".shop-sort").append(i)}}}),window.onscroll=function(){var e=$(".hot-category").offset().top;scroll().top>e?$(".hide-nav").show():$(".hide-nav").hide()},$(".shop-item").mouseover(function(){$(this).children().children(".shop-search").show()}).mouseout(function(){$(this).children().children(".shop-search").hide()})});