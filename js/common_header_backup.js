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
document.addEventListener('scroll', headerTopShow);
document.addEventListener('scroll', headerBlackShow);



// 헤더 변수 선언
var prewScrollPos = 0;
var currentScrollPos = 0;
var headerBlack = document.getElementById('header_black')
var headerTop = document.getElementById('header_top')



// 투명한 헤더 나오고 사라지는 함수

function headerTopShow() {
  var headerTopScrollY = window.scrollY;

    if (headerTopScrollY <= 10) {
      // console.log("원위치");
      headerTop.style="top: 0px;"
    }

    else if (headerTopScrollY > 10) {
      headerTop.style="top: -72px; transition: 0.4s;"
    }

}



// 스크롤 내렸다가 다시 올렸을때 검정색 헤더 나타나는 함수

function headerBlackShow() {

  prewScrollPos = currentScrollPos;
  currentScrollPos = window.pageYOffset;

  var blackHeaderScrollY = window.scrollY;
  // console.log(blackHeaderScrollY);

  var scrollMove = currentScrollPos - prewScrollPos;
  // console.log(scrollMove);

  if(scrollMove > 0 && blackHeaderScrollY > 10) {
    // console.log("아랫방향");
    headerBlack.style=" top:-72px; transition: 0.4s;";

  }

  else if (scrollMove < 0 && blackHeaderScrollY > 10) {
    // console.log("윗방향");
    headerBlack.style="top:0px; transition: 0.4s;";
    // document.getElementById('header_wrap').style="height: calc(100% + 20px); background-color: rgba(0,0,0,1);"
  }
  else if (blackHeaderScrollY <= 0) {
    // console.log("원위치")
    headerBlack.style=" top:-72px;";
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
