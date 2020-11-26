//희경 js 

//main follow

  var HeaderFollow = document.getElementById('sf_main');
function mouseHeaderFollow(x) {
  
  document.getElementById("mouseImage").style="visibility: visible;";

var positionLeft = x.clientX;
var positionTop = x.clientY;
document.getElementById("mouseImage").style.left =
 positionLeft - 30 + "px";
document.getElementById("mouseImage").style.top =
 positionTop - 30 + "px";
}

HeaderFollow.addEventListener('mousemove',mouseHeaderFollow );

function mouseHeaderOut () {

  document.getElementById("mouseImage").style="visibility: hidden;";


}

HeaderFollow.addEventListener('mouseout',  mouseHeaderOut );






//header scroll

   window.onscroll = function(){
     currentY = window.pageYOffset;

     if ( currentY > 40 ) {
        document.getElementsByClassName('car_header')[0].style="position:fixed; top:0;"
     } else {
      document.getElementsByClassName('car_header')[0].style="position: absolute; top: 40px;"
     }

   }



//car img js

  var divHi = document.getElementsByClassName('hotspot_point');

  var divSize1 = divHi[0].getBoundingClientRect();
  var divSize2 = divHi[1].getBoundingClientRect();
  var divSize3 = divHi[2].getBoundingClientRect();


  var divLeft1 = divSize1.left;
  var divLeft2 = divSize2.left;
  var divLeft3 = divSize3.left;

  var divTop1 = divSize1.top;
  var divTop2 = divSize2.top;
  var divTop3 = divSize3.top;

  var insideHi = document.getElementsByClassName("inner_spot");


  
  

  var insideLeft1 = insideHi[0].clientWidth;
  var insideLeft2 = insideHi[1].clientWidth;
  var insideLeft3 = insideHi[2].clientWidth;

  var insideTop1 = insideHi[0].clientHeight;
  var insideTop2 = insideHi[1].clientHeight;
  var insideTop3 = insideHi[2].clientHeight;

  var hotspotArrow = document.getElementsByClassName('HotspotPoint_arrow');
  var insdeConts = document.getElementsByClassName('spot_inside_conts');

  var explain = document.getElementsByClassName('aerodynamic_explain');

  var exitExplain = document.getElementsByClassName('HotspotPoint_click_exit');
  var exitInsdeConts = document.getElementsByClassName('spot_click_inside_conts');


  var pointOne = document.getElementsByClassName('point_1')[0];
  var pointTwo = document.getElementsByClassName('point_2')[0];
  var pointThree = document.getElementsByClassName('point_3')[0];


  var carImg = document.getElementsByClassName('car_bg_img_change')[0];



  var discover = document.getElementsByClassName('discover')[0];
  var carHeadlineTitle = document.querySelectorAll('.car_headline_title_span');

   var carSubHeadline = document.getElementsByClassName('headline_chapter')[1];




  function mouseFollow(x) {
    insideHi[0].style="width:40px; height:40px; background-color: white;"

    divSize1 =divHi[0].getBoundingClientRect();
    divLeft1 = divSize1.left;
    divTop1 = divSize1.top;
    insideLeft1 = insideHi[0].clientWidth;
    insideTop1 = insideHi[0].clientHeight;
    
    var positionLeft = x.clientX;
    var positionTop = x.clientY ;

    insideHi[0].style.left =
      positionLeft - divLeft1 - (insideLeft1 / 2)  + "px";

    insideHi[0].style.top =
      positionTop - divTop1 - (insideTop1 / 2)  + "px";
      
     
  }

  


 function mouseOut () {
   
    insideLeft1 = insideHi[0].clientWidth;
    insideTop1 = insideHi[0].clientHeight;


    insideHi[0].style.left ="30px";
    insideHi[0].style.top = "30px";
  
  }


  function mouseFollowText() {
    hotspotArrow[0].style.opacity = "1";
     insdeConts[0].style="opacity : 1; display : flex";
  }
  function mouseOutText () {
    insideHi[0].style="width:20px; height:20px; background-color: transparent;"

    hotspotArrow[0].style.opacity = "0";
    insdeConts[0].style="opacity : 0; display : none";
  }


  divHi[0].addEventListener('mousemove', mouseFollow);
  divHi[0].addEventListener('mouseout', mouseOut );

  divHi[0].addEventListener('mousemove', mouseFollowText);
  divHi[0].addEventListener('mouseout', mouseOutText );



  function mouseFollowTwo(x) {
    insideHi[1].style="width:40px; height:40px; background-color: white;"

    divSize2 =divHi[1].getBoundingClientRect();
    divLeft2 = divSize2.left;
    divTop2 = divSize2.top;
    insideLeft2 = insideHi[1].clientWidth;
    insideTop2 = insideHi[1].clientHeight;

    var positionLeft = x.clientX;
    var positionTop = x.clientY ;

    insideHi[1].style.left =
      positionLeft - divLeft2 - (insideLeft2 / 2)  + "px";

    insideHi[1].style.top =
      positionTop - divTop2 - (insideTop2 / 2)  + "px";

  }

  


  function mouseOutTwo () {
  

    insideLeft2 = insideHi[1].clientWidth;
    insideTop2 = insideHi[1].clientHeight;


    insideHi[1].style.left ="30px";
    insideHi[1].style.top = "30px";

  
  }

  function mouseFollowTextTwo() {
    hotspotArrow[1].style.opacity = "1";
     insdeConts[1].style="opacity : 1; display : flex";
  }
  function mouseOutTextTwo () {
    insideHi[1].style="width:20px; height:20px; background-color: transparent;"
    hotspotArrow[1].style.opacity = "0";
    insdeConts[1].style="opacity : 0; display : none";
  }
  divHi[1].addEventListener('mousemove', mouseFollowTwo);
  divHi[1].addEventListener('mouseout', mouseOutTwo);

  divHi[1].addEventListener('mousemove', mouseFollowTextTwo);
  divHi[1].addEventListener('mouseout', mouseOutTextTwo);




  function mouseFollowThree(x) {
    insideHi[2].style="width:40px; height:40px; background-color: white;"
    divSize3 =divHi[2].getBoundingClientRect();
    divLeft3 = divSize3.left;
    divTop3 = divSize3.top;
    insideLeft3 = insideHi[2].clientWidth;
    insideTop3 = insideHi[2].clientHeight;

    var positionLeft = x.clientX;
    var positionTop = x.clientY ;

    insideHi[2].style.left =
      positionLeft - divLeft3 - (insideLeft3 / 2)  + "px";

    insideHi[2].style.top =
      positionTop - divTop3 - (insideTop3 / 2)  + "px";
    
 
  }

 

  function mouseOutThree () {



    insideLeft3 = insideHi[2].clientWidth;
    insideTop3 = insideHi[2].clientHeight;


    insideHi[2].style.left ="30px";
    insideHi[2].style.top = "30px";

 
  }

  function mouseFollowTextThree() {
    hotspotArrow[2].style.opacity = "1";
     insdeConts[2].style="opacity : 1; display : flex";
  }
  function mouseOutTextThree () {
    insideHi[2].style="width:20px; height:20px; background-color: transparent;"
    hotspotArrow[2].style.opacity = "0";
    insdeConts[2].style="opacity : 0; display : none";
  }


  divHi[2].addEventListener('mousemove', mouseFollowThree);
  divHi[2].addEventListener('mouseout', mouseOutThree  );

  divHi[2].addEventListener('mousemove', mouseFollowTextThree);
  divHi[2].addEventListener('mouseout', mouseOutTextThree  );




  




  var spotOpenstate=0;  

function spotOpen() {

  if ( spotOpenstate == 0 ) {

   
    pointOne.style="top:60%; left:10%";
    pointTwo.style="top:65%; left:80%";
    pointThree.style="top:10%; left:90%";
    carImg.style="width: 140%; transform: translate(-30%, -60%);"


    insideHi[0].style="width:40px; height:40px; background-color: white;";
    explain[0].style="right:0";


    exitExplain[0].style.opacity = "1";
    exitInsdeConts[0].style="opacity : 1; display : flex";
    

    for ( i = 0 ; i < carHeadlineTitle.length; i++){
      carHeadlineTitle[i].style=" animation : matrix_out 0.5s ease-in forwards; animation-delay: " + (0.1 * i) + "s; ";
      // console.log('hi');
    }
    discover.style="opacity:0;";
    carSubHeadline.style="opacity : 0";



    divHi[0].removeEventListener('mousemove', mouseFollowText);
    divHi[0].removeEventListener('mouseout', mouseOutText );

    spotOpenstate = 1;
  


  } else {
    pointOne.style="top:60%; left:20%";   
    pointTwo.style="top:70%; left:50%";
    pointThree.style="top:30%; left:75%";
    carImg.style="width: 60%; transform: translate(-50%, -50%);"

    insideHi[0].style="width:20px; height:20px; background-color: white;";
    explain[0].style="right:-100%; ";

    exitExplain[0].style.opacity = "0";
    exitInsdeConts[0].style="opacity : 0; display : none";

    for ( i = 0 ; i < carHeadlineTitle.length; i++){
      carHeadlineTitle[i].style="animation : matrix 0.5s ease-in forwards; animation-delay: " + (0.1 * i) + "s;";
      // console.log('hi');
    }
    discover.style="opacity:1;";
    carSubHeadline.style="opacity : 1";

    divHi[0].addEventListener('mousemove', mouseFollowText);
    divHi[0].addEventListener('mouseout', mouseOutText );
    
    spotOpenstate = 0;
 
  }

}


function spotOpenTwo() {

  if ( spotOpenstate == 0 ) {

    pointOne.style="top:55%; left:-10%";
    pointTwo.style="top:70%; left:30%";
    pointThree.style="top:10%; left:90%";
    carImg.style="width: 140%; transform: translate(-70%, -60%);"

    
    insideHi[1].style="width:40px; height:40px; background-color: white;";
    explain[1].style="right:0";

    exitExplain[1].style.opacity = "1";
    exitInsdeConts[1].style="opacity : 1; display : flex";

    for ( i = 0 ; i < carHeadlineTitle.length; i++){
      carHeadlineTitle[i].style=" animation : matrix_out 0.5s ease-in forwards; animation-delay: " + (0.1 * i) + "s; ";
      // console.log('hi');
    }
    discover.style="opacity:0;";
    carSubHeadline.style="opacity : 0";

   
  divHi[1].removeEventListener('mousemove', mouseFollowTextTwo);
  divHi[1].removeEventListener('mouseout', mouseOutTextTwo);

    spotOpenstate = 1;
  


  } else {
    pointOne.style="top:60%; left:20%";   
    pointTwo.style="top:70%; left:50%";
    pointThree.style="top:30%; left:75%";
    carImg.style="width: 60%; transform: translate(-50%, -50%);"

    insideHi[1].style="width:20px; height:20px; background-color: white;";
    explain[1].style="right:-100%; ";

    exitExplain[1].style.opacity = "0";
    exitInsdeConts[1].style="opacity : 0; display : none";

    for ( i = 0 ; i < carHeadlineTitle.length; i++){
      carHeadlineTitle[i].style="animation : matrix 0.5s ease-in forwards; animation-delay: " + (0.1 * i) + "s;";
      // console.log('hi');
    }
    discover.style="opacity:1;";
    carSubHeadline.style="opacity : 1";

    divHi[1].addEventListener('mousemove', mouseFollowTextTwo);
    divHi[1].addEventListener('mouseout', mouseOutTextTwo );
    
    spotOpenstate = 0;
 
  }

}

function spotOpenThree() {

if ( spotOpenstate == 0 ) {


  pointOne.style="top:65%; left:-40%";
    pointTwo.style="top:120%; left:30%";
    pointThree.style="top:30%; left:40%";
    carImg.style="width: 140%; transform: translate(-95%, -40%);"


  insideHi[2].style="width:40px; height:40px; background-color: white;";
    explain[2].style="right:0";

  exitExplain[2].style.opacity = "1";
  exitInsdeConts[2].style="opacity : 1; display : flex";

  for ( i = 0 ; i < carHeadlineTitle.length; i++){
      carHeadlineTitle[i].style=" animation : matrix_out 0.5s ease-in forwards; animation-delay: " + (0.1 * i) + "s; ";
      // console.log('hi');
    }
    discover.style="opacity:0;";
    carSubHeadline.style="opacity : 0";


  divHi[2].removeEventListener('mousemove', mouseFollowTextThree);
  divHi[2].removeEventListener('mouseout', mouseOutTextThree );

  spotOpenstate = 1;



} else {

  pointOne.style="top:60%; left:20%";   
    pointTwo.style="top:70%; left:50%";
    pointThree.style="top:30%; left:75%";
    carImg.style="width: 60%; transform: translate(-50%, -50%);"


  insideHi[2].style="width:20px; height:20px; background-color: white;";
  explain[2].style="right:-100%; ";

  exitExplain[2].style.opacity = "0";
  exitInsdeConts[2].style="opacity : 0; display : none";

  for ( i = 0 ; i < carHeadlineTitle.length; i++){
      carHeadlineTitle[i].style="animation : matrix 0.5s ease-in forwards; animation-delay: " + (0.1 * i) + "s;";
      // console.log('hi');
    }
    discover.style="opacity:1;";
    carSubHeadline.style="opacity : 1";

  divHi[2].addEventListener('mousemove', mouseFollowTextThree);
  divHi[2].addEventListener('mouseout', mouseOutTextThree );
  
  spotOpenstate = 0;

}

}

divHi[0].addEventListener('click', spotOpen);
divHi[1].addEventListener('click', spotOpenTwo);
divHi[2].addEventListener('click', spotOpenThree);









































// TECH LIST ALL CLOSE BUTTON

var techCloseButton = document.getElementById('tech_block_button');
var techList = document.getElementById('tech_detail_list');
var techCloseButtonRotation = document.querySelector('.tech_block_button_border');
var techBackground = document.getElementById('tech_detail_container');


techCloseButton.addEventListener('click', function(){
  if(techList.style.display == "block") {
    techList.style = "opacity:0; display: none;";
    techCloseButtonRotation.style = "transform: rotate(-45deg)";
    techCloseButton.style = "top: 0px";
    techBackground.style = "background: none;";
    }

  else {
    techList.style ="opacity:1; display: block;";
    techCloseButtonRotation.style = "transform: rotate(0deg)";
    techCloseButton.style = "top: 35px";
    techBackground.style = "background: rgb(60, 11, 13);";
    }
    
}
);




// TECH DETAIL ACCORDION 

var techTitle = document.querySelectorAll('.tech_detail_title');
var techAccButton = document.getElementsByClassName('accordion_open_button');


for (var i=0; i<techTitle.length; i++) {
  techTitle[i].addEventListener('click', function(button){

    for(var x=0; x<techTitle.length; x++) {
    techTitle[x].classList.remove('tech_acc');
    techAccButton[x].classList.remove('accordion_close_button');

  }
  this.classList.add('tech_acc');
  button.target.childNodes[1].classList.add('accordion_close_button');
    
  });
}








// SHOW VIDEO GALLERY

var videoShow = document.getElementById('gallery_slider_video');
var photoShow = document.getElementById('gallery_slider_photo')
var videoBtActive = document.getElementById('videos_button');
var photoBtActive = document.getElementById('photos_button')

function videoGalleryShow() {
  videoShow.style="display: flex; visibility: inherit; opacity: 1;";
  photoShow.style="display: none; visibility: hidden; opacity: 0;";
  photoBtActive.classList.remove('gallery_header_button_active');
  videoBtActive.classList.add('gallery_header_button_active');
}

videoGalleryShow();



// SHOW PHOTO GALLERY

function photoGalleryShow() {
  videoShow.style="display: none; visibility: hidden; opacity: 0;";
  photoShow.style="display: flex; visibility: inherit; opacity: 1;";
  videoBtActive.classList.remove('gallery_header_button_active');
  photoBtActive.classList.add('gallery_header_button_active');
}













// 스크롤 이벤트 
document.addEventListener('scroll', superfastScrollShow);


// 챕터 라인 진행 함수
var chapterNumber = document.querySelectorAll('.chapter_number')
var chapterLine = document.querySelectorAll('.chapter_line')
var chapterTitle = document.querySelectorAll('.chapter_title')

function chapterLineShow(x) {
  chapterNumber[x].style = "animation: opacity 0.3s forwards;";
  chapterLine[x].style = "animation: header_chapter_ltr 1.2s forwards; animation-delay: 0.2s";
  chapterTitle[x].style = "animation: opacity 0.7s forwards;";
}


// 헤드라인 매트릭스 함수
var headlineTitle = document.querySelectorAll('.headline_title')
var headlinedesc = document.querySelectorAll('.headline_desc')
// console.log(headlineTitle[0].children);
// console.log(chapterLine[0]);

function headlineShow(x) {
    for (i=0; i<headlineTitle[x].children.length; i++) {
    headlineTitle[x].children[i].style = "animation: matrix 1s ease-in forwards; animation-delay: "+ (0.07 * i) + "s;";}
}


function superfastScrollShow () {
    // 화면 전체 스크롤 포지션
    var superfastScrollY = window.scrollY;
    var superfastHeight = window.innerHeight;
    //console.log(superfastScrollY); // 아래로 내려가면 계속 증가
    //console.log(superfastHeight); // 화면값은 고정값
    


    // 반복되는 공통 클래스 변수선언
    var dynamicsVideo = document.querySelectorAll('.dynamics_video');
    var editorialDescription = document.querySelectorAll('.editorial_desc')
    var editorialTitle = document.getElementsByClassName('editorial_title_span')




    // 각 섹션 포지션

    // 0. sf_main 섹션
    var sfMainPosition = document.getElementById('sf_main').offsetTop;
    var sfMainOffset = superfastScrollY + superfastHeight - sfMainPosition;
    
    if (sfMainOffset > 80) {
      document.querySelector('.intro_container').style = "animation: opacity 1.5s ease-in forwards;"
    }
    if (sfMainOffset > 2000) {
      document.querySelectorAll('.editorial_group_group')[0].style = "animation: img_show_dtu 0.8s ease-in forwards;";
      document.querySelectorAll('.editorial_group_group')[1].style = "animation: img_show_dtu 0.8s ease-in forwards;";
      document.querySelectorAll('.editorial_text')[0].style = "animation: img_show_dtu 0.8s ease-in forwards; width: 100%;";
      document.querySelector('.editorial_btn').style = "animation: img_show_dtu 0.8s ease-in forwards;";
    }


    // 1. engine 섹션
    var enginePosition = document.getElementById('engine').offsetTop;
    var engineOffset = superfastScrollY + superfastHeight - enginePosition;
    
    if (engineOffset > 250) {
      document.querySelector('.engin_bg_img').style = "animation: opacity 1.2s ease-in forwards;"

      chapterLineShow(0)
      headlineShow(0);
      headlinedesc[0].style = "animation: opacity 1.7s ease-in forwards;";
    }
  


    // 2. aerodynamics 섹션
    var aeroPosition = document.getElementById('aerodynamics').offsetTop;
    var aeroOffset = superfastScrollY + superfastHeight - aeroPosition;
    // console.log(aeroPosition); //섹션있는 위치
    // console.log(aeroOffset); // 0이 되면 더블섹션 시작
    
    if (aeroOffset > 250) {
      document.querySelector('.aerodynamics_background').style = "animation: opacity 3s ease-in forwards;"

      chapterLineShow(1)
      headlineShow(1);
    }

    if (aeroOffset > 1150) {
      dynamicsVideo[0].style = "animation: img_show_dtu 0.8s ease-in forwards;";
      editorialDescription[0].style = "animation: opacity 1s ease-in forwards;";
      for (i=0; i<2; i++) {
        editorialTitle[i].style = "animation: matrix 1s ease-in forwards; animation-delay: "+ (0.07 * i) + "s;";}
    }



    // 3. dynamics 섹션
    var dynamicsPosition = document.getElementById('dynamics').offsetTop;
    var dynamicsOffset = superfastScrollY + superfastHeight - dynamicsPosition 
    

    if (dynamicsOffset > 250) {
      document.querySelector('.dynamics_background').style = "animation: opacity 1.2s ease-in forwards;"

      chapterLineShow(2)
      headlineShow(2);
    }

    if (dynamicsOffset > 1150) {
      dynamicsVideo[1].style = "animation: img_show_dtu 0.8s ease-in forwards;";
      editorialDescription[1].style = "animation: opacity 1s ease-in forwards;";
      for (i=0; i<6; i++) {
        editorialTitle[i].style = "animation: matrix 1s ease-in forwards; animation-delay: "+ (0.07 * i) + "s;";}
    }

    // 4. design 섹션
    var designPosition = document.getElementById('design').offsetTop;
    var designOffset = superfastScrollY + superfastHeight - designPosition 

    if (designOffset > 250) {
      document.querySelector('.design_background').style = "animation: opacity 1.2s ease-in forwards;"

      chapterLineShow(3)
      headlineShow(3);
    }

    // 5. interior 섹션
    var interiorPosition = document.getElementById('interior').offsetTop;
    var interiorOffset = superfastScrollY + superfastHeight - interiorPosition 

    if (interiorOffset > 250) {
      document.querySelector('.interior_background').style = "animation: opacity 1.2s ease-in forwards;";

      chapterLineShow(4)
      headlineShow(4);
      headlinedesc[1].style = "animation: opacity 1s ease-in forwards;";
    }


    // 6. tech_specs 섹션
    var techPosition = document.getElementById('tech_specs').offsetTop;
    var techOffset = superfastScrollY + superfastHeight - techPosition 

    if (techOffset > 150) {chapterLineShow(5)}


    // 7. media_gallery 섹션
    var mediaPosition = document.getElementById('media_gallery').offsetTop;
    var mediaOffset = superfastScrollY + superfastHeight - mediaPosition;
    var dealerTitle = document.getElementsByClassName('dealer_title_span');

    if (mediaOffset > 150) {chapterLineShow(6)}
    if (mediaOffset > 700) {
      document.querySelector('.dealer_text_wrap h5').style = "animation: opacity 1s ease-in forwards;"
      for (i=0; i<dealerTitle.length; i++) {
        dealerTitle[i].style = "animation: matrix 1s ease-in forwards; animation-delay: "+ (0.03 * i) + "s;";}
      }
      document.querySelector('.dealer_text .play_video_button').style = "animation: opacity 1s ease-in forwards;";

      document.querySelector('.dealer_media').style = "animation: bg_ltr 0.6s ease forwards;";
      document.querySelector('.dealer_media img').style = "animation: opacity 1s ease-in forwards;";


}








