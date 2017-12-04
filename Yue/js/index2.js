// JavaScript Document
$(function(){
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
    var index=3;
    $.ajax({
        url:'php/index_2.php',
        type:'post',
        data:{index:index},
        success:function(info){
            var info=JSON.parse(info);
            for(var i=0;i<info.length;i++){
                var lis=document.createElement('li');
                $(lis).html('<a href="#" class="cltag">【新闻】</a>'
                                +'<a href="#" class="cltit">'+info[i].val+'</a>'
                                +'<span class="cltime">'+info[i].t+'</span>');
                $('.content_bd_bd').append($(lis));
            }
        }
    });
    $('.content_bd_hd a').click(function(){
        var left=this.offsetLeft;
        var line=document.getElementById('line');
        $(this).addClass('current').siblings().removeClass('current');
        animate(line,left);
        index=$(this).index();
        $.ajax({
            url:'php/index_2.php',
            type:'post',
            data:{index:index},
            success:function(info){
                var info=JSON.parse(info);
                $('.content_bd_bd').html('');
                for(var i=0;i<info.length;i++){
                    var lis=document.createElement('li');
                    $(lis).html('<a href="#" class="cltag">【新闻】</a>'
                                    +'<a href="#" class="cltit">'+info[i].val+'</a>'
                                    +'<span class="cltime">'+info[i].t+'</span>');
                    $('.content_bd_bd').append($(lis));
                }
            }
        });
    });
    // 分页
    var box=document.getElementById('cpages');
    var first=box.children[0];
    var pre=box.children[1];
    var next=box.children[2];
    var last=box.children[3];
    console.log(first);
    $(first).click(function(){
        $.ajax({
            url:'php/count.php',
            type:'post',
            data:{index:index,page:1},
            success:function(info){
                var info=JSON.parse(info);
                console.log(info);
                $('.content_bd_bd').html('');
                for(var i=0;i<info.length;i++){
                    var lis=document.createElement('li');
                    $(lis).html('<a href="#" class="cltag">【新闻】</a>'
                                    +'<a href="#" class="cltit">'+info[i].val+'</a>'
                                    +'<span class="cltime">'+info[i].t+'</span>');
                    $('.content_bd_bd').append($(lis));
                }
            }
        });
    });
    $(pre).click(function(){
            $.ajax({
                url:'php/count.php',
                type:'post',
                data:{index:index,page:1},
                success:function(info){
                    var info=JSON.parse(info);
                    console.log(info);
                    $('.content_bd_bd').html('');
                    for(var i=0;i<info.length;i++){
                        var lis=document.createElement('li');
                        $(lis).html('<a href="#" class="cltag">【新闻】</a>'
                                        +'<a href="#" class="cltit">'+info[i].val+'</a>'
                                        +'<span class="cltime">'+info[i].t+'</span>');
                        $('.content_bd_bd').append($(lis));
                    }
                }
            });
    });
    $(next).click(function(){
        $.ajax({
            url:'php/count.php',
            type:'post',
            data:{index:index,page:2},
            success:function(info){
                var info=JSON.parse(info);
                console.log(info);
                $('.content_bd_bd').html('');
                for(var i=0;i<info.length;i++){
                    var lis=document.createElement('li');
                    $(lis).html('<a href="#" class="cltag">【新闻】</a>'
                                    +'<a href="#" class="cltit">'+info[i].val+'</a>'
                                    +'<span class="cltime">'+info[i].t+'</span>');
                    $('.content_bd_bd').append($(lis));
                }
            }
        });
    });
    $(last).click(function(){
        $.ajax({
            url:'php/count.php',
            type:'post',
            data:{index:index,page:2},
            success:function(info){
                var info=JSON.parse(info);
                console.log(info);
                $('.content_bd_bd').html('');
                for(var i=0;i<info.length;i++){
                    var lis=document.createElement('li');
                    $(lis).html('<a href="#" class="cltag">【新闻】</a>'
                                    +'<a href="#" class="cltit">'+info[i].val+'</a>'
                                    +'<span class="cltime">'+info[i].t+'</span>');
                    $('.content_bd_bd').append($(lis));
                }
            }
        });
    });














});