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