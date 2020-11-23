function mediaChange(number) {
  var videoNumber = 0;
  var video_src;
  for (i = 0; i < 14; i++) {
    if ((videoNumber = i)) {
      video_src = "../videos/" + number + ".mp4";
    }
    return video_src;
  }
}
