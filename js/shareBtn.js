//  share Btn 충돌일어남..

   var BtnShareclick =  document.getElementsByClassName('share_btn_click')[0]
   var BtnShareOut =  document.getElementById('share_btn')
function shareBtn() {

  document.getElementsByClassName('share_bg')[0].style="opacity:1; display:block";
  document.getElementById('share_btn').style="display:flex;";
  document.getElementsByClassName('car_header_right')[0].style="display:none;";
}

BtnShareclick.addEventListener('click',shareBtn);

function shareBtnOut() {

document.getElementsByClassName('share_bg')[0].style="opacity:0;";
document.getElementById('share_btn').style="display:none;";
document.getElementsByClassName('car_header_right')[0].style="display:flex;";
}

BtnShareOut.addEventListener('click',shareBtnOut);
