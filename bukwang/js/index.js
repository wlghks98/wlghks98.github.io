// 헤더 햄버거 메뉴

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $(".sidemnbg").toggleClass("on");
    $(".sidemn").toggleClass("on");
    $("header").toggleClass("none");
  });
});

// 메인 비쥬얼 슬라이드

var inum = 0;
function slide() {
    inum++;
    if (inum >= 4) {inum = 0}
    $(".bg img").eq(inum).addClass("active").siblings().removeClass("active");
}
var timer = setInterval("slide()",4000);

// 헤더 mouseon

$(".gnb > li").on("mouseover focusin",function(){
    $("header").addClass("on");
    $(".hamburger .line").addClass("on");
    $(".snb li:last-child").addClass("on");
    $("header h1 a").addClass("on");
});

$("header").on("mouseleave focusout",function(){
    $("header").removeClass("on");
    $(".hamburger .line").removeClass("on");
    $(".snb li:last-child").removeClass("on");
    $("header h1 a").removeClass("on");
    $(".gnb > li > a").parent().siblings().children("ul").slideUp(300);
});

$(".gnb > li").on("mouseover focusin",function(){
    $(this).addClass("on");
});

$(".gnb > li").on("mouseleave focusout",function(){
    $(this).removeClass("on");
});

$(".gnb > li > a").on("mouseover focusin",function(){
    $(this).parent().siblings().children("ul").slideUp(300);
    $(this).next().slideDown(300);
});

// 헤더 언어선택자

$(".snb li:last-child").click(function(){
    $(this).children("ul").slideToggle(300);
});