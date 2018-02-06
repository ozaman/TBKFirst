/**
 * Created by ozaclever on 11/07/2559.
 */

$(document).ready(function(){
	$(".res-menu").click(function(){
		$("#page-wrapper").hide();
		$("#mobile-menu-canvas").show();
		$('.main_menu_mobile').show();
		$('sub_menu_mobile').hide();
	});
	$('#back_to_wrapper').click(function(){
		$("#mobile-menu-canvas").hide();
		$("#page-wrapper").show();
	})
	$("#trig_by_menu").on("click",function(event){
		alert("click");
	})

	$('.navbar-header').scrollToFixed({ marginTop: 0
		//preFixed: function() { $(this).find('.btn_orange').css('height', 'auto');
	 });

 
	  $("#owl-demo").owlCarousel({
	 
	      //navigation : true, // Show next and prev buttons
	      slideSpeed : 400,
	      paginationSpeed : 400,
	      singleItem:true,
	      autoPlay : true
	 
	      // "singleItem:true" is a shortcut for:
	      // items : 1, 
	      // itemsDesktop : false,
	      // itemsDesktopSmall : false,
	      // itemsTablet: false,
	      // itemsMobile : false
	 
	  });
 

	/*$(".cityactive").click(function(){
		$('.cityactive').removeClass('cityactive');
		$('.c2').removeClass('cityactive');
		$('.c3').removeClass('cityactive');
		$('.c4').removeClass('cityactive');
		$(this).addClass('cityactive');
  	});
	$(".c2").click(function(){
		$('.cityactive').removeClass('cityactive');		
		$('.c3').removeClass('cityactive');
		$('.c4').removeClass('cityactive');
		$(this).addClass('cityactive');


  	});
  	$(".c3").click(function(){
		$('.cityactive').removeClass('cityactive');
		$('.c2').removeClass('cityactive');		
		$('.c4').removeClass('cityactive');
		$(this).addClass('cityactive');


  	});
  	$(".c4").click(function(){
		$('.cityactive').removeClass('cityactive');
		$('.c2').removeClass('cityactive');
		$('.c3').removeClass('cityactive');		
		$(this).addClass('cityactive');


  	});
  	$(".all").click(function(){
		$('.active').removeClass('active');
		$('.rec').removeClass('active');
		$('.pop').removeClass('active');
		$('.pro').removeClass('active');
		$(this).addClass('active');


  	});



  	$(".rel").click(function(){
		$('.spa').removeClass('rel');
		$('.boat').removeClass('rel');
		$('.wedding').removeClass('rel');
		$('.driving').removeClass('rel');
		$('.golf').removeClass('rel');
		$('.package').removeClass('rel');
		$(this).addClass('rel');
  	});*/
  	$(".active").click(function(){
  		
  					$('#tour-select').css("display","none")
					$('#boat-select').css("display","none")
					$('#wedding-select').css("display","none")
					$('#diving-select').css("display","none")
					$('#package-select').css("display","none")
					$('#golf-select').css("display","none")
					$('#spa-select').css("display","none")
					$('#tour-select').css("display","block")
				$('.active').removeClass('active');
				$('.spa').removeClass('active');
				$('.boat').removeClass('active');
				$('.wedding').removeClass('active');
				$('.driving').removeClass('active');
				$('.golf').removeClass('active');
				$('.package').removeClass('active');
				$(this).addClass('active');
				
				
  	});
  	$(".spa").click(function(){
  					$('#tour-select').css("display","none")
					$('#boat-select').css("display","none")
					$('#wedding-select').css("display","none")
					$('#diving-select').css("display","none")
					$('#package-select').css("display","none")
					$('#golf-select').css("display","none")
					$('#spa-select').css("display","block")
				$('.active').removeClass('active');
				$('.spa').removeClass('active');
				$('.boat').removeClass('active');
				$('.wedding').removeClass('active');
				$('.driving').removeClass('active');
				$('.golf').removeClass('active');
				$('.package').removeClass('active');
				$(this).addClass('active');
				
  	});
  	$(".boat").click(function(){
  				$('#tour-select').css("display","none")
				$('#boat-select').css("display","none")
				$('#wedding-select').css("display","none")
				$('#spa-select').css("display","none")
				$('#diving-select').css("display","none")
				$('#package-select').css("display","none")
				$('#golf-select').css("display","none")
				$('#boat-select').css("display","block")

				$('.active').removeClass('active');
				$('.spa').removeClass('active');
				$('.boat').removeClass('active');
				$('.wedding').removeClass('active');
				$('.driving').removeClass('active');
				$('.golf').removeClass('active');
				$('.package').removeClass('active');
				$(this).addClass('active');
				
  	});

  	$(".wedding").click(function(){
  				$('#tour-select').css("display","none")
				$('#boat-select').css("display","none")
				$('#wedding-select').css("display","none")
				$('#spa-select').css("display","none")
				$('#diving-select').css("display","none")
				$('#package-select').css("display","none")
				$('#golf-select').css("display","none")
				$('#wedding-select').css("display","block")

			$('.active').removeClass('active');
				$('.spa').removeClass('active');
				$('.boat').removeClass('active');
				$('.wedding').removeClass('active');
				$('.driving').removeClass('active');
				$('.golf').removeClass('active');
				$('.package').removeClass('active');
				$(this).addClass('active');
				
  	});
  	$(".golf").click(function(){
  				$('#tour-select').css("display","none")
				$('#boat-select').css("display","none")
				$('#wedding-select').css("display","none")
				$('#spa-select').css("display","none")
				$('#diving-select').css("display","none")
				$('#package-select').css("display","none")
				$('#golf-select').css("display","block")

			$('.active').removeClass('active');
				$('.spa').removeClass('active');
				$('.boat').removeClass('active');
				$('.wedding').removeClass('active');
				$('.driving').removeClass('active');
				$('.golf').removeClass('active');
				$('.package').removeClass('active');
				$(this).addClass('active');
				
  	});
  	$(".package").click(function(){
  				$('#tour-select').css("display","none")
				$('#boat-select').css("display","none")
				$('#wedding-select').css("display","none")
				$('#spa-select').css("display","none")
				$('#diving-select').css("display","none")
				$('#golf-select').css("display","none")
				$('#package-select').css("display","block")

			$('.active').removeClass('active');
				$('.spa').removeClass('active');
				$('.boat').removeClass('active');
				$('.wedding').removeClass('active');
				$('.driving').removeClass('active');
				$('.golf').removeClass('active');
				$('.package').removeClass('active');
				$(this).addClass('active');
				
  	});
  	$(".driving").click(function(){
  					$('#tour-select').css("display","none")
					$('#boat-select').css("display","none")
					$('#wedding-select').css("display","none")
					$('#spa-select').css("display","none")
					$('#golf-select').css("display","none")
					$('#package-select').css("display","none")
					$('#diving-select').css("display","block")

				$('.active').removeClass('active');
				$('.spa').removeClass('active');
				$('.boat').removeClass('active');
				$('.wedding').removeClass('active');
				$('.driving').removeClass('active');
				$('.golf').removeClass('active');
				$('.package').removeClass('active');
				$(this).addClass('active');
				
  	});



	$('.rec').on( "click",
		function(){
			console.log("workkk");
			$(this).data('hover',true);
			$(this).css("background-color", "#3cbbac");

		},
     	function(){
     		$(this).data('hover',false);
     		//$(this).css("background-color", "#fff");
     	}
	    //$("active").css("background-color", "#fff");
	);
	/*$('#hotelclick').on("click",function(){
		//alert("work!!!");
    	location.href = "#hotels";
	});
	$('#tourclick').on("click",function(){
		//alert("work!!!");
    	location.href = "#tours";
	});*/

	/*$('.box-btn-select').scrollToFixed({
		  marginTop: -115,
	preFixed: function() { $(this).find('#tours').removeClass('.bar-1');
                           //$(this).find('.box-btn-select').css();
  	},
    postFixed: function() { $(this).find('.order_btn').css('display', 'none');}


	});*/
	$(window).scroll(function(){
    var x = $(window).scrollTop();
    if(x > 280){
      $('.box-btn-select').css('position','fixed')
      $('.box-btn-select').css('margin-top','100px')
      
      //$('.box-btn-select-submenu-tour').scrollToFixed({
      //marginTop:-155,
      //preFixed: function() { $(this).find('#tours').removeClass('.bar-1');
                               //$(this).find('.box-btn-select').css();
       // },
       // postFixed: function() { //$(this).find('.order_btn').css('display', 'none');
    }
    else{
      $('.box-btn-select').css('position','absolute')
      $('.box-btn-select').css('margin-top','300px')
      
              
    }


  });



    $('.navbar').scrollToFixed({
		  	marginTop: 0,
			marginRight:11,
    preFixed: function() { ;
  	},
    postFixed: function() { }


	});
	$('.style').scrollToFixed({
		  	marginTop: 50,
			marginRight:11,
    preFixed: function() { 
  	},
    postFixed: function() { }


	});




$('#hotel').scrollTop(function(){
	if (document.body.scrollTop == document.getElementById("hotel")) {
		alert("dsdasa");
	}
	console.log("dsfvsdfds");
		
		//$(this).find('.hotel').css('background-color', '#ccc');
}); 
		
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		if (x<1520) {
			$(".itour").css('background-color', '#fff');
			$(".ihotel").css('background-color', '#fff');
			$(".itransfer").css('background-color', '#fff');
            $(".ishopping").css('background-color', '#fff');
            $(".ieating").css('background-color', '#fff');
		}
		else if(x >= 1520 && x <1700){//transfer
			
			$(".itour").css('background-color', '#fff');
			$(".ihotel").css('background-color', '#fff');
			$(".itransfer").css('background-color', '#999');
            $(".ishopping").css('background-color', '#fff');
            $(".ieating").css('background-color', '#fff');


		}
        else if(x >= 2340 && x < 2500) {//tour
            //headerOff();
            $(".itransfer").css('background-color', '#fff');
            $(".itour").css('background-color', '#999');
            $(".ihotel").css('background-color', '#fff');
            $(".ishopping").css('background-color', '#fff');
            $(".ieating").css('background-color', '#fff');


        } 
        else if(x >= 3145 && x < 4000) {//hotel
        	$(".itransfer").css('background-color', '#fff');
            $(".ihotel").css('background-color', '#999');
            $(".itour").css('background-color', '#fff');
            $(".ishopping").css('background-color', '#fff');
            $(".ieating").css('background-color', '#fff');


        }
        /*else{
        	$(".itransfer").css('background-color', '#fff');
            $(".ihotel").css('background-color', '#fff');
            $(".itour").css('background-color', '#fff');
            $(".ishopping").css('background-color', '#fff');
            $(".ieating").css('background-color', '#fff');
        }*/
        
        
    });
    $(".itransfer").on( "click",function() { 
   
           $('body,html').animate({scrollTop: 1520}, 10);
            //setInterval(function(){
            	$(".itour").css('background-color', '#fff');
               $(".itransfer").css('background-color', '#999');
               $(".ihotel").css('background-color', '#fff');
               $(".ishopping").css('background-color', '#fff');
            	$(".ieating").css('background-color', '#fff');
             //}, 500);    
     
        
    });
 	$(".itour").click(function() {  
           $('body,html').animate({scrollTop: 2340}, 10);
            //setInterval(function(){
               $(".itour").css('background-color', '#999');
               $(".itransfer").css('background-color', '#fff');
               $(".ihotel").css('background-color', '#fff');
               $(".ishopping").css('background-color', '#fff');
            	$(".ieating").css('background-color', '#fff');
             //}, 500);    
     
        
    });
    $(".ihotel").click(function() {
            $('body,html').animate({scrollTop: 3145},10);
            //setInterval(function(){
              $(".ihotel").css('background-color', '#999'); 
              $(".itransfer").css('background-color', '#fff');
              $(".itour").css('background-color', '#fff');
              $(".ishopping").css('background-color', '#fff');
            $(".ieating").css('background-color', '#fff');
              
                   
       
       

    });

});
