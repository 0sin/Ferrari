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
    
});




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
    console.log(superfastScrollY); // 아래로 내려가면 계속 증가
    console.log(superfastHeight); // 화면값은 고정값
    


    // 반복되는 공통 클래스 변수선언
    var dynamicsVideo = document.querySelectorAll('.dynamics_video');
    var editorialDescription = document.querySelectorAll('.editorial_desc')
    var editorialTitle = document.getElementsByClassName('editorial_title_span')




    // 각 섹션 포지션
    // 3. dynamics 섹션
    var dynamicsPosition = document.getElementById('dynamics').offsetTop;
    var dynamicsOffset = superfastScrollY + superfastHeight - dynamicsPosition 
    

    if (dynamicsOffset > 250) {
      document.querySelector('.dynamics_background').style = "animation: opacity 1.2s ease-in forwards;"

      chapterLineShow(0)
      headlineShow(0);
    }
    if (dynamicsOffset > 1150) {
      dynamicsVideo[1].style = "animation: img_show_dtu 0.8s ease-in forwards;";
      editorialDescription[1].style = "animation: opacity 1s ease-in forwards;";
      for (i=2; i<editorialTitle.length; i++) {
        editorialTitle[i].style = "animation: matrix 1s ease-in forwards; animation-delay: "+ (0.07 * i) + "s;";}
    }

    // 4. design 섹션
    var designPosition = document.getElementById('design').offsetTop;
    var designOffset = superfastScrollY + superfastHeight - designPosition 

    if (designOffset > 250) {
      document.querySelector('.design_background').style = "animation: opacity 1.2s ease-in forwards;"

      chapterLineShow(1)
      headlineShow(1);
    }

    // 5. interior 섹션
    var interiorPosition = document.getElementById('interior').offsetTop;
    var interiorOffset = superfastScrollY + superfastHeight - interiorPosition 

    if (interiorOffset > 250) {
      document.querySelector('.interior_background').style = "animation: opacity 1.2s ease-in forwards;";

      chapterLineShow(2)
      headlineShow(2);
      headlinedesc[0].style = "animation: opacity 1s ease-in forwards;";
    }


    // 6. tech_specs 섹션
    var techPosition = document.getElementById('tech_specs').offsetTop;
    var techOffset = superfastScrollY + superfastHeight - techPosition 

    if (techOffset > 150) {chapterLineShow(3)}


    // 7. media_gallery 섹션
    var mediaPosition = document.getElementById('media_gallery').offsetTop;
    var mediaOffset = superfastScrollY + superfastHeight - mediaPosition;
    var dealerTitle = document.getElementsByClassName('dealer_title_span');
    console.log(mediaPosition); //섹션있는 위치
    console.log(mediaOffset); // 0이 되면 더블섹션 시작

    if (mediaOffset > 150) {chapterLineShow(4)}
    if (mediaOffset > 500) {
      document.querySelector('.dealer_text_wrap h5').style = "animation: opacity 1s ease-in forwards;"
      for (i=0; i<dealerTitle.length; i++) {
        dealerTitle[i].style = "animation: matrix 1s ease-in forwards; animation-delay: "+ (0.03 * i) + "s;";}
      }
      document.querySelector('.dealer_text .play_video_button').style = "animation: opacity 1s ease-in forwards;";

      document.querySelector('.dealer_media').style = "animation: bg_ltr 0.6s ease forwards;";
      document.querySelector('.dealer_media img').style = "animation: opacity 1s ease-in forwards;";


}








