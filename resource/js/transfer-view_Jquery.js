/**
 * Created by ozaclever on 11/07/2559.
 */


$(document).ready(function(){

  var opentouchtouro = function() {
    $('#touro-show').css('top','0');
    $( "#touro-show" ).draggable({
        axis : "y",
        scrollSpeed: 100,
        scroll : false,
        connectToSortable: "#tourother",
        drag: function(event, ui) {
            $.cookie('dragr', 1);
        },
        stop: function( event, ui ) {
            var sum = 0;
            $('#touro-show li').each(function() {
                sum += $(this).height();
                console.log("height is :");
                console.log($(this).height());
                sum += 10;
            });
            console.log("Sum = "+sum);
            current_tourr = sum;
            var x = $('#touro-show').css('top');
            x = parseInt(x);
            var ele = (x*-1) / 140;
            var num = Math.round(ele);
            var d = $('.tour-frame-o').css('height');
            if(d == '551px'){
                var h = sum - 560;
            }
            else{
                var h = sum - 280;
            }
            h *= -1;
            if(x>0){
                $( "#touro-show" ).animate({
                    top: 0
                }, 700, function() {});
            }
            else if(x<h)
            {
                console.log("h is : "+h);
                if(d == '551px'){
                    if(sum>560)
                    {
                        $( "#touro-show" ).animate({
                            top: h
                        }, 700, function() {});
                    }
                    else
                    {
                        $( "#touro-show" ).animate({
                            top: 0
                        }, 700, function() {});
                    }
                }
                else{
                    if(sum>280)
                    {
                        $( "#touro-show" ).animate({
                            top: h
                        }, 700, function() {});
                    }
                    else
                    {
                        $( "#touro-show" ).animate({
                            top: 0
                        }, 700, function() {});
                    }
                }
            }
            else
            {
                var i = num * 140;
                i = i * -1;
                $( "#touro-show" ).animate({
                    top: i
                }, 400, function() {});
            }
        }
    });
  };

	/*var checkslide;
	var sum1 = 0;
  var o = 0;
	init();

  	function init() {

	}

  
	$('#gallery-select-value').on( "click", function() {


    checkslide = $.cookie('check');
    //console.log(checkslide);
    //slidebigimage();
    if(o == 0)
    {
      sum1 += 700*(checkslide-2);
      sum1 += 10;
      //console.log(sum1);
      o++;
    }
    else
    {
      sum1 = 0;
      sum1 += 700*(checkslide-2);
      sum1 += 10;
    }
});
var myVar = setInterval(slider_auto,5000);
  function set_slide_check(input){
    if(input==1)
    {
       clearInterval(myVar);
    }
    else
    {
      myVar = setInterval(slider_auto,5000);
    }
  }

	function slider_auto(){
    var x = $('.slides1').css('left');
      //console.log(x);
      //console.log("sum1"+sum1);
      x = x.split('px');
      x = x[0];
      x *= -1;
      //console.log("x"+x);
      if(x>=sum1)
      {
        //console.log(sum1);
        console.log("back");
        $( ".slides1" ).animate({
          left: 0
        }, 1000, function() {
          // Animation complete.
        });
      }
      else {
        x += 700;
        x *= -1;
        var text = x+'px';
        $( ".slides1" ).animate({
          left: text
        }, 1000, function() {
          // Animation complete.
        });
      }
  }


  $(".slides2").click(function(){
      var x = $.cookie('check');
      clearInterval(myVar);
      x *= 700;
      x *= -1;
      var x = x+'px';
      //console.log(x);
      $( ".slides1" ).animate({
        left: x
      }, 200, function() {

      });
      myVar = setInterval(slider_auto,5000);
    });

$('.btn-right').click(function(){
    console.log("btn-left");
    n = $.cookie('check');
    //console.log("aaaaaaaaaaaaaaaaaaaaaaaa"+n);
    var max = 0;
    max += 123*n;
    max *= -1;
    max += 492;

    console.log(max);

    var bt_left = $('.slides2').css('left');
    console.log(bt_left);

    bt_left = bt_left.split('px')[0];
    //console.log(bt_left);
    bt_left *= -1;
    bt_left += 123;
    bt_left *= -1;
    var text = bt_left+'px';
    console.log(text);
    if(bt_left > max)
      {
          $( ".slides2" ).animate({
            left:text
          }, 200, function() {

          });
      }
      else
      {
        $( ".slides2" ).animate({
            left:max
          }, 200, function() {

          });
      }
  });


  $('.btn-left').click(function(){
    console.log("btn-right");
    var bt_right = $('.slides2').css('left');
    //console.log(bt_right);
    //console.log(typeof bt_right);
    bt_right = parseInt(bt_right);
    console.log(typeof bt_right);
    //console.log("bt_right is = "+bt_right);
    bt_right += 123;
    console.log("bt_right is = "+bt_right);
    var text2 = bt_right + 'px';
    console.log(text2);
    if(bt_right<0){
      $( ".slides2" ).animate({
          left:text2
          }, 200, function() {

       });
    }
    else{
      $( ".slides2" ).animate({
          left:0
       }, 200, function() {

      });
    }

  });*/

  $('.product_nav').scrollToFixed({
    marginTop: 62,
    preFixed: function() { $(this).find('.btn_orange').css('display', 'block');
                           $(this).find('.product_li').css('margin-top', '0');
  },
    postFixed: function() { $(this).find('.btn_orange').css('display', 'none');}


     });
  /*$('.navbar-default').scrollToFixed({
    marginTop: 0,
    preFixed: function() { $(this).find('.btn_orange').css('display', 'block');
                           $(this).find('.product_li').css('margin-top', '0');
  },
    postFixed: function() { $(this).find('.btn_orange').css('display', 'none');}


     });*/
     $('.navbar').scrollToFixed({ marginTop: 0
    //preFixed: function() { $(this).find('.btn_orange').css('height', 'auto');
   });
  $('.header').scrollToFixed({
    marginTop: 0,
    preFixed: function() { $(this).find('.btn_orange').css('display', 'block');

  },
    postFixed: function() { $(this).find('.btn_orange').css('display', 'none');}


     });

  var datecheck = new Date();
  var text1 = datecheck.getFullYear()+'-'+[parseInt(datecheck.getMonth())+1]+'-'+datecheck.getDate()+" 00:00:00";
  var text2 = datecheck.getFullYear()+'-'+[parseInt(datecheck.getMonth())+1]+'-'+datecheck.getDate()+" 20:30:00";
  var text3 = datecheck.getFullYear()+'-'+[parseInt(datecheck.getMonth())+1]+'-'+datecheck.getDate()+" 20:30:00";
  var text4 = datecheck.getFullYear()+'-'+[parseInt(datecheck.getMonth())+1]+'-'+datecheck.getDate()+" 23:59:59";
  //------test time ----------
  //var text5 = "2016-3-30 20:30:01";
  //--------------------------
  var datenow = new Date();
  if(datenow >= new Date(text1) && datenow <= new Date(text2))
  {
    var to = new Date();
    to.setDate(to.getDate());
  }
  else if(datenow > new Date(text3) && datenow <= new Date(text4))
  {
    var to = new Date();
    to.setDate(to.getDate()+1);
  }


  var from = [1916,0,1];
  $('.booking-input').pickadate({
    //var datesToDisable = [ 1, 4, 7, [2015,3,8], [2015,3,19], new Date(2015,3,26) ]
    disable: [ { from: from, to: to } ]
  });

   var sliderOptions=
  {
    sliderId: "slider",
    startSlide: 0,
    effect: "series1",
    effectRandom: false,
    pauseTime: 2600,
    transitionTime: 500,
    slices: 12,
    boxes: 8,
    hoverPause: 1,
    autoAdvance: true,
    thumbnailsWrapperId: "thumbs",
    m: false,
    license: "mylicense"
  };

var imageSlider=new mcImgSlider(sliderOptions);




  var sync1 = $("#sync1");
  var sync2 = $("#sync2");

  sync1.owlCarousel({
    autoPlay : 3000,
    singleItem : true,
    slideSpeed : 1000,

    

    navigation: false,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200


  });

  /*sync2.owlCarousel({
    autoPlay : 3000,
    items : 4,
    navigation: true,
    navigationText: [ ],
    //navigationText : ["prev","next"],
    rewindNav : true,
    magin : 1,
    itemsDesktop      : [1199,10],
    itemsDesktopSmall     : [979,10],
    itemsTablet       : [768,8],
    itemsMobile       : [479,4],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });*/

  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }

  $("#sync2").on("click", ".owl-item", function(e){
    console.log(e);
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });

  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }

    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }

  }

 });
