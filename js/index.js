var videoItem = document.getElementsByClassName("video_wrap");
var listItem = document.getElementsByClassName("list_item");

function mediaChange(listNumber) {
  for (i = 0; i < listItem.length; i++) {
    videoItem[i].style = "display:none;";
    videoItem[listNumber].style = "display:block;";
  }
}
