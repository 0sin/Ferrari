// function mediaChange(videoNumber) {
//   document.getElementsByClassName("videos")[videoNumber].src = "videos/0.mp4";
// }

var videoItem = document.getElementsByClassName("video_wrap");

function mediaChange(i) {
  for (x = 0; x < 14; x++) {
    videoItem[x].style = "display:none;";
  }
  if (i == 0) {
    videoItem[0].style = "display:block;";
  } else if (i == 1) {
    videoItem[1].style = "display:block;";
  } else if (i == 2) {
    videoItem[2].style = "display:block;";
  } else if (i == 3) {
    videoItem[3].style = "display:block;";
  } else if (i == 4) {
    videoItem[4].style = "display:block;";
  } else if (i == 5) {
    videoItem[5].style = "display:block;";
  } else if (i == 6) {
    videoItem[6].style = "display:block;";
  } else if (i == 7) {
    videoItem[7].style = "display:block;";
  } else if (i == 8) {
    videoItem[8].style = "display:block;";
  } else if (i == 9) {
    videoItem[9].style = "display:block;";
  } else if (i == 10) {
    videoItem[10].style = "display:block;";
  } else if (i == 11) {
    videoItem[11].style = "display:block;";
  } else if (i == 12) {
    videoItem[12].style = "display:block;";
  } else if (i == 13) {
    videoItem[13].style = "display:block;";
  }
}
