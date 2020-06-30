$(function(){
  
  var gnbA =$('#gnb>li');
  var sub = $('#gnb>li>ul');

  var headerMin = $('#headerbox').height();
  var headerMax = sub.innerHeight() + headerMin;
  
  var state = false;
  var speed =150;

  //마우스 오버
  gnbA.mouseenter(function(){
   if(!state){
      $('#headerbox').stop().animate({height:headerMax},speed,function(){
	    sub.stop().fadeIn(speed);
	   });
	   state=true;
    }
    $(this).addClass('on');
    $(this).find(sub).addClass('on');
  }); //mouseenter end
 
  //마우스 아웃
  gnbA.mouseleave(function(){
    $(this).removeClass('on');
    $(this).find(sub).removeClass('on');
  });
  //마우스 아웃 주메뉴 벗어날때 페이드효과와 높이제어
  $('#gheader').mouseleave(function(){
     sub.stop().fadeOut(speed,function(){
	   $('#headerbox').stop().animate({height:headerMin},speed);
	 });
	 state =false;
  });

});