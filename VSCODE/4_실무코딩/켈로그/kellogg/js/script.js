$(document).ready(function () {

    $(".gnb > ul > li:first-child").mouseover(function(){
        $("#header").addClass("active");
        $("#header").css("height","600px");
        $(".sub").css("display","block");
    }).mouseout(function(){
        $("#header").removeClass("active");
        $("#header").css("height","184px");
        $(".sub").css("display","none");
    });

    $(".gnb > ul > li:last-child").mouseover(function(){
        $("#header").addClass("active");
        $("#header").css("height","600px");
        $(".sub").css("display","block");
    }).mouseout(function(){
        $("#header").removeClass("active");
        $("#header").css("height","184px");
        $(".sub").css("display","none");
    });

});
