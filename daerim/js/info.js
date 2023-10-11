// 사이드네비게이션 선택효과

$(".snb1 li > a").click(function(){
    $(this).toggleClass("select").parent().siblings().children("a").removeClass("select");
    $(".snb1 li > ul").slideUp(300);
    $(this).next().stop().slideToggle(300);
});

// 헤더 스크롤 고정

var bw = $("body").width();
$(window).resize(function(){
    bw = $("body").width();
});

$(window).scroll(function(){
    if (bw > 800) {
        var st = $(this).scrollTop();
        if (st > 170) {
            $(".snbarea").addClass("on");
            $(".blank").addClass("on");
        } else {
            $(".snbarea").removeClass("on");
            $(".blank").removeClass("on");
        }
    }
});

// 모바일 버젼

$(".subarea > a").click(function(){
    $(this).next().slideToggle(100);
    $(this).toggleClass("active");
    $(".black").toggleClass("on");
    return false;
});