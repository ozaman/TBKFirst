$(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $('.dropdown-menu2', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('.caret', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $('.dropdown-menu2', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('.caret', this).toggleClass("caret caret-up");                
            });
    var x =1;
    $(".navbar-toggle").click(            
            function() {
               
                console.log(x);
                if (x == 1) {
                    x++;
                    console.log(x)
                //$('#menu', this).addClass("menu");
                $( ".menu" ).animate({
                    left: 230
                    }, 200, function() {

                });
                }
                else{
                    console.log("in case =2")
                    $( ".menu" ).animate({
                        left: -230
                        }, 200, function() {

                    });
                    x= 1;
                }

                               
            /*},
            function() {
                
                $( ".menu" ).animate({
                left: -230
                }, 200, function() {

            });
                //console.log(x);*/
                               
    });
    $(".navbar-toggle").hover(            
            function() {
                   
            },
            function() {
                
                $( ".menu" ).animate({
                left: -230
                }, 200, function() {

            });
                //console.log(x);*/
                               
    });
    $('option').hover(function(){
        alert("asas")
$(this).css("background-color","#FFFFCC");
}); 
    
});