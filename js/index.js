//main hero swiper        
var currentSlideNumber = 0; // 시작 슬라이드 번호를 0 에서 시작
var slide =document.getElementsByClassName('Theme_warp');

var mainsubscribe = document.getElementsByClassName('main_subscribe');
var mainTitle = document.getElementsByClassName('main_banner_title');
var mainSubTitle = document.getElementsByClassName('main_sub_conts');

// 첫 페이지 실행 함수
function mainFirstPage() {
    mainsubscribe[0].style="animation: opacity 1s ease forwards; animation-delay: 1s";
    mainSubTitle[0].style="animation: opacity 1s ease forwards; animation-delay: 1s";
    for ( i =0; i<mainTitle[0].children.length; i++){
        mainTitle[0].children[i].style="animation: matrix 1s ease-in forwards; animation-delay:"+(0.03* i)+"s;";
    }

    document.querySelectorAll('.main_index circle')[0].style = "stroke-width: 0px;"
    document.querySelectorAll('.main_index circle')[0].style = "stroke: rgb(218, 41, 28); stroke-width: 1px; stroke-dasharray: 70; stroke-dashoffset: 70; animation: wheelbuttondash 6.5s linear forwards;"
    
    mainIndexButton();


}
mainFirstPage();
function moveNext() {
    if (currentSlideNumber !== 2){
        slide[currentSlideNumber].style = " animation : fade_out_rtl 0.4s forwards";

        mainsubscribe[currentSlideNumber].style="animation: opacity_revers 1s ease forwards; animation-delay: 1s";
        mainSubTitle[currentSlideNumber].style="animation: opacity_revers 1s ease forwards; animation-delay: 1s";
        for ( i =0; i<mainTitle[currentSlideNumber].children.length; i++){
            mainTitle[currentSlideNumber].children[i].style="animation: matrix_out 1s ease-in forwards; animation-delay:"+(0.03* i)+"s;";
        }


    slide[currentSlideNumber+1].style = "animation : fade_in_rtl 0.4s forwards";
    mainsubscribe[currentSlideNumber+1].style="animation: opacity 1s ease forwards; animation-delay: 1s";
        mainSubTitle[currentSlideNumber+1].style="animation: opacity 1s ease forwards; animation-delay: 1s";

    for ( i =0; i<mainTitle[currentSlideNumber+1].children.length; i++){
        mainTitle[currentSlideNumber+1].children[i].style="animation: matrix 1s ease-in forwards; animation-delay:"+(0.03* i)+"s;";
    }

    currentSlideNumber++
    mainIndexButton();
    mainSlideRestart();
    } else {
        slide[currentSlideNumber].style = " animation : fade_out_rtl 0.4s forwards";
        
        slide[0].style = "animation: fade_in_rtl 0.4s forwards";
        mainsubscribe[currentSlideNumber].style="animation: opacity_revers 1s ease forwards; animation-delay: 1s";
        mainSubTitle[currentSlideNumber].style="animation: opacity_revers 1s ease forwards; animation-delay: 1s";
        for ( i =0; i<mainTitle[currentSlideNumber].children.length; i++){
            mainTitle[currentSlideNumber].children[i].style="animation: matrix_out 1s ease-in forwards; animation-delay:"+(0.03* i)+"s;";
        }
        mainsubscribe[0].style="animation: opacity 1s ease forwards; animation-delay: 1s";
        mainSubTitle[0].style="animation: opacity 1s ease forwards; animation-delay: 1s";
        for ( i =0; i<mainTitle[0].children.length; i++){
            mainTitle[0].children[i].style="animation: matrix 1s ease-in forwards; animation-delay:"+(0.03* i)+"s;";
        }
        currentSlideNumber=0;
        mainIndexButton();
        mainSlideRestart();
    }
    


}


// NEWS INDEX SLIDE
function mainIndexChange(mainIndexNumber) {

    //방향 정하기
    var mainDirection =mainIndexNumber-currentSlideNumber ;
    var mainDistance = Math.abs(mainDirection);


  
    if (mainDirection > 0) { //양수면 왼쪽으로 전진
        for(i=0; i<mainTitle[currentSlideNumber].children.length; i++){
            mainTitle[currentSlideNumber].children[i].style="animation: matrix_out 1s ease-in forwards;";   
        }
       
      for(i=0; i<mainDistance; i++) {
  
  
        //FADE OUT
        //fade out 애니를 넣어야 fade in 됨
        slide[currentSlideNumber + i].style = "animation: fade_out_ltr 0.4s forwards;";
        mainsubscribe[currentSlideNumber + i].style="animation: opacity_revers 1s ease forwards; animation-delay: 1s";
        mainSubTitle[currentSlideNumber + i].style="animation: opacity_revers 1s ease forwards; animation-delay: 1s";

      

        // mainsubscribe[currentSlideNumber+i].style="animation: opacity_delay 6s ease infinite;"

  
  
        //FADE IN
        slide[mainIndexNumber].style = "animation: fade_in_ltr 0.4s forwards";
        mainsubscribe[mainIndexNumber].style="animation: opacity 1s ease forwards; animation-delay: 1s";
        mainSubTitle[mainIndexNumber].style="animation: opacity 1s ease forwards; animation-delay: 1s";
        for ( i =0; i<mainTitle[mainIndexNumber].children.length; i++){
            
            mainTitle[mainIndexNumber].children[i].style="animation: matrix 1s ease-in forwards; animation-delay:"+(0.03* i)+"s;";
            // mainTitle[currentSlideNumber + i].children[i].style="animation: matrix_out 1s ease-in forwards;animation-delay:"+(0.03* i)+"s;";
        }

  
  
       currentSlideNumber = mainIndexNumber ;
        mainIndexButton();
        mainSlideRestart();
      }
    }
  
    else if (mainDirection < 0) { //음수면 오른쪽으로 전진
  
        for(i=0; i<mainTitle[currentSlideNumber].children.length; i++){
            mainTitle[currentSlideNumber].children[i].style="animation: matrix_out 1s ease-in forwards;";   
        }
        //FADE OUT
        slide[currentSlideNumber].style = "animation: fade_out_rtl 0.4s forwards;";
        mainsubscribe[currentSlideNumber].style="animation: opacity_revers 1s ease forwards; animation-delay: 1s";
        mainSubTitle[currentSlideNumber].style="animation: opacity_revers 1s ease forwards; animation-delay: 1s";
        // mainsubscribe[currentSlideNumber+i].style="animation: opacity_delay 6s ease infinite;"

  
  
        //FADE IN
        slide[mainIndexNumber].style = "animation: fade_in_rtl 0.4s forwards";
        mainsubscribe[mainIndexNumber].style="animation: opacity 1s ease forwards; animation-delay: 1s";
        mainSubTitle[mainIndexNumber].style="animation: opacity 1s ease forwards; animation-delay: 1s";
        for ( i =0; i<mainTitle[mainIndexNumber].children.length; i++){
            mainTitle[mainIndexNumber].children[i].style="animation: matrix 1s ease-in forwards; animation-delay:"+(0.03* i)+"s;";
        }
  
  
        currentSlideNumber = mainIndexNumber ;
        mainIndexButton();
        mainSlideRestart();
     }
    
  }
  
  
  // NEWS INDEX BUTTON STYLE
  
  function mainIndexButton(buttonNumber) {
    for (i=0; i<slide.length; i++) {
      document.querySelectorAll('.main_index circle')[i].style = "stroke-width: 0px;"
    }
    document.querySelectorAll('.main_index circle')[currentSlideNumber].style = "stroke: rgb(218, 41, 28); stroke-width: 1px; stroke-dasharray: 70; stroke-dashoffset: 70; animation: wheelbuttondash 6.5s linear forwards;"
  }
  
  
  
  // AUTOPLAY
  
  var mainLoopState = 1;
  var mainSlideLoop = setInterval(moveNext, 7000);
  
  function mainSlideRestart() {
    if (mainLoopState == 1) {
      clearInterval(mainSlideLoop);
      mainSlideLoop = setInterval(moveNext, 7000);
    }
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

