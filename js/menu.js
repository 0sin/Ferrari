// AUTO VIDEO SHOW

var autoVideoItem = document.getElementsByClassName("auto_video_wrap");
var autoListItem = document.getElementsByClassName("auto_list_item");

function autoMediaChange(autoListNumber) {
  for (i = 0; i < autoListItem.length; i++) {
    autoVideoItem[i].style = "display:none;";
    autoVideoItem[autoListNumber].style = "display:block;";
  }
}



// RACING VIDEO SHOW

var racingVideoItem = document.getElementsByClassName("racing_video_wrap");
var racingListItem = document.getElementsByClassName("racing_list_item");

function racingMediaChange(racingListNumber) {
  for (i = 0; i < racingListItem.length; i++) {
    racingVideoItem[i].style = "display:none;";
    racingVideoItem[racingListNumber].style = "display:block;";
  }
}


// UNIVERSE VIDEO SHOW

var universeVideoItem = document.getElementsByClassName("universe_video_wrap");
var universeListItem = document.getElementsByClassName("universe_list_item");

function universeMediaChange(universeListNumber) {
  for (i = 0; i < universeListItem.length; i++) {
    universeVideoItem[i].style = "display:none;";
    universeVideoItem[universeListNumber].style = "display:block;";
  }
}





// MENU SHOW

function autoShow() {
  document.getElementById('auto-wrapper').style = "display: flex; animation: menuShow .2s ease-in";
  document.getElementById('main_wrap').style = "display: none;";
  document.getElementById('footer').style = "display: none;";
}

function racingShow() {
  document.getElementById('racing-wrapper').style = "display: flex; animation: menuShow .2s ease-in";
  document.getElementById('main_wrap').style = "display: none;";
  document.getElementById('footer').style = "display: none;";
}

function universeShow() {
  document.getElementById('universe-wrapper').style = "display: flex; animation: menuShow .2s ease-in";
  document.getElementById('main_wrap').style = "display: none;";
  document.getElementById('footer').style = "display: none;";
}

function responsiveMenuShow() {
  document.getElementById('responsive-wrapper').style = "display: block; animation: menuShow .2s ease-in";
  document.getElementById('main_wrap').style = "display: none;";
  document.getElementById('footer').style = "display: none;";
}



// MENU CLOSE

var menuCloseButton = document.getElementsByClassName('menu_close');

console.log(menuCloseButton[0])

for (i=0; i<menuCloseButton.length; i++) {
    menuCloseButton[i].addEventListener('click', function () {

    for (x=0; x<menuCloseButton.length; x++) {
      document.getElementById('auto-wrapper').style = "display: none;";
      document.getElementById('racing-wrapper').style = "display: none;";
      document.getElementById('universe-wrapper').style = "display: none;";
      document.getElementById('responsive-wrapper').style = "display: none;";
    }

    document.getElementById('main_wrap').style = "display: block;";
    document.getElementById('footer').style = "display: block;";
  }); 
}

