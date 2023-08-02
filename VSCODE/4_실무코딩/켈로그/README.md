# 켈로그 사이트
+ https://kellogg.co.kr/Index

------

# js 추가
## 0. 기초작업
- 화살표 추가
- html에 서브메뉴 ul과 li 추가
- css로 서브메뉴 안보이게 작업

## 1. 원래
- header에 클래스 없음 header에 removeClass "active"
- gnb height:80px, overflow:hidden 적용 (서브메뉴 ul( + ul 자식의 li들)은 안보이는 상태)
- 서브메뉴 ul에 display:block; transition:all 2s ease 0.1s; transform:none;
- 서브메뉴의 화살표

메인메뉴 a::after{
    content: '';
    position: absolute;
    right: -15px;
    bottom: 45%;
    width: 8px;
    height: 8px;
    border-top: 2px solid #fff;
    border-left: 2px solid #fff;
    transform: rotate(-135deg);
}

## 2. hover
- 메인 메뉴의 li > a에 hover를 하면 header에 addClass "active"
- gnb height:auto, overflow:visible 적용
- 서브메뉴 ul 보여지는데 display:block; transition:all 2s ease 0.1s; transform:none; 적용

메인메뉴 a::after{
    content: '';
    position: absolute;
    right: -15px;
    top:50%;
    width: 8px;
    height: 8px;
    margin-top:-3px;
    border-top: 2px solid #fff;
    border-left: 2px solid #fff;
    transform: rotate(45deg);
}

-----

## top으로 이동 버튼
jQuery를 이용하여 버튼을 보이게 / 안보이게

$("html, body").scrollTop(0);
$("html, body").stop().animate({"scrollTop":0}, 1500, "swing");
