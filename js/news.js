
// 필터 메뉴 오픈
function filterOpen(){
    document.getElementById('filter_open_li').style="display:none";
    document.getElementById('filter_close_li').style="display:block";
    document.getElementById('filter_ul').style="height:162px";
  }

  function filterClose(){
    document.getElementById('filter_open_li').style="display:block";
    document.getElementById('filter_close_li').style="display:none";
    document.getElementById('filter_ul').style="height:0px";

  }



// 시간 표기 /이탈리아 기준
function presentTime() { 

    var presentTime = new Date();
    var presentDay = presentTime.getUTCDay();
    var presentDayWord;
    var presentMonth = presentTime.getUTCMonth()+1;
    var presentMonthWord;


    if (presentDay == 0) {  presentDayWord = "Mon" }
       else if (presentDay == 1)  {  presentDayWord = "Mon" }
       else if (presentDay == 2)  {  presentDayWord = "Tue" }
       else if (presentDay == 3)  {  presentDayWord = "Wed" }
       else if (presentDay == 4)  {  presentDayWord = "Thu" }
       else if (presentDay == 5)  {  presentDayWord = "Fri" }
       else  {  presentDayWord = "Sat" }

    if (presentMonth == 0) {  presentDayWord = "January" }
       else if (presentMonth == 1)  {  presentMonthWord = "Feburary" }
       else if (presentMonth == 2)  {  presentMonthWord = "March" }
       else if (presentMonth == 3)  {  presentMonthWord = "Afril" }
       else if (presentMonth == 4)  {  presentMonthWord = "May" }
       else if (presentMonth == 6)  {  presentMonthWord = "June" }
       else if (presentMonth == 7)  {  presentMonthWord = "July" }
       else if (presentMonth == 8)  {  presentMonthWord = "August" }
       else if (presentMonth == 9)  {  presentMonthWord = "September" }
       else if (presentMonth == 10)  {  presentMonthWord = "October" }
       else if (presentMonth == 11)  {  presentMonthWord = "November" }
       else  { presentMonthWord = "December" }


    // document.getElementById('time').innerHTML = presentTime;
    
    
    var date=document.getElementsByClassName('date');
    for(i=0;date.length>i;i++){
       document.getElementsByClassName('date')[i].innerHTML =  presentTime.getUTCDate() + "th " + presentMonthWord + " "+ presentTime.getUTCFullYear()+"/"+ presentDayWord + "/"+(presentTime.getUTCHours()+1) + ":" + presentTime.getUTCMinutes();   


        if ( (presentTime.getUTCHours()+1 ) >= 0 && (presentTime.getUTCHours()+1 ) <= 12 ) { 
            document.getElementsByClassName('date')[i].style="color:rgb(218,41,28);"; 

        } else {          
            // document.getElementsByClassName('date')[i].style="color:gray;"; 
            document.getElementsByClassName('date')[i].style="color:rgb(218,41,28);"; 

        }
    }   

    var topdate=document.getElementsByClassName('topdate');
    for(i=0;topdate.length>i;i++){
       document.getElementsByClassName('topdate')[i].innerHTML =  presentTime.getUTCDate() + "th " + presentMonthWord + " "+ presentTime.getUTCFullYear()+"/"+ presentDayWord + "/"+(presentTime.getUTCHours()+1) + ":" + presentTime.getUTCMinutes();   


        if ( (presentTime.getUTCHours()+1 ) >= 0 && (presentTime.getUTCHours()+1 ) <= 12 ) { 
            document.getElementsByClassName('topdate')[i].style="color:white;"; 

        } else {          
            // document.getElementsByClassName('topdate')[i].style="color:gray;";         
            document.getElementsByClassName('topdate')[i].style="color:white;";         

        }
    }   

}

setInterval(presentTime, 1000);



// sns 오픈 클로즈
var snsWrap = document.getElementsByClassName('sns_wrap');
var openStateIcon = document.getElementsByClassName('subnews_share_open');
var closeStateIcon = document.getElementsByClassName('subnews_share_close');
var openState = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // List 오픈 상태 저장 배열 변수
var closeState = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    
function accOpen(clickNumber) {
     
    if (openState[clickNumber] == 0 && closeState[clickNumber] == 0){ 
         
         for (i=0; i<snsWrap.length ; i++) {
            snsWrap[i].style = "height:0px;";
            openStateIcon[i].style =  " right: 15px;";
            closeStateIcon[i].style = " right: -50px;";

            openState[i] = 0;
            closeState[i] = 0;
        }

            snsWrap[clickNumber].style = "height:100px;";
            openStateIcon[clickNumber].style =  " right: -50px;";
            closeStateIcon[clickNumber].style = " right: 0px;";
            openState[clickNumber] = 1; // 
            closeState[clickNumber] = 1; // 
         } 
   else 
            { 
            snsWrap[clickNumber].style = "height:0px;";
            openStateIcon[clickNumber].style =  " right: 15px;";
            closeStateIcon[clickNumber].style = " right: -50px;";      
            openState[clickNumber] = 0; //
            closeState[clickNumber] = 0; // 
            
        }        
         
}



    // 푸터로 이동 버튼
    function moveFooter(){ 
        window.scrollTo(0,3700);
        // window.scrollTo(document.getElementById('footer').offsetTop);
    }



    // 스크롤 동작 헤더 /푸터 /뉴스 등장
    function scrollEvent(){
        console.log(window.scrollY);
     
        var sub2Pos = document.getElementById('subnews_2').offsetTop - window.innerHeight;
        var sub3Pos = document.getElementById('subnews_3').offsetTop - window.innerHeight;
        var sub4Pos = document.getElementById('subnews_4').offsetTop - window.innerHeight;
        var sub5Pos = document.getElementById('subnews_5').offsetTop - window.innerHeight;
        var sub6Pos = document.getElementById('subnews_6').offsetTop - window.innerHeight;
        var sub7Pos = document.getElementById('subnews_7').offsetTop - window.innerHeight;
        var newsHeader = document.getElementById('header').offsetTop - window.innerHeight;
        var newsFooter = document.getElementById('footer').offsetTop - window.innerHeight;


        if(window.scrollY>newsHeader){
                document.getElementById('header2').style="display:none;";
        }
        if(window.scrollY==0){
            document.getElementById('header2').style="display:block;";
        }
        if(window.scrollY>newsFooter){
            document.getElementById('footer').style="display:block;";
            document.getElementById('btn_footer').style="display:none;";
            document.getElementById('btn_top').style="color:white;";            

        }

        if(window.scrollY<newsFooter){
            document.getElementById('btn_footer').style="display:block;";
            // document.getElementById('btn_footer').style="visibility:visible;";
            // document.getElementById('footer').style="display:none;";

        }
      
        if(window.scrollY>sub2Pos){
                // document.getElementById('subnews_2').style=" animation : fade_in 2s forwards;";  
                document.querySelectorAll('#subnews_2 ul li:nth-child(1)')[0].style=" animation : fade_in 1.6s forwards;";  
                document.querySelectorAll('#subnews_2 ul li:nth-child(2)')[1].style=" animation : fade_in 2.2s forwards;";  
                document.querySelectorAll('#subnews_2 ul li:nth-child(3)')[2].style=" animation : fade_in 2.8s forwards;";  

                // document.querySelectorAll('#subnews_2 ul li div span:nth-child(1)')[0].style=" animation : fade_in 1.6s forwards;";  
                // document.querySelectorAll('#subnews_2 ul li div span:nth-child(2)')[1].style=" animation : fade_in 2.2s forwards;";  
                // document.querySelectorAll('#subnews_2 ul li div span:nth-child(3)')[2].style=" animation : fade_in 2.8s forwards;";  
                

        }
        if(window.scrollY>sub3Pos){            
                // document.getElementById('subnews_3').style=" animation : fade_in 2s forwards;";       
                document.querySelectorAll('#subnews_3 ul li:nth-child(1)')[0].style=" animation : fade_in 1.6s forwards;";  
                document.querySelectorAll('#subnews_3 ul li:nth-child(2)')[1].style=" animation : fade_in 2.2s forwards;";  
                document.querySelectorAll('#subnews_3 ul li:nth-child(3)')[2].style=" animation : fade_in 2.8s forwards;";  
                
        }
        if(window.scrollY>sub4Pos){            
                // document.getElementById('subnews_4').style=" animation : fade_in 2s forwards;";       
                document.querySelectorAll('#subnews_4 ul li:nth-child(1)')[0].style=" animation : fade_in 1.6s forwards;";  
                document.querySelectorAll('#subnews_4 ul li:nth-child(2)')[1].style=" animation : fade_in 2.2s forwards;";  
                document.querySelectorAll('#subnews_4 ul li:nth-child(3)')[2].style=" animation : fade_in 2.8s forwards;";  
        }
        if(window.scrollY>sub5Pos){            
                // document.getElementById('subnews_5').style=" animation : fade_in 2s forwards;";       
                document.querySelectorAll('#subnews_5 ul li:nth-child(1)')[0].style=" animation : fade_in 1.6s forwards;";  
                document.querySelectorAll('#subnews_5 ul li:nth-child(2)')[1].style=" animation : fade_in 2.2s forwards;";  
                document.querySelectorAll('#subnews_5 ul li:nth-child(3)')[2].style=" animation : fade_in 2.8s forwards;";  
        }
        if(window.scrollY>sub6Pos){            
                // document.getElementById('subnews_6').style=" animation : fade_in 2s forwards;";       
                document.querySelectorAll('#subnews_6 ul li:nth-child(1)')[0].style=" animation : fade_in 1.6s forwards;";  
                document.querySelectorAll('#subnews_6 ul li:nth-child(2)')[1].style=" animation : fade_in 2.2s forwards;";  
                document.querySelectorAll('#subnews_6 ul li:nth-child(3)')[2].style=" animation : fade_in 2.8s forwards;";  
        }
        if(window.scrollY>sub7Pos){            
                // document.getElementById('subnews_7').style=" animation : fade_in 2s forwards;";       
                document.querySelectorAll('#subnews_7 ul li:nth-child(1)')[0].style=" animation : fade_in 1.6s forwards;";  
                document.querySelectorAll('#subnews_7 ul li:nth-child(2)')[1].style=" animation : fade_in 2.2s forwards;";  
                document.querySelectorAll('#subnews_7 ul li:nth-child(3)')[2].style=" animation : fade_in 2.8s forwards;";  
        }
    }

    // 레이어팝업
    // document.getElementsByTagName('button')[0].addEventListener('click', function() {
	// document.getElementById('footer').style.display = 'block';
    // document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    // });
   

// // HEADER

// var prewScrollPos = 0;
// var currentScrollPos = 0;
// window.onscroll = function(){


//     prewScrollPos = currentScrollPos;
//     currentScrollPos = window.pageYOffset;

//     scrollMove = currentScrollPos - prewScrollPos;

//     console.log(scrollMove);


//     if(scrollMove > 0) {
//         console.log("아랫방향");


//         if (window.pageYOffset > 1){
//             document.getElementById('header').style=" top:-72px; transition: 0.4s;";
            
//         }
       
//     }
    
//     else {
//         console.log("윗방향");
//          document.getElementById('header').style="top:0px; transition: 0.4s;";
//          document.getElementById('header_wrap').style="  height: calc(100% + 20px); background-color: rgba(0,0,0,1);"

 
//         // if(window.pageYOffset = 0) {
//         //     document.getElementById('header_wrap').style="  height: calc(100% + 20px); background-color: none;"
//         // }
//     }
//          if(scrollMove > 0) {
//         console.log("아랫방향");


//         if (window.pageYOffset > 1){
//             document.getElementById('header2').style=" top:-72px; transition: 0.4s;";
            
//         }


       
//     }
// } 



// FOOTER

  var footerOpen = document.getElementsByClassName("footer_nav_title");
  var i;

  for (i = 0; i < footerOpen.length; i++) {
    footerOpen[i].addEventListener("click", function() {
      this.classList.toggle("active");

      var footer_nav_column = this.nextElementSibling;
      
    
      if (footer_nav_column.style.maxHeight) {
        footer_nav_column.style.maxHeight = null;
      } else {
        footer_nav_column.style.maxHeight = footer_nav_column.scrollHeight + "px";
      } 
    }
    );
  }
