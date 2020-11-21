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



























// 1. PREV NEXT SLIDE

var currentSlideNumber = 0; //슬라이드 번호를 0번에서 시작
var newsSlide = document.getElementsByClassName('news_contents_wrap')

function newsNext() {

  if(currentSlideNumber != newsSlide.length-1) {

  //현재 슬라이드가 오른쪽으로 fade out
  newsSlide[currentSlideNumber].style = "animation: fade_out_ltr 0.4s forwards";

  //다음 슬라이드가 왼쪽에서 오른쪽 화면으로 fade in
  newsSlide[currentSlideNumber+1].style = "animation: fade_in_ltr 0.4s forwards";

  currentSlideNumber++;
  }

  else { //마지막 슬라이드 일때
    //현재 슬라이드를 왼쪽으로 fade out
  newsSlide[currentSlideNumber].style = "animation: fade_out_ltr 0.4s forwards";
    //0번 슬라이드를 화면으로 fade in
  newsSlide[0].style = "animation: fade_in_ltr 0.4s forwards";
  
  currentSlideNumber=0;
  }

}

function newsPrev() {

  if(currentSlideNumber !=0) {
    //현재 슬라이드 오른쪽으로 fade out
    newsSlide[currentSlideNumber].style = "animation: fade_out_ltr 0.4s forwards";
    //현재 슬라이드 왼쪽에서 오른쪽으로 fade in
    newsSlide[currentSlideNumber-1].style = "animation: fade_in_ltr 0.4s forwards";
    currentSlideNumber--;
  }


  else {//현재 슬라이드 오른쪽으로 fade out
    newsSlide[0].style = "animation: fade_out_ltr 0.4s forwards";
    newsSlide[newsSlide.length-1].style = "animation: fade_in_ltr 0.4s forwards";
    currentSlideNumber = newsSlide.length-1;
  }
}


function newsImgOpacity() {
  document.getElementsByClassName('imgOpacity').style ="animation: imgOpa 5s";
}