// PC 버전 상단 슬라이드

var tot = $(".slide li").length;
$(".tot").text(tot);

$(".slide").width(100 * (tot+1)+"%").append($(".slide li:first-child").clone());
$(".slide li").width(100 / (tot+1)+"%");

var n = 0;

function auto() {
    n++;
    if (n >= tot) {
        $(".slide").animate({"left":-n*100+"%"},500,function(){
            $(this).css({"left":0});
        });
        n = 0;
    } else {
        $(".slide").animate({"left":-n*100+"%"},500);
    }
    $(".now").text(n+1);
}

var timer = setInterval("auto()",4000);

// 슬라이드 버튼 및 멈춤 / 재생

$(".button .next").click(function(){
    auto();
    return false;
});

$(".button .prev").click(function(){
    n--;
    if (n < 0) {
        n = tot - 1;
        $(".slide").css({"left":-100*(n+1)+"%"}).animate({"left":-n*100+"%"},500);
    } else {
        $(".slide").animate({"left":-n*100+"%"},500);
    }
    $(".now").text(n+1);
    return false;
});

var chk = 0;

$(".button .pause").click(function(){
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

// 공지사항 슬라이드

var ntsw = $(".ntslide li").width();

$(".notice .next").click(function(){
    if (bw > 800) {
        $(".ntslide").animate({"left":-ntsw + -40},500,function(){
            $(this).append($(".ntslide li:first-child")).css({"left":0});
    });
    return false;
    }
});

$(".notice .prev").click(function(){
    if (bw > 800) {
        $(".ntslide").prepend($(".ntslide li:last-child")).css({"left":-ntsw + -40}).animate({"left":0},500);
    return false;
    }
});

// 헤더 고정

$(window).scroll(function(){
    if (bw > 800) {
        var st = $(this).scrollTop();
        if (st > 70) {
            $("header").addClass("on");
        } else {
            $("header").removeClass("on");
        }
    }
});







// 모바일 버전

var bw = $("body").width();
$(window).resize(function(){
    bw = $("body").width();
});

$(".notice .next").click(function(){
    if (bw < 800) {
        $(".ntslide").animate({"left":-ntsw},500,function(){
            $(this).append($(".ntslide li:first-child")).css({"left":0});
    });
    return false;
    }
});

$(".notice .prev").click(function(){
    if (bw < 800) {
        $(".ntslide").prepend($(".ntslide li:last-child")).css({"left":-ntsw}).animate({"left":0},500);
    return false;
    }
});