/**
 * Created by ozaclever on 11/07/2559.
 */


$(document).ready(function(){

  var checkslide;
  var sum1 = 0;
  var o = 0;
  init();
  var x1,x2,x3,x4,x5,x6,x7;

    function init() {

  }
  $('#calendar').fullCalendar({
    
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listWeek'
      },
      defaultDate: '2016-09-12',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2016-09-01'
        },
        {
          title: 'Long Event',
          start: '2016-09-07',
          end: '2016-09-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-09-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-09-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2016-09-11',
          end: '2016-09-13'
        },
        {
          title: 'Meeting',
          start: '2016-09-12T10:30:00',
          end: '2016-09-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2016-09-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2016-09-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2016-09-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2016-09-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2016-09-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2016-09-28'
        }
      ]
    });
  /*$.get('ajax.html', function(data){
          modal.open({content: data});
        });*/

        /*$('.btn-costs').click(function(e){
          modal.open({content: "Hows it going?"});
          e.preventDefault();
        });*/

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
//var myVar = setInterval(slider_auto,5000);
  function set_slide_check(input){
    if(input==1)
    {
       clearInterval(myVar);
    }
    else
    {
      //myVar = setInterval(slider_auto,5000);
    }
  }

  /*function slider_auto(){
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
  }*/


  $(".slides2").click(function(){
      var x = $.cookie('check');
      //clearInterval(myVar);
      x *= 700;
      x *= -1;
      var x = x+'px';
      //console.log(x);
      $( ".slides1" ).animate({
        left: x
      }, 200, function() {

      });
      //myVar = setInterval(slider_auto,5000);
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

  });

  $('.product_nav').scrollToFixed({
    marginTop: 0,
    preFixed: function() { $(this).find('.btn_orange').css('display', 'block');
                           $(this).find('.product_li').css('margin-top', '0');
  },
    postFixed: function() { $(this).find('.btn_orange').css('display', 'none');}


     });
  $('.header').scrollToFixed({
    marginTop: 0,
    preFixed: function() { $(this).find('.btn_orange').css('display', 'block');

  },
    postFixed: function() { $(this).find('.btn_orange').css('display', 'none');}


     });
  $('.product_nav').scrollToFixed({
    marginTop: 60,
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

  var datecheck = new Date();
  var text1 = datecheck.getFullYear()+'-'+[parseInt(datecheck.getMonth())+1]+'-'+datecheck.getDate()+" 00:00:00";
  var text2 = datecheck.getFullYear()+'-'+[parseInt(datecheck.getMonth())+1]+'-'+datecheck.getDate()+" 18:00:00";
  var text3 = datecheck.getFullYear()+'-'+[parseInt(datecheck.getMonth())+1]+'-'+datecheck.getDate()+" 18:00:00";
  var text4 = datecheck.getFullYear()+'-'+[parseInt(datecheck.getMonth())+1]+'-'+datecheck.getDate()+" 23:59:59";
  //------test time ----------
  //var text5 = "2016-3-30 20:30:01";
  //--------------------------
  var datenow = new Date(); 
  var x = $.cookie('dateon');
  console.log(x);
  var dateon = x.split(','); 
  console.log(dateon)
    if (dateon[0] == 1) {//
      x0 = 0;
    }
    else{
      x0 = null;
    }
    if (dateon[1] ==1) {
      x1 = 1;
    }
    else{
      x1 = null;
    }
    if (dateon[2] == 1) {
      x2 = 2;
    }
    else{
      x2 = null;
    }
    if (dateon[3] == 1) {
      x3 = 3;
    }
    else{
      x3 = null;
    }
    if (dateon[4] == 1) {
      x4 = 4;
    }
    else{
      x4 = null;
    }
    if (dateon[5] == 1) {
      x5 = 5;
    }
    else{
      x5 = null;
    }
    if (dateon[6] == 1) {
      x6 = 6;
    }
    else{
      x6 = null;
    }
  
    
  if(datenow >= new Date(text1) && datenow <= new Date(text2))
  {
    var to = new Date();
    to.setDate(to.getDate());
  }
  else if(datenow > new Date(text3) && datenow <= new Date(text4))
  {
    var to = new Date();
    to.setDate(to.getDate()+1);
     console.log(to)
  }
 
  var from = new Date();
  console.log(from)
  $.datepicker.setDefaults($.datepicker.regional['idround']);
  $('.booking-input').datepicker({    
    minDate : to,
    beforeShowDay: function(date){
      var day = date.getDay();
     return [ day == x0 ||
              day == x1 ||
              day == x2 ||
              day == x3 ||
              day == x4 ||
              day == x5 ||
              day == x6,'']; 
    }
    
   

  });
  
    

 });