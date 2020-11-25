//main hero swiper        
var currentSlideNumber = 0; // 시작 슬라이드 번호를 0 에서 시작
var slide =document.getElementsByClassName('Theme_warp');


function moveNext() {
    if (currentSlideNumber !== 2){
        slide[currentSlideNumber].style = " animation : fade_out_rtl 0.4s forwards";

    slide[currentSlideNumber+1].style = "animation : fade_in_rtl 0.4s forwards";


    currentSlideNumber++
    } else {
        slide[currentSlideNumber].style = " animation : fade_out_rtl 0.4s forwards"
        
        slide[0].style = "animation: fade_in_rtl 0.4s forwards"
        currentSlideNumber = 0;
    }


}



function movePrev() {
    if (currentSlideNumber !== 2){
        slide[currentSlideNumber].style = " animation : fade_out_ltr 0.4s forwards"

    slide[currentSlideNumber+1].style = "animation : fade_in_ltr 0.4s forwards"

    currentSlideNumber++
    } else {
        slide[currentSlideNumber].style = " animation : fade_out_ltr 0.4s forwards"
        slide[0].style = "animation: fade_in_ltr 0.4s forwards"
        currentSlideNumber = 0;
    }
    

}




setInterval(function() {

    moveNext()
    
    
}, 6000);
;

// 작은 원 3개 순서대로 움직이는 스크립트 
    setTimeout(redCircleOne,0)
    setTimeout(redCircleTwo, 6100);
    setTimeout(redCircleThree, 12000);

    setInterval(function(){
        setTimeout(redCircleOne,0)
    setTimeout(redCircleTwo, 6000);
    setTimeout(redCircleThree, 12000);
    }, 18000);


var redCircle = document.getElementsByClassName('swipper_red');

function redCircleOne(){

    var style = redCircle[0].style;
    style.webkitAnimationPlayState = 'running';

    What = setTimeout(function(){style.webkitAnimationPlayState = 'paused';},6000);
    
}
function redCircleTwo(){

var styleTwo = redCircle[1].style;
styleTwo.webkitAnimationPlayState = 'running';
setTimeout(function(){styleTwo.webkitAnimationPlayState = 'paused';},6000);
}
function redCircleThree(){

var styleThree = redCircle[2].style;
styleThree.webkitAnimationPlayState = 'running';
setTimeout(function(){styleThree.webkitAnimationPlayState = 'paused';},6000);
}









// DOUBLE SECTION 스크롤 이벤트 
document.addEventListener('scroll', landingScrollShow);

function landingScrollShow () {
    var landingScrollY = window.scrollY;
    var landingHeight = window.innerHeight;
    // console.log(landingScrollY); // 아래로 내려가면 계속 증가
    // console.log(landingHeight); // 화면값은 고정값
    
    // 더블섹션 포지션
    var doubleSectionPosition = document.getElementById('double_content').offsetTop;
    var doubleOffset = landingScrollY + landingHeight - doubleSectionPosition 
    // console.log(doubleSectionPosition); //섹션있는 위치
    // console.log(doubleOffset); // 0이 되면 더블섹션 시작

    // 요소 변수 선언
    

    var doubleBackground = document.querySelectorAll('.content_store_picture')
    var doubleSubTitle = document.querySelectorAll('.single_text_wrap h5')
    var doubleTitle = document.querySelectorAll('.single_title_span')
    var doubleContentText = document.querySelectorAll('.single_content_text')
    var doubleButtonWrap = document.querySelectorAll('.content_more_wrap')

    if (doubleOffset > 200) {
        doubleBackground[0].style = "animation: bg_ltr 0.6s ease forwards;";
        doubleBackground[1].style = "animation: bg_ltr 0.6s ease forwards;";
        doubleBackground[0].children[1].style = "animation: opacity 1s ease-in forwards;";
        doubleBackground[1].children[1].style = "animation: opacity 1s ease-in forwards;";
    }

    if (doubleOffset > 350) {
        for (i=0; i<doubleTitle.length-3; i++) {
        doubleTitle[i].style = "animation: matrix 1s ease-in forwards; animation-delay: "+ (0.03 * i) + "s;";}
        for (i=doubleTitle.length-3; i<doubleTitle.length; i++) {
        doubleTitle[i].style = "animation: matrix 1s ease-in forwards; animation-delay: "+ (0.03 * i) + "s;";}

        // 이 밑으론 2개뿐이라 for 돌리기 귀찮아서 그냥 순서대로 작동하게 할께요
        doubleSubTitle[0].style = "animation: opacity 1s ease-in forwards;";
        doubleSubTitle[1].style = "animation: opacity 1s ease-in forwards;";

        doubleContentText[0].style = "animation: opacity 1s ease-in forwards; animation-delay: 0.3s;";
        doubleContentText[1].style = "animation: opacity 1s ease-in forwards; animation-delay: 0.3s;";

        doubleButtonWrap[0].style = "animation: opacity 1s ease-in forwards; animation-delay: 0.5s;";
        doubleButtonWrap[1].style = "animation: opacity 1s ease-in forwards; animation-delay: 0.5s;";
    }
}

