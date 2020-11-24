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






















// 스크롤 이벤트 작업 예정




