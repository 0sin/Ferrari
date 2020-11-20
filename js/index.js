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