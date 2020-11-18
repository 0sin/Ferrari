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
