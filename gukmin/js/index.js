
// 슬라이드 배너 구역

var tot = $(".slide li").length;
$(".tot").text(tot);

$(".slide ul").width(100 * (tot+1)+"%").append($(".slide ul li:first-child").clone());
$(".slide ul li").width(100 / (tot+1)+"%");

var iw = $(".slide ul li img").width();

var n = 0;

function auto() {
    n++;
    if (n >= tot) {
        $(".slide ul").animate({"left":-iw*n},500,function(){
            $(this).css({"left":0});
        });
        n = 0;
    } else {
        $(".slide ul").animate({"left":-iw*n},500);
    }
    $(".num").text(n+1);
}

var timer = setInterval("auto()",4000);

$(".slide > .next").click(function(){
    auto();
    return false;
});

$(".slide > .prev").click(function(){
    n--;
    if (n < 0) {
        n = tot - 1;
        $(".slide ul").css({"left":-iw*(n+1)}).animate({"left":-iw*n},500);
    } else {
        $(".slide ul").animate({"left":-iw*n},500);
    }
    $(".num").text(n+1);
    return false;
});

// 슬라이드 멈춤/재생 토글기능 

var chk = 0;

$(".pause").click(function(){
    if (chk == 0) {
        clearInterval(timer);
        $(this).addClass("play");
        chk = 1;
    } else {
        timer = setInterval("auto()",4000);
        $(this).removeClass("play");
        chk = 0;
    }
    return false;
});

// 탭메뉴 + 슬라이드

$(".tab > li").click(function(){
    $(".tab > li").removeClass("select");
    $(this).addClass("select");
    
    var n = $(this).index();
    
    $(".slide"+n).addClass("on").siblings().removeClass("on");
    
    return false;
});

$(".newsslide > .next").click(function(){
    $(".newsslide > ul.on").animate({"left":-410},500,function(){
        $(this).append($("ul.on li:first-child")).css({"left":0});
    });
    return false;
});

$(".newsslide > .prev").click(function(){
    $(".newsslide > ul.on").prepend($("ul.on li:last-child")).css({"left":-410}).animate({"left":0},500);
    return false;
});

// 팝업 슬라이드

var ptot = $(".pslide li").length;
$(".ptot").text(ptot);

$(".pslide").width(100 * (ptot+1)+"%").append($(".pslide li:first-child").clone());
$(".pslide li").width(100 / (ptot+1)+"%");

var iw1 = $(".pslide li img").width();

var n1 = 0;

function pauto() {
    n1++;
    if (n1 >= ptot) {
        $(".pslide").animate({"left":-iw1*n1},500,function(){
            $(this).css({"left":0});
        });
        n1 = 0;
    } else {
        $(".pslide").animate({"left":-iw1*n1},500);
    }
    $(".pnum").text(n1+1);
}

var ptimer = setInterval("pauto()",3000);

$(".fleft > .next").click(function(){
    pauto();
    return false;
});

$(".fleft > .prev").click(function(){
    n1--;
    if (n1 < 0) {
        n1 = ptot - 1;
        $(".pslide").css({"left":-iw1*(n1+1)}).animate({"left":-iw1*n1},500);
    } else {
        $(".pslide").animate({"left":-iw1*n1},500);
    }
    $(".pnum").text(n1+1);
    return false;
});

// 팝업 슬라이드 멈춤/재생 토글기능

var chk1 = 0;

$(".fleft > .pause1").click(function(){
    if (chk1 == 0) {
        clearInterval(ptimer);
        $(this).addClass("play1");
        chk1 = 1;
    } else {
        ptimer = setInterval("pauto()",3000);
        $(this).removeClass("play1");
        chk1 = 0;
    }
    return false;
});

// 사회관계망 서비스 탭메뉴

$(".ftab li").click(function(){
    $(".ftab li").removeClass("select");
    $(this).addClass("select");
    
    var dn = $(this).index() + 1;
    
    $(".fright > div:nth-of-type("+dn+")").addClass("on").siblings().removeClass("on");
    return false;
});

