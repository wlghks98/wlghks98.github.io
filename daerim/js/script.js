
// PC 헤더부분

$(".gnb li").on("mouseover",function(){
    var gn = $(this).index() + 1;
    $(".box"+gn).addClass("on").siblings().removeClass("on");
    var gh = $(".box"+gn).children("ul").height()+ 80;
    $(".gnbafter").css({"height":gh});
    $(".black").addClass("on");
});

$(".gnbafter").on("mouseleave",function(){
    $(this).css({"height":0});
    $(".black").removeClass("on");
});









// 모바일 헤더

$(".htop > a").click(function(){
    $(".m-menu").animate({"left":0},300);
    $("html").addClass("fix");
});

$(".close").click(function(){
    $(".m-menu").animate({"left":-999},300);
    $("html").removeClass("fix");
});

$(".mgnb li > a").click(function(){
   $(this).toggleClass("select").parent().siblings().children("a").removeClass("select");
    $(".mgnb li > ul").slideUp(300);
    $(this).next().stop().slideToggle(300);
});