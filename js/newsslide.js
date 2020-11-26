// NEWS SLIDE
// NEWS PREV NEXT BUTTON

var newsSlideNumber = 0; //슬라이드 번호를 0번에서 시작
var newsSlide = document.getElementsByClassName('news_contents_wrap');
var newsImg = document.getElementsByClassName('imgOpacity');
var newsContents = document.querySelectorAll('.news_text_wrap .news_contents');
var newsButton = document.querySelectorAll('.news_text_wrap .read_more_wrap');
var newsTitle = document.querySelectorAll('.news_title');



// 첫 페이지 실행 함수
function newsFirstPage() {
  newsImg[0].style = "animation: imgOpaFadeIn 6s ease 1.2s alternate forwards;";
  newsContents[0].style = "animation: newsTextFadeIn 6s ease 1.2s alternate forwards;";
  newsButton[0].style = "animation: newsTextFadeIn 5.2s ease 1.5s alternate forwards;";
  
  for (var i=0; i<newsTitle[0].children.length; i++) {
    newsTitle[0].children[i].style = "animation: news_matrix_delay 6.8s ease-in 1s forwards; animation-delay: "+ (0.03 * i) + "s;";
  }

  newsIndexButton();
}

newsFirstPage();





// NEXT PREV
function newsNext() {

  if(newsSlideNumber != newsSlide.length-1) {

  //현재 슬라이드가 오른쪽으로 fade out
  newsSlide[newsSlideNumber].style = "animation: news_fade_out_ltr 0.8s forwards";
  newsImg[newsSlideNumber].style = "animation: imgOpaFadeOut 0.4s ease 0s alternate ;";
  newsContents[newsSlideNumber].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
  newsButton[newsSlideNumber].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";

  for (var i=0; i<newsTitle[newsSlideNumber].children.length; i++) {
    newsTitle[newsSlideNumber].children[i].style = "animation: newsTitleFadeOut 6s ease-in 1.2s forwards;";
  }


  //다음 슬라이드가 왼쪽에서 오른쪽 화면으로 fade in
  newsSlide[newsSlideNumber+1].style = "animation: news_fade_in_ltr 1.2s forwards";
  newsImg[newsSlideNumber+1].style = "animation: imgOpaFadeIn 6s ease 1.2s alternate forwards;";
  newsContents[newsSlideNumber+1].style = "animation: newsTextFadeIn 6s ease 1.2s alternate forwards;";
  newsButton[newsSlideNumber+1].style = "animation: newsTextFadeIn 5.2s ease 1.5s alternate forwards;";

  for (var i=0; i<newsTitle[newsSlideNumber+1].children.length; i++) {
    newsTitle[newsSlideNumber+1].children[i].style = "animation: news_matrix_delay 6s ease-in 1.2s forwards; animation-delay: "+ (0.07 * i) + "s;";
  }



  newsSlideNumber++;

  newsIndexButton();
  newsSlideRestart();

  }


  else { //마지막 슬라이드 일때

   //현재 슬라이드가 오른쪽으로 fade out
  newsSlide[newsSlideNumber].style = "animation: news_fade_out_ltr 0.8s forwards";
  newsImg[newsSlideNumber].style = "animation: imgOpaFadeOut 0.4s ease 0s alternate forwards;";
  newsContents[newsSlideNumber].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
  newsButton[newsSlideNumber].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";

  for (var i=0; i<newsTitle[newsSlideNumber].children.length; i++) {
    newsTitle[newsSlideNumber].children[i].style = "animation: newsTitleFadeOut 6s ease-in 1.2s forwards;";
  }


  //0번 슬라이드를 화면으로 fade in
  newsSlide[0].style = "animation: news_fade_in_ltr 1.2s forwards;";
  newsImg[0].style = "animation: imgOpaFadeIn 6s ease 1.2s alternate forwards;";
  newsContents[0].style = "animation: newsTextFadeIn 6s ease 1.2s alternate forwards;";
  newsButton[0].style = "animation: newsTextFadeIn 5.2s ease 1.5s alternate forwards;";

  for (var i=0; i<newsTitle[0].children.length; i++) {
    newsTitle[0].children[i].style = "animation: news_matrix_delay 6s ease-in 1.2s forwards; animation-delay: "+ (0.07 * i) + "s;";
  }

  
  newsSlideNumber=0;

  newsIndexButton();
  newsSlideRestart();
  }

}




function newsPrev() {

  if(newsSlideNumber !=0) {


    //현재 슬라이드가 오른쪽으로 fade out
    newsSlide[newsSlideNumber].style = "animation: news_fade_out_rtl 0.8s forwards";
    newsImg[newsSlideNumber].style = "animation: imgOpaFadeOut 0.4s ease 0s alternate forwards;";
    newsContents[newsSlideNumber].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
    newsButton[newsSlideNumber].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";

    for (var i=0; i<newsTitle[newsSlideNumber].children.length; i++) {
      newsTitle[newsSlideNumber].children[i].style = "animation: newsTitleFadeOut 6s ease-in 1.2s forwards;";
    }


    //슬라이드 왼쪽에서 오른쪽으로 fade in
    newsSlide[newsSlideNumber-1].style = "animation: news_fade_in_rtl 1.2s forwards";
    newsImg[newsSlideNumber-1].style = "animation: imgOpaFadeIn 6s ease 1.2s alternate forwards;";
    newsContents[newsSlideNumber-1].style = "animation: newsTextFadeIn 6s ease 1.2s alternate forwards;";
    newsButton[newsSlideNumber-1].style = "animation: newsTextFadeIn 5.2s ease 1.5s alternate forwards;";

    for (var i=0; i<newsTitle[newsSlideNumber-1].children.length; i++) {
      newsTitle[newsSlideNumber-1].children[i].style = "animation: news_matrix_delay 6s ease-in 1.2s forwards; animation-delay: "+ (0.07 * i) + "s;";
    }
    
    newsSlideNumber--;

    newsIndexButton();
    newsSlideRestart();
  }


  else { //첫화면 일때


    //현재 슬라이드 왼쪽으로 fade out
    newsSlide[0].style = "animation: news_fade_out_rtl 0.8s forwards";
    newsImg[0].style = "animation: imgOpaFadeOut 0.4s ease 0s alternate ;";
    newsContents[0].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
    newsButton[0].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";

    for (var i=0; i<newsTitle[0].children.length; i++) {
      newsTitle[0].children[i].style = "animation: newsTitleFadeOut 6s ease-in 1.2s forwards;";
    }

    //새로운 슬라이드 오른쪽에서 왼쪽으로 fade in
    newsSlide[newsSlide.length-1].style = "animation: news_fade_in_rtl 1.2s forwards";
    newsImg[newsSlide.length-1].style = "animation: imgOpaFadeIn 6s ease 1.2s alternate forwards;";
    newsContents[newsSlide.length-1].style = "animation: newsTextFadeIn 6s ease 1.2s alternate forwards;";
    newsButton[newsSlide.length-1].style = "animation: newsTextFadeIn 5.2s ease 1.5s alternate forwards;";

    for (var i=0; i<newsTitle[newsSlide.length-1].children.length; i++) {
      newsTitle[newsSlide.length-1].children[i].style = "animation: news_matrix_delay 6s ease-in 1.2s forwards; animation-delay: "+ (0.07 * i) + "s;";
    }

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
      newsSlide[newsSlideNumber + i].style = "animation: news_fade_out_ltr 0.8s forwards;";
      newsImg[newsSlideNumber + i].style = "animation: imgOpaFadeOut newsSlideNumber + i.4s ease 0s alternate ;";
      newsContents[newsSlideNumber + i].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
      newsButton[newsSlideNumber + i].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";

      for (var x=0; x<newsTitle[newsSlideNumber + i].children.length; x++) {
        newsTitle[newsSlideNumber + i].children[x].style = "animation: newsTitleFadeOut 6s ease-in 1.2s forwards;";
      }

      //FADE IN
      newsSlide[newsIndexNumber].style = "animation: news_fade_in_ltr 1.2s forwards";
      newsImg[newsIndexNumber].style = "animation: imgOpaFadeIn 6s ease 1.2s alternate forwards;";
      newsContents[newsIndexNumber].style = "animation: newsTextFadeIn 6s ease 1.2s alternate forwards;";
      newsButton[newsIndexNumber].style = "animation: newsTextFadeIn 5.2s ease 1.5s alternate forwards;";

      for (var x=0; x<newsTitle[newsIndexNumber].children.length; x++) {
        newsTitle[newsIndexNumber].children[x].style = "animation: news_matrix_delay 6s ease-in 1.2s forwards; animation-delay: "+ (0.07 * x) + "s;";
      }

      newsSlideNumber = newsIndexNumber;

      newsIndexButton();
      newsSlideRestart();
    }
  }

  else if (newsDirection < 0) { //음수면 오른쪽으로 전진


      //FADE OUT
      newsSlide[newsSlideNumber].style = "animation: news_fade_out_rtl 0.8s forwards;";
      newsImg[newsSlideNumber].style = "animation: imgOpaFadeOut newsSlideNumber + i.4s ease 0s alternate ;";
      newsContents[newsSlideNumber].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";
      newsButton[newsSlideNumber].style = "animation: newsTextFadeOut 6s ease 1.2s alternate forwards;";

      for (var i=0; i<newsTitle[newsSlideNumber].children.length; i++) {
        newsTitle[newsSlideNumber].children[i].style = "animation: newsTitleFadeOut 6s ease-in 1.2s forwards;";
      }

      
      //FADE IN
      newsSlide[newsIndexNumber].style = "animation: news_fade_in_rtl 1.2s forwards";
      newsImg[newsIndexNumber].style = "animation: imgOpaFadeIn 6s ease 1.2s alternate forwards;";
      newsContents[newsIndexNumber].style = "animation: newsTextFadeIn 6s ease 1.2s alternate forwards;";
      newsButton[newsIndexNumber].style = "animation: newsTextFadeIn 5.2s ease 1.5s alternate forwards;";
      
      for (var x=0; x<newsTitle[newsIndexNumber].children.length; x++) {
        newsTitle[newsIndexNumber].children[x].style = "animation: news_matrix_delay 6s ease-in 1.2s forwards; animation-delay: "+ (0.07 * x) + "s;";
      }

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
  document.querySelectorAll('.news_index circle')[newsSlideNumber].style = "stroke: rgb(218, 41, 28); stroke-width: 1px; stroke-dasharray: 70; stroke-dashoffset: 70; animation: wheelbuttondash 6.5s linear forwards;"
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










