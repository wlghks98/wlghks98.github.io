// PC 버젼

// 상단 네비 탭 클릭

$("nav ul li a").click(function(){
    $(this).parent().siblings().children().removeClass("select");
    $(this).addClass("select");
    
    var ln = $(this).parent().index() + 1;
    var st = $("#page" + ln).offset().top;
    
    $("html").animate({scrollTop:st},500);
    return false;
});

// 스크롤 내려서 페이지 도달 시 네비생성

$(window).scroll(function(){
    var sc = $(this).scrollTop();
    
    if (bw > 800 && sc > 890) {
        $("nav").addClass("on");
    } else if (bw < 800 && sc > 770) {
        $("nav").addClass("on");
    } else {
        $("nav").removeClass("on");
    }
});

// MOBILE 버젼 body width값 resize 설정

var bw = $("body").width();
$(window).resize(function(){
    bw = $("body").width();
});