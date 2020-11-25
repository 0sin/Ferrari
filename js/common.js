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
var clickTitle = document.getElementsByClassName('footer_nav_title');
var accOpen = document.getElementsByClassName('footer_nav_column');
var buttonChange = document.getElementsByClassName('footer_nav_title_m_icon');



for(var i=0; i<clickTitle.length; i++ ) {
  clickTitle[i].addEventListener('click', function(event){

    for(var j=0; j<accOpen.length; j++) {
      // 클릭시 전부 닫힘, 버튼 원상복구
      accOpen[j].classList.remove('acc_open');
      buttonChange[j].classList.remove('button_rotate')

      // 클릭시 오픈, 버튼 버튼 회전      
      event.target.nextElementSibling.classList.add('acc_open');
      event.target.childNodes[3].classList.add('button_rotate');
      //console.log(buttonChange[j].classList.style);
    }
  });
}


// FOOTER SOCIAL ACCORDION
var clickSocial = document.getElementsByClassName('footer_social_title');


for(var i=0; i<clickSocial.length; i++ ) {
  clickSocial[i].addEventListener('click', function(event){

    for(var j=0; j<accOpen.length; j++) {
      // 클릭시 전부 닫힘, 버튼 원상복구
      accOpen[j].classList.remove('acc_open');
      buttonChange[j].classList.remove('button_rotate')

      // 클릭시 오픈, 버튼 버튼 회전      
      event.target.nextElementSibling.classList.add('acc_open');
      event.target.childNodes[3].classList.add('button_rotate');
    }
  });
}
