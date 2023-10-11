/* PC 버전*/

$(".tnb > li > a").click(function(){
    $(".tnb .lan").toggleClass("on");
});

$(".gnb_inner").on("mouseover focusin",function(){
    $(this).addClass("on");
    $(".gnb > li > ul").addClass("on");
});

$(".gnb_inner").on("mouseleave focusout",function(){
    $(this).removeClass("on");
    $(".gnb > li > ul").removeClass("on");
});

// 스크롤탑 메뉴

$(".topmenu > a").click(function(){
    $("html").animate({"scrollTop":0},500)
    return false;
});


/* 모바일 버전 */

$(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $(".menu").toggleClass("on");
    $("html").toggleClass("fix");
    return false;
});

$(".menu > li > a").click(function(){
    $(".menu > li > ul").slideUp(300);
    $(this).next().stop().slideToggle(300);
    return false;
});

$(".menu > li > ul > li > a").click(function(){
    $(this).next().slideUp(300);
    $(this).next().stop().slideToggle(300);
    
    return false;
});