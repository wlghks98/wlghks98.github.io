// 사이드 네비 탭메뉴

$(".sidemenu nav > ul > li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    return false;
});

$(".sidemenu nav > ul > li > ul > li").click(function(){
    $(this).addClass("select").siblings().removeClass("select");
    return false;
});