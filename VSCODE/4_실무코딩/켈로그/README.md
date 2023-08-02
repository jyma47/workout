# 켈로그 사이트
+ https://kellogg.co.kr/Index

------

# js 작업
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
