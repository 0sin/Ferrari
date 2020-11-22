// NEWS SLIDE
// NEWS PREV NEXT BUTTON

var newsSlideNumber = 0; //슬라이드 번호를 0번에서 시작
var newsSlide = document.getElementsByClassName('news_contents_wrap');
var newsImg = document.getElementsByClassName('imgOpacity');
var newsContents = document.querySelectorAll('.news_text_wrap .news_contents');
var newsButton = document.querySelectorAll('.news_text_wrap .read_more_wrap');

var newsTitle = document.querySelectorAll('.news_title');
// console.log(newsTitle[0].querySelectorAll('.news_title_span'));

function firstPage() {
  newsImg[0].style = "animation: imgOpaFadeIn 6s ease 1.2s alternate forwards;";
  newsContents[0].style = "animation: newsTextFadeIn 6s ease 1.2s alternate forwards;";
  newsButton[0].style = "animation: newsTextFadeIn 5.2s ease 1.5s alternate forwards;";
  newsTitle[0].classList.add('matrix_style');
  newsIndexButton();
}

firstPage();

function newsNext() {

  if(newsSlideNumber != newsSlide.length-1) {

  //현재 슬라이드가 오른쪽으로 fade out
  newsSlide[newsSlideNumber].style = "animation: fade_out_ltr 0.8s forwards";
  newsImg[newsSlideNumber].style = "animation: imgOpaFadeOut 0.4s ease 0s alternate ;";
  newsContents[newsSlideNumber].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
  newsButton[newsSlideNumber].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
  newsTitle[newsSlideNumber].classList.remove('matrix_style');


  //다음 슬라이드가 왼쪽에서 오른쪽 화면으로 fade in
  newsSlide[newsSlideNumber+1].style = "animation: fade_in_ltr 1.2s forwards";
  newsImg[newsSlideNumber+1].style = "animation: imgOpaFadeIn 6s ease 1.2s alternate forwards;";
  newsContents[newsSlideNumber+1].style = "animation: newsTextFadeIn 6s ease 1.2s alternate forwards;";
  newsButton[newsSlideNumber+1].style = "animation: newsTextFadeIn 5.2s ease 1.5s alternate forwards;";

  newsTitle[newsSlideNumber+1].classList.add('matrix_style');
  // for (i=0; i<8; i++) {
  // newsTitle[newsSlideNumber+1].querySelectorAll('.news_title_span')[i].style="animation: matrix_delay 6s ease 1.2s alternate forwards;"
  // }


  newsSlideNumber++;

  newsIndexButton();
  newsSlideRestart();

  }

  else { //마지막 슬라이드 일때


   //현재 슬라이드를 왼쪽으로 fade out
  newsSlide[newsSlideNumber].style = "animation: fade_out_ltr 0.8s forwards";
  newsImg[newsSlideNumber].style = "animation: imgOpaFadeOut 0.4s ease 0s alternate forwards;";
  newsContents[newsSlideNumber].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
  newsButton[newsSlideNumber].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
  newsTitle[newsSlideNumber].classList.remove('matrix_style');


   //0번 슬라이드를 화면으로 fade in
  newsSlide[0].style = "animation: fade_in_ltr 1.2s forwards;";
  newsImg[0].style = "animation: imgOpaFadeIn 6s ease 1.2s alternate forwards;";
  newsContents[0].style = "animation: newsTextFadeIn 6s ease 1.2s alternate forwards;";
  newsButton[0].style = "animation: newsTextFadeIn 5.2s ease 1.5s alternate forwards;";
  newsTitle[0].classList.add('matrix_style');

  
  newsSlideNumber=0;

  newsIndexButton();
  newsSlideRestart();
  }

}



function newsPrev() {

  if(newsSlideNumber !=0) {


    //현재 슬라이드 오른쪽으로 fade out
    newsSlide[newsSlideNumber].style = "animation: fade_out_ltr 0.8s forwards";
    newsImg[newsSlideNumber].style = "animation: imgOpaFadeOut 0.4s ease 0s alternate forwards;";
    newsContents[newsSlideNumber].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
    newsButton[newsSlideNumber].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
    newsTitle[newsSlideNumber].classList.remove('matrix_style');


    //현재 슬라이드 왼쪽에서 오른쪽으로 fade in
    newsSlide[newsSlideNumber-1].style = "animation: fade_in_ltr 1.2s forwards";
    newsImg[newsSlideNumber-1].style = "animation: imgOpaFadeIn 6s ease 1.2s alternate forwards;";
    newsContents[newsSlideNumber-1].style = "animation: newsTextFadeIn 6s ease 1.2s alternate forwards;";
    newsButton[newsSlideNumber-1].style = "animation: newsTextFadeIn 5.2s ease 1.5s alternate forwards;";
    newsTitle[newsSlideNumber-1].classList.add('matrix_style');

    
    newsSlideNumber--;

    newsIndexButton();
    newsSlideRestart();
  }


  else { //첫화면 일때


    //현재 슬라이드 오른쪽으로 fade out
    newsSlide[0].style = "animation: fade_out_ltr 0.8s forwards";
    newsImg[0].style = "animation: imgOpaFadeOut 0.4s ease 0s alternate ;";
    newsContents[0].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
    newsButton[0].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
    newsTitle[0].classList.remove('matrix_style');


    //새로운 슬라이드 왼쪽에서 오른쪽으로 fade in
    newsSlide[newsSlide.length-1].style = "animation: fade_in_ltr 1.2s forwards";
    newsImg[newsSlide.length-1].style = "animation: imgOpaFadeIn 6s ease 1.2s alternate forwards;";
    newsContents[newsSlide.length-1].style = "animation: newsTextFadeIn 6s ease 1.2s alternate forwards;";
    newsButton[newsSlide.length-1].style = "animation: newsTextFadeIn 5.2s ease 1.5s alternate forwards;";
    newsTitle[newsSlide.length-1].classList.add('matrix_style');


    newsSlideNumber = newsSlide.length-1;

    newsIndexButton();
    newsSlideRestart();
  }
}




// NEWS INDEX SLIDE
function newsIndexChange(newsIndexNumber) {

  //방향 정하기
  var newsDirection = newsIndexNumber - newsSlideNumber;
  var newsDistance = Math.abs(newsDirection);

  if (newsDirection > 0) { //양수면 왼쪽으로 전진
    for(i=0; i<newsDistance; i++) {


      //FADE OUT
      newsSlide[newsSlideNumber + i].style = "animation: fade_out_ltr 0.8s forwards;";
      newsImg[newsSlideNumber + i].style = "animation: imgOpaFadeOut newsSlideNumber + i.4s ease 0s alternate ;";
      newsContents[newsSlideNumber + i].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
      newsButton[newsSlideNumber + i].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
      newsTitle[newsSlideNumber + i].classList.remove('matrix_style');


      //FADE IN
      newsSlide[newsIndexNumber].style = "animation: fade_in_ltr 1.2s forwards";
      newsImg[newsIndexNumber].style = "animation: imgOpaFadeIn 6s ease 1.2s alternate forwards;";
      newsContents[newsIndexNumber].style = "animation: newsTextFadeIn 6s ease 1.2s alternate forwards;";
      newsButton[newsIndexNumber].style = "animation: newsTextFadeIn 5.2s ease 1.5s alternate forwards;";
      newsTitle[newsIndexNumber].classList.add('matrix_style');


      newsSlideNumber = newsIndexNumber;
      newsIndexButton();
      newsSlideRestart();
    }
  }

  else if (newsDirection < 0) { //음수면 오른쪽으로 전진


      //FADE OUT
      newsSlide[newsSlideNumber].style = "animation: fade_out_ltr 0.8s forwards;";
      newsImg[newsSlideNumber].style = "animation: imgOpaFadeOut newsSlideNumber + i.4s ease 0s alternate ;";
      newsContents[newsSlideNumber].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
      newsButton[newsSlideNumber].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
      newsTitle[newsSlideNumber].classList.remove('matrix_style');


      //FADE IN
      newsSlide[newsIndexNumber].style = "animation: fade_in_ltr 1.2s forwards";
      newsImg[newsIndexNumber].style = "animation: imgOpaFadeIn 6s ease 1.2s alternate forwards;";
      newsContents[newsIndexNumber].style = "animation: newsTextFadeIn 6s ease 1.2s alternate forwards;";
      newsButton[newsIndexNumber].style = "animation: newsTextFadeIn 5.2s ease 1.5s alternate forwards;";
      newsTitle[newsIndexNumber].classList.add('matrix_style');
      

      newsSlideNumber = newsIndexNumber;
      newsIndexButton();
      newsSlideRestart();
   }
  
}

// NEWS INDEX BUTTON STYLE

function newsIndexButton(buttonNumber) {
  for (i=0; i<newsSlide.length; i++) {
    document.querySelectorAll('.news_index circle')[i].style = "stroke-width: 0px;"
  }
  document.querySelectorAll('.news_index circle')[newsSlideNumber].style = "stroke: rgb(218, 41, 28); stroke-width: 1px; stroke-dasharray: 70; stroke-dashoffset: 70; animation: dash 6.5s linear forwards;"
}



// AUTOPLAY

var newsLoopState = 1;
var newsSlideLoop = setInterval(newsNext, 7000);

function newsSlideRestart() {
  if (newsLoopState == 1) {
    clearInterval(newsSlideLoop);
    newsSlideLoop = setInterval(newsNext, 7000);
  }
}

// function stopPlaySlide() {
//   if (newsLoopState == 1) {
//     clearInterval(newsSlideLoop);
//     //document.getElementById('playstop_bt').src="../img/play.svg";
//     newsLoopState = 0;
//   } 
//   else {
//     newsSlideLoop = setInterval(newsNext, 7000);
//     //document.getElementById('playstop_bt').src="img/stop.svg";
//     newsLoopState = 1;
//   }
// }



