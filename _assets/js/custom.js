var is_weixin = (function(){return navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'})();
$(function(){
    var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight; //兼容IOS，不需要的可以去掉
    var $btn = $('#import');
    var $tip = $('#shareit');
    if (is_weixin) {
        $btn.on("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            $tip.height(winHeight); //兼容IOS弹窗整屏
            $tip.show();
        });
        $tip.on("click", function(){
            $tip.hide(); 
        })
    }

    $(window).on('load',function(){
      //dom 加载完成后显示图标
      $('#arrow-h').removeClass('hide_');
    });

    setTimeout(function(){
    var _h = $(window).height(), d_w = $(window).width(), _w = $('.g-wrap').width();

    $('.pimg').css({                
    left : (d_w - _w) /2
    });
    $('.ctel,.right_bar').css({             
    right : (d_w - _w) /2
    });

    },/android 2/i.test(navigator.userAgent) ? 150 : 0);

    $('.g-wrap').on('mousemove touchmove',function(e){
    $('#arrow-h').addClass('hide_');
    });

    var $macImg = $('#mac_img');
    $('#mac_menu').find('.menu').find('li').mouseover(function(event) {
        $macImg.attr('src', $(this).data('img'));
    });
    
    var stores,city,area;
    var $a = $('#city'),
        $b = $('#area'),
        $c = $('#case_tbody');
    if($a.length && $b.length){    
        $.get("/case.json", function (response) {
            console.log(response);
            stores = response;
            $.each(response, function (i, v) {
                var str = "<option value='"+ i +"'>"+ i +"</option>";
                $a.append(str);
            })
        },"json");
        $a.on('change', function (event) {
            city = $(this).val();
            $b.empty();

            var str = '<option selected="selected">请选择</option>';
            $b.append(str);
            if(city){
                $.each(stores[city], function (index, item) {
                    var str = "<option value='"+ index +"'>"+ index +"</option>";
                    $b.append(str);
                })
            }
        });

        $b.on('change', function (event) {
            area = $(this).val();
            console.log(stores[city][area]);
            $c.empty();
            $.each(stores[city][area], function (index, item) {
              var node = "<tr><td>"+item[0]+"</td><td>"+item[1]+"</td></tr>";
              $c.append(node);
            })
        });
    }
});   
