// HEADER 

// var prewScrollPos = 0;
// var currentScrollPos = 0;
// window.onscroll = function(){


//     prewScrollPos = currentScrollPos;
//     currentScrollPos = window.pageYOffset;

//     scrollMove = currentScrollPos - prewScrollPos;

//     console.log(scrollMove);


//     if(scrollMove > 0) {
//         // console.log("아랫방향");


//         if (window.pageYOffset > 1){
//             document.getElementById('header').style=" top:-72px; transition: 0.4s;";
            
//         }


       
//     }
    
//     else {
//         // console.log("윗방향");
//          document.getElementById('header').style="top:0px; transition: 0.4s;";
//          document.getElementById('header_wrap').style="  height: calc(100% + 20px); background-color: rgba(0,0,0,1);"

 
//     }
//          if(scrollMove > 0) {
//         // console.log("아랫방향");


//         if (window.pageYOffset > 1){
//             document.getElementById('header2').style=" top:-72px; transition: 0.4s;";
            
//         }


       
//     }
// } 





// 영신 헤더 수정
document.addEventListener('scroll', headerShow);


// 헤더 변수 선언
var prewScrollPos = 0;
var currentScrollPos = 0;
var header = document.getElementById('header');
var headerBackground = document.getElementById('header_wrap');


// 스크롤 반응 헤더 함수
function headerShow() {

  // 스크롤 방향 도출
  prewScrollPos = currentScrollPos;
  currentScrollPos = window.pageYOffset;
  var scrollMove = currentScrollPos - prewScrollPos;
  // console.log(scrollMove);

  // 현재 스크롤값 도출
  var headerScrollY = window.scrollY;
  // console.log(headerScrollY);


  if(scrollMove > 0 && headerScrollY > 20) { 
    //스크롤이 아래로 진행, 현재 스크롤 값이 원위치가 아니면 헤더 사라짐 
    // console.log("아랫방향");
    header.style="top:-72px; transition: 0.4s;";
  }

  else if (scrollMove < 0 && headerScrollY > 20) { 
    //스크롤이 위로 진행, 현재 스크롤 값이 원위치가 아니면 검정색 헤더
    // console.log("윗방향");
    header.style="top:0px; transition: 0.4s;";
    headerBackground.style="height: calc(100% + 20px) ;background-color: rgb(24, 24, 24);"
  }

  else if (headerScrollY <= 20) {
    //현재 스크롤값이 원위치이면 기존 투명한 헤더
    // console.log("원위치")
    header.style="top:0px;";
    headerBackground.style="height: calc(100% + 20px); background-color: none;"
  }
}





















// FOOTER ACCORDION
var footerNavList = document.getElementsByClassName('footer_nav_title');
var footerNavColumn = document.getElementsByClassName('footer_nav_column');
var navButtonChange = document.getElementsByClassName('footer_nav_title_m_icon');

var openState = [0, 0, 0, 0, 0]; //닫힘 상태 = 0


function footerAccOpen(clickNumber) {
  
  if (openState[clickNumber] == 0) { //닫혔으면,

    for (i=0; i<footerNavList.length; i++) {
      //클릭시 전부 닫힘
      // footerNavColumn[i].style = "max-height: 0px;"
      // 위처럼 스타일 값으로 주게 되면 사이즈 다시 원래로 돌아왔을때 푸터가 깨지는 현상이 나타나서 아래처럼 css클래스 넣었다 뺐다로 해야해요...ㅜㅜ

      footerNavColumn[i].classList.add('acc_close');
      navButtonChange[i].style = "transform: rotate(0deg);";
      
      openState[i] = 0; 
    }
    
    //클릭한 애만 열림
    footerNavColumn[clickNumber].classList.remove('acc_close');
    navButtonChange[clickNumber].style = "transform: rotate(45deg);";
    
    openState[clickNumber] = 1; //열림 표시 
  }
  
  else { //열렸으면
    footerNavColumn[clickNumber].classList.add('acc_close');
    navButtonChange[clickNumber].style = "transform: rotate(0deg);";

    openState[clickNumber] = 0; //닫힘 효시
  }

}



// FOOTER SOCIAL ACCORDION
var footerSocialList = document.getElementsByClassName('footer_social_title');
var footerSocialColumn = document.getElementsByClassName('footer_social_column');
var socialButtonChange = document.getElementsByClassName('footer_social_title_m_icon');

var socialOpenState = [0, 0, 0, 0, 0]; //닫힘 상태 = 0

function footerSocialOpen(clickNumber) {
  
  if (socialOpenState[clickNumber] == 0) { //닫혔으면,

    for (i=0; i<footerSocialList.length; i++) {
      //클릭시 전부 닫힘
      footerSocialColumn[i].classList.add('acc_close');
      socialButtonChange[i].style = "transform: rotate(0deg);";

      socialOpenState[i] = 0; 
    }
    
    //클릭한 애만 열림
    footerSocialColumn[clickNumber].classList.remove('acc_close');
    socialButtonChange[clickNumber].style = "transform: rotate(45deg);";
    
    socialOpenState[clickNumber] = 1; //열림 표시 
  }
  
  else { //열렸으면
    footerSocialColumn[clickNumber].classList.add('acc_close');
    socialButtonChange[clickNumber].style = "transform: rotate(0deg);";

    socialOpenState[clickNumber] = 0; //닫힘 효시
  }

}



// 반응형으로 되었을때 모든 아코디언 닫힘
function addAccClose() {
  for (i=0; i<footerNavList.length; i++) {
    footerNavColumn[i].classList.add('acc_close');
  }
  for (i=0; i<footerSocialList.length; i++) {
    footerSocialColumn[i].classList.add('acc_close');
  }
}

addAccClose();
