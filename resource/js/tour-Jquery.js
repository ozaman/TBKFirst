$(document).ready(function(){

  /*$(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
      $('.box-btn-select-submenu-tour').fadeIn();
      //$(".box-btn-select-submenu-tour").css('display', 'block');
    } else {
      $('.box-btn-select-submenu-tour').fadeOut();
      //$(".box-btn-select-submenu-tour").css('display', 'none');
    }
        
  });*/
$(window).scroll(function(){
    var x = $(window).scrollTop();
    if(x > 240){
      $('.box-btn-select-submenu-tour').css('position','fixed')
      $('.box-btn-select-submenu-tour').css('margin-top','10px')
      //$('.box-btn-select-submenu-tour').scrollToFixed({
      //marginTop:-155,
      //preFixed: function() { $(this).find('#tours').removeClass('.bar-1');
                               //$(this).find('.box-btn-select').css();
       // },
       // postFixed: function() { //$(this).find('.order_btn').css('display', 'none');
    }
    else{
      $('.box-btn-select-submenu-tour').css('position','absolute')
      $('.box-btn-select-submenu-tour').css('margin-top','275px')
      
    }


  });
       
  
  
  $(window).scroll(function(){
    var x = $(window).scrollTop();
    console.log(x)
    if(x < 240){
        $(".i-packages").css('background-color', '#fff'); 
        $(".i-eating").css('background-color', '#fff');
        $(".i-wedding").css('background-color', '#fff');
        $(".i-boat").css('background-color', '#fff');
        $(".i-tour").css('background-color', '#fff');
        $(".i-hotel").css('background-color', '#fff');
        $(".i-show").css('background-color', '#fff');
        $(".i-golf").css('background-color', '#fff'); 
      }
  
      else if (x >= 250 && x < 400) {
        $(".i-packages").css('background-color', '#fff'); 
         $(".i-eating").css('background-color', '#fff');
         $(".i-wedding").css('background-color', '#fff');
         $(".i-boat").css('background-color', '#fff');
        $(".i-tour").css('background-color', '#999');
        $(".i-hotel").css('background-color', '#fff');
        $(".i-show").css('background-color', '#fff');
        $(".i-golf").css('background-color', '#fff'); 
      }
      
      //alert("aaa")
      //active("tour");
       
  
    else if(x >=1000 && x < 1200) {//spa
            //headerOff();
            //alert("spa");
             $(".i-packages").css('background-color', '#fff'); 
            $(".i-golf").css('background-color', '#fff'); 
             $(".i-eating").css('background-color', '#fff');
             $(".i-wedding").css('background-color', '#fff');
             $(".i-boat").css('background-color', '#fff');
            $(".i-hotel").css('background-color', '#999');
            $(".i-tour").css('background-color', '#fff');
            $(".i-show").css('background-color', '#fff');
     }
     else if(x >=1740 && x < 1900) {//boat
            //headerOff();
             //alert("boat");
             $(".i-packages").css('background-color', '#fff'); 
            $(".i-golf").css('background-color', '#fff'); 
             $(".i-eating").css('background-color', '#fff');
             $(".i-wedding").css('background-color', '#fff');
             $(".i-hotel").css('background-color', '#fff');
             $(".i-tour").css('background-color', '#fff');
             $(".i-show").css('background-color', '#fff');
            $(".i-boat").css('background-color', '#999');
            //$(".itour").css('background-color', '#ddd');
     }
     else if(x >=2840 && x < 3000) {//wedding
            //headerOff();
             $(".i-packages").css('background-color', '#fff'); 
            $(".i-golf").css('background-color', '#fff'); 
             $(".i-eating").css('background-color', '#fff');
             $(".i-hotel").css('background-color', '#fff');
             $(".i-tour").css('background-color', '#fff');
            $(".i-boat").css('background-color', '#fff');
            $(".i-show").css('background-color', '#fff');
            $(".i-wedding").css('background-color', '#999');
     }
     else if(x >=3220 && x < 3400) {//diving
            //headerOff();
             $(".i-packages").css('background-color', '#fff'); 
            $(".i-golf").css('background-color', '#fff'); 
             $(".i-hotel").css('background-color', '#fff');
             $(".i-tour").css('background-color', '#fff');
            $(".i-boat").css('background-color', '#fff');
            $(".i-wedding").css('background-color', '#fff');
            $(".i-show").css('background-color', '#fff');
            $(".i-eating").css('background-color', '#999');
     }
     else if(x >=3960 && x < 4100) {//golf
            //headerOff();
             $(".i-packages").css('background-color', '#fff'); 
             $(".i-hotel").css('background-color', '#fff');
             $(".i-tour").css('background-color', '#fff');
            $(".i-boat").css('background-color', '#fff');
            $(".i-wedding").css('background-color', '#fff');
            $(".i-eating").css('background-color', '#fff');
            $(".i-show").css('background-color', '#fff');
            $(".i-golf").css('background-color', '#999');  
     }
     else if(x >=4700 && x < 4900) {//package
            //headerOff();
             $(".i-packages").css('background-color', '#fff'); 
             $(".i-hotel").css('background-color', '#fff');
             $(".i-tour").css('background-color', '#fff');
            $(".i-boat").css('background-color', '#fff');
            $(".i-wedding").css('background-color', '#fff');
            $(".i-eating").css('background-color', '#fff');
            $(".i-golf").css('background-color', '#fff');
            $(".i-show").css('background-color', '#fff');
            $(".i-packages").css('background-color', '#999');  
     }
     else if(x >=5440 && x < 5600) {//package
            //headerOff();
             $(".i-packages").css('background-color', '#fff'); 
             $(".i-hotel").css('background-color', '#fff');
             $(".i-tour").css('background-color', '#fff');
            $(".i-boat").css('background-color', '#fff');
            $(".i-wedding").css('background-color', '#fff');
            $(".i-eating").css('background-color', '#fff');
            $(".i-golf").css('background-color', '#fff');            
            $(".i-show").css('background-color', '#999');    
     }


    });



    $(".i-tour").click(function() {
            $('body,html').animate({scrollTop: 260}, 10);
            //setInterval(function(){
              $(".i-packages").css('background-color', '#fff'); 
              $(".i-eating").css('background-color', '#fff');
              $(".i-wedding").css('background-color', '#fff');
              $(".i-boat").css('background-color', '#fff');            
              $(".i-hotel").css('background-color', '#fff');
              $(".i-golf").css('background-color', '#fff');
              $(".i-show").css('background-color', '#fff');
               $(".i-tour").css('background-color', '#999');
             //}, 500);            
        
    });
    $(".i-hotel").click(function() {
          $('body,html').animate({scrollTop: 1000}, 10);  
           // setInterval(function(){
              $(".i-packages").css('background-color', '#fff'); 
              $(".i-golf").css('background-color', '#fff'); 
              $(".i-eating").css('background-color', '#fff');
              $(".i-wedding").css('background-color', '#fff');
              $(".i-boat").css('background-color', '#fff');            
              $(".i-tour").css('background-color', '#fff');
              $(".i-show").css('background-color', '#fff');
               $(".i-hotel").css('background-color', '#999');
            // }, 500);   
        
    });
    $(".i-boat").click(function() {
          $('body,html').animate({scrollTop: 1740}, 10);  
           //setInterval(function(){
            $(".i-packages").css('background-color', '#fff'); 
            $(".i-golf").css('background-color', '#fff'); 
            $(".i-eating").css('background-color', '#fff');
            $(".i-wedding").css('background-color', '#fff');
            $(".i-hotel").css('background-color', '#fff');
            $(".i-tour").css('background-color', '#fff');
            $(".i-show").css('background-color', '#fff');
               $(".i-boat").css('background-color', '#999');
             //}, 500);   
        
    });
    $(".i-wedding").click(function() { 
          $('body,html').animate({scrollTop: 2480}, 10);  
            //setInterval(function(){
            $(".i-packages").css('background-color', '#fff'); 
            $(".i-golf").css('background-color', '#fff'); 
            $(".i-eating").css('background-color', '#fff');
            $(".i-hotel").css('background-color', '#fff');
            $(".i-tour").css('background-color', '#fff');
            $(".i-boat").css('background-color', '#fff'); 
            $(".i-show").css('background-color', '#fff');
                $(".i-wedding").css('background-color', '#999');

            //}, 500);
                
        
    });
    $(".i-eating").click(function() {
           $('body,html').animate({scrollTop: 3220}, 10);
            //setInterval(function(){
               $(".i-packages").css('background-color', '#fff'); 
              $(".i-golf").css('background-color', '#fff'); 
              $(".i-hotel").css('background-color', '#fff');
              $(".i-tour").css('background-color', '#fff');
              $(".i-boat").css('background-color', '#fff');
              $(".i-wedding").css('background-color', '#fff');
              $(".i-show").css('background-color', '#fff');
               $(".i-eating").css('background-color', '#999');
             //}, 500);    
        
    });
    $(".i-golf").click(function() {  
           $('body,html').animate({scrollTop: 3960}, 10);
            //setInterval(function(){
               $(".i-packages").css('background-color', '#fff'); 
              $(".i-hotel").css('background-color', '#fff');
              $(".i-tour").css('background-color', '#fff');
              $(".i-boat").css('background-color', '#fff');
              $(".i-wedding").css('background-color', '#fff');
              $(".i-eating").css('background-color', '#fff');
              $(".i-show").css('background-color', '#fff');
               $(".i-golf").css('background-color', '#999');
             //}, 500);    
     
        
    });
    $(".i-packages").click(function() {
            $('body,html').animate({scrollTop: 4700},10);
            //setInterval(function(){              
              $(".i-hotel").css('background-color', '#fff');
              $(".i-tour").css('background-color', '#fff');
              $(".i-boat").css('background-color', '#fff');
              $(".i-wedding").css('background-color', '#fff');
              $(".i-eating").css('background-color', '#fff');
              $(".i-golf").css('background-color', '#fff');
               $(".i-show").css('background-color', '#fff');
               $(".i-packages").css('background-color', '#999');
            // }, 500);
                   
       
       

    });
    $(".i-show").click(function() {
            $('body,html').animate({scrollTop: 5440},10);
            //setInterval(function(){
              $(".i-packages").css('background-color', '#fff'); 
              $(".i-hotel").css('background-color', '#fff');
              $(".i-tour").css('background-color', '#fff');
              $(".i-boat").css('background-color', '#fff');
              $(".i-wedding").css('background-color', '#fff');
              $(".i-eating").css('background-color', '#fff');
              $(".i-golf").css('background-color', '#fff');               
              $(".i-show").css('background-color', '#999');
            // }, 500);
                   
       
       

    });

});