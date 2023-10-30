// MOBILE 버젼 body width값 resize 설정

var bw = $("body").width();
$(window).resize(function(){
    bw = $("body").width();
});

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
    
    if ((bw > 800 && sc > 890) || (bw < 800 && sc > 770)) {
        $("nav").addClass("on");
    } else {
        $("nav").removeClass("on");
    }
    
    // 스크롤값 따라서 네비 select 효과
    
    if ((bw > 800 && sc > 3700) || (bw < 800 && sc > 3300)) {
        $("nav ul li a").removeClass("select");
        $("nav ul li:nth-child(4) a").addClass("select");
    } else if ((bw > 800 && sc > 2700) || (bw < 800 && sc > 2600)) {
        $("nav ul li a").removeClass("select");
        $("nav ul li:nth-child(3) a").addClass("select");
    } else if ((bw > 800 && sc > 1850) || (bw < 800 && sc > 2100)) {
        $("nav ul li a").removeClass("select");
        $("nav ul li:nth-child(2) a").addClass("select");
    } else {
        $("nav ul li a").removeClass("select");
        $("nav ul li:nth-child(1) a").addClass("select");
    }
});

// 포트폴리오 페이지 탭 버튼 이벤트

$(".tab ul li a").click(function(){
    $(this).parent().siblings().children().removeClass("select");
    $(this).addClass("select");
    
    var n = $(this).parent().index() + 1;
    $(".tab > div").removeClass("on");
    $(".tab > div:nth-of-type("+n+")").addClass("on");
    
    return false;
});

// Process 이벤트

$(".view1").click(function(){
    if (bw < 800) {
        $(".portimg a").css({"background":"url(images/gukmin_process_m.jpg) no-repeat","height":"1478px"});
    } else if (bw > 800) {
        $(".portimg a").css({"background":"url(images/gukmin_process.jpg) no-repeat","height":"4434px"});
    }
    $(".portbg").fadeIn(350);
    
    return false;
});

$(".view2").click(function(){
    if (bw < 800) {
        $(".portimg a").css({"background":"url(images/daerim_process_m.jpg) no-repeat","height":"1011px"});
    } else if (bw > 800) {
        $(".portimg a").css({"background":"url(images/daerim_process.jpg) no-repeat","height":"3034px"});
    }
    $(".portbg").fadeIn(350);
    
    return false;
});

$(".view3").click(function(){
    if (bw < 800) {
        $(".portimg a").css({"background":"url(images/bukwang_process_m.jpg) no-repeat","height":"937px"});
    } else if (bw > 800) {
        $(".portimg a").css({"background":"url(images/bukwang_process.jpg) no-repeat","height":"2812px"});
    }
    $(".portbg").fadeIn(350);
    
    return false;
});

$(".portbg").click(function(){
    $(this).fadeOut(350);
});

// Design 섹션 슬라이드 배너

var n = 0;
var ln = $(".slide li").length;
var lw = $(".slide li").width();

$(".slide").width(lw * (ln+1));
$(".slide").append($(".slide li:first-child").clone());

function slide() {
    n++;
    if (n >= ln) {
        $(".slide").animate({"left":-lw*n},500,function(){
            $(this).css({"left":0});
        });
        n = 0;
    } else {
        $(".slide").animate({"left":-lw*n},500);
    }
}

$(".next").click(function(){
    slide();
});

$(".prev").click(function(){
    n--;
    if (n < 0) {
        n = ln - 1;
        $(".slide").css({"left":-lw*(n+1)}).animate({"left":-lw*n});
    } else {
        $(".slide").animate({"left":-lw*n},500);
    }
});

// Design 클릭 이벤트

$(".dview1").click(function(){
    if (bw < 800) {
        $(".designimg a").css({"background":"url(images/hi_main_m.jpg) no-repeat","height":"677px"});
    } else if (bw > 800) {
        $(".designimg a").css({"background":"url(images/hi_main.jpg) no-repeat","height":"2031px"});
    }
    $(".designbg").fadeIn(350);
});

$(".dview2").click(function(){
    if (bw < 800) {
        $(".designimg a").css({"background":"url(images/hi2_main_m.jpg) no-repeat","height":"1179px"});
    } else if (bw > 800) {
        $(".designimg a").css({"background":"url(images/hi2_main.jpg) no-repeat","height":"3538px"});
    }
    $(".designbg").fadeIn(350);
});

$(".dview3").click(function(){
    if (bw < 800) {
        $(".designimg a").css({"background":"url(images/hi3_main_m.jpg) no-repeat","height":"673px"});
    } else if (bw > 800) {
        $(".designimg a").css({"background":"url(images/hi3_main.jpg) no-repeat","height":"2020px"});
    }
    $(".designbg").fadeIn(350);
});

$(".designbg").click(function(){
    $(this).fadeOut(350);
});



