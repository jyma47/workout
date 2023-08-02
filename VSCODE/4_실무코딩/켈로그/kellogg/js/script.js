$(document).ready(function () {
    // alert('확인');

    /*
    
    원래는 header에 active 라는 클래스 X
    화살표는 아래 모양
    서브메뉴 안보임

    메인메뉴에 hover하면 서브메뉴가 보이고
    header에 active 클래스 추가
    서브메뉴가 보임
    화살표는 위 모양
    
    */

    $(".gnb > ul > li:first-child").mouseover(function(){
        $("#header").addClass("active");
        $("#header").css("height","600px")
        .css("transition","all 2s");
    }).mouseout(function(){
        $("#header").removeClass("active");
        $("#header").css("height","184px")
        .css("transition","all 0.5s");
    });

    $(".gnb > ul > li:last-child").mouseover(function(){
        $("#header").addClass("active");
        $("#header").css("height","600px")
        .css("transition","all 2s");
    }).mouseout(function(){
        $("#header").removeClass("active");
        $("#header").css("height","184px")
        .css("transition","all 0.5s");
    });

});
