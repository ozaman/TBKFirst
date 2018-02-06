/**
 * Created by ozaclever on 11/07/2559.
 */


var app = angular.module('myApp', ['ngCookies','ngRoute','ngSanitize']);
    app.controller('myCtrl', function($scope, $location, $http, $cookies,$sce,$filter,$window,$interval) {
       angular.element(document.querySelector('#inTurnFadingTextG')).css('display', 'none');
       $scope.anmateprocess = { 'display':'none'};
        //$cookies.remove("idround");
      
    var host = 2;
    var ip = "";
    if (host == 1) {
        ip = "http://gh-travel.com";
    }
    else{
        ip = "http://localhost:8080"
    }
     
    $scope.cart = [];
    if (typeof localStorage["item"] !== "undefined" && localStorage["item"] !== "undefined") {
        $scope.cart = JSON.parse(localStorage["item"]);
        //console.log($scope.cart);
    }
    $scope.carttransfer = [];
        if (typeof localStorage["itemtransfer"] !== "undefined" && localStorage["itemtransfer"] !== "undefined") {
            $scope.carttransfer = JSON.parse(localStorage["itemtransfer"]);
            //console.log($scope.carttransfer);
    }
    $scope.view = [];
    if (typeof localStorage["view"] !== "undefined" && localStorage["view"] !== "undefined") {
        $scope.view = JSON.parse(localStorage["view"]);        
        if ($scope.view.length > 3) {
            $scope.view.splice($scope.view.indexOf($scope.view[0]),1);
            localStorage.setItem('view',JSON.stringify($scope.view));
        }
    }
    $scope.onlyWeekendsPredicate = function(date) {
    var day = date.getDay();
    return day === 0 || day === 6;
  };

    $scope.data = JSON.parse($location.search().data);
    console.log($scope.data);
     $scope.selectedAllotment = {
            child : 0,
            adult : 0
        }
    var monthMatcher = {
            "January" : 0,
            "February" : 1,
            "March" : 2,
            "April" : 3,
            "May" : 4,
            "June" : 5,
            "July" : 6,
            "August" : 7,
            "September" : 8,
            "October" : 9,
            "November" : 10,
            "December" : 11
        }
      $scope.sumprice_adult_child = 0;
      $scope.sumprice_adult = 0;
      $scope.sumprice_child = 0;
      //$scope.amount_adult = 0;
      //$scope.amount_child = 0;
      $scope.sumamount = 0;
      $scope.adultshow = 0;
      $scope.childshow = 0;
       $scope.gallery =[];
       $scope.sumchild = 0;
       $scope.sumadult = 0;
       $scope.amount = 0;
       $scope.front = new Array();
       $scope.textfinal;
       $scope.adult = [];
        $scope.child = [];
        $scope.idround;
        var x = 100;
        for (var i = 1; i <= x; i++) {
          $scope.adult.push(i);
          
        }
        console.log($scope.adult);
        var x2 = 100;
        for (var i = 1; i <= x2; i++) {
          $scope.child.push(i);
          
        }
        console.log($scope.child);



      console.log($scope.data);
      loadpage();
    function loadpage(){
      if($cookies.get('login'))
      {
        $scope.loginstatus = false;
        $scope.token = $cookies.get('login');
        $http({
                method:'post',
                url: "/getuserbyid",
                data: $.param({id: $cookies.get('login')}),
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(res){
                if (res[0].resource == "") {               
                    $scope.Profile= "profile.png";
                }
                else{
                    $scope.Profile = res[0].resource;
                }
                $scope.userEmail = res[0].email;
                $scope.loginname = res[0].fname+" "+res[0].lname;
            });
      }
      else
      {
        $scope.loginstatus = true;
      }
    }
     $scope.profile = function(){
        location.href="profile";

    }
    $scope.login = function(){
       angular.element(document.querySelector('#inTurnFadingTextG')).css('display', 'block');
      if($scope.username!=undefined&&$scope.password!=undefined)
      {
            $http({
                method:'post',
                url: "/login",
                data: $.param({username: $scope.username,password: $scope.password}),
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(res){
               angular.element(document.querySelector('#inTurnFadingTextG')).css('display', 'none');
              if(res.status==0)
              {
                $cookies.put('login', res.username);
                $window.location.reload();
              }
              else if(res.status==1)
              {
                angular.element(document.querySelector('#message')).html('Username is Invalid').css('color', 'red');
              }
              else if(res.status==2)
              {
                angular.element(document.querySelector('#message')).html('Password is Invalid').css('color', 'red');
              }
            })
        }
        }
        $scope.logout = function(){
          $cookies.remove("login");
          $window.location.reload();
        }
      $http({
            method : 'post',
            url : "/api/Getdatagallery/"+$scope.data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
              console.log(res);
              //console.log(parseInt($scope.data));
              for(var i = 0; i < res.data.length; i++  ){


                console.log(res.data[i]);
                $scope.gallery[i] = res.data[i];

                //console.log($scope.gallery);
              }
              i = res.data.length;
              $cookies.put("check", i);
              angular.element(document.querySelector('#gallery-select-value')).triggerHandler('click');

            }

      });
          //localStorage.clear();
            $scope.round_en;
            $scope.dateon = new Array();
          $http({
            method : 'post',
            url : "/api/Getselectdataproduct/"+$scope.data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
              console.log(res.data)
              
             

              
              $scope.province = res.data[0].province;
              console.log($scope.province);
              $scope.round_en = res.data[0].round_en;
              console.log($scope.round_en);
              //console.log(res.data);
              $scope.topic_en = res.data[0].topic_en;
              $scope.topic_th = res.data[0].topic_th;
              $scope.topic_cn = res.data[0].topic_cn;
              //$scope.cost_a_agent_all = res.data[0].cost_a_agent_all;
              //$scope.cost_b_agent_all = res.data[0].cost_b_agent_all;
               $scope.detail_en = res.data[0].detail_en;
               $scope.detail_th = res.data[0].detail_th;
               $scope.detail_cn = res.data[0].detail_cn;

              $scope.product =  res.data;
              $scope.sumprice_adult = res.data[0].cost_a_agent_all;
              $scope.sumprice_child = res.data[0].cost_b_agent_all;
              $cookies.put("coatadult", $scope.sumprice_adult);
              console.log($scope.product);
            }

      });
      $scope.havetime = new Array();
      $http({
        method : 'post',
        url : "/api/Gettime/"+$scope.data,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function(res){
        if(res.status == "ok"){
          $scope.select = res.data;
         
          console.log($scope.select);
          for (var i = 0; i < res.data.length; i++) {

          if((res.data[i].show_h == undefined && res.data[i].show_m == undefined)&&((res.data[i].show_h == null && res.data[i].show_m == null)))
          {
            console.log("in und")
              $scope.havetime = $scope.round_en;
              console.log($scope.havetime);

          }
          else {
            console.log("in !und")
              var fon = ":";
              //$scope.havetime = res.data[i];//$scope.select[i].show_h + fon + $scope.select[i].show_m;
                $scope.havetime.push(res.data[i]);
                console.log($scope.havetime);

                if(res.data.length == 1 ){
                  $scope.idround = res.data[i].id;
                  var t;
                  t = res.data[0].show_h + fon + res.data[0].show_m;
                  $scope.textfinal= t;
                  console.log(t);
                  console.log("work!!!!");
                  
                  $cookies.put("idround", $scope.idround);
                }
          }
          //for (var i = 0; i < res.data.length; i++) {
          //  $scores.data[i]
          //}
          console.log($scope.textfinal);
          console.log($scope.idround+"Round ID...........")
        }
        }

  });
  //$scope.resspa = new Array();
  $http({
      method : 'post',
      url : "/api/Getproduct_onfront",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(res){

      if(res.status == "ok"){
        for (var i = 0; i < 4; i++) {
          $scope.front.push(res.data[i]);
            
        }
        

      }
    });
    $scope.addCartfront = function (item) {
      console.log(item);
      console.log(item.id);
      $scope.detail_en = item.detail_en;
      console.log($scope.detail_en);
      //console.log($scope.data);
      $http({
            method : 'post',
            url : "/api/Getdatagallery/"+item.id,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
              console.log(res);
                //$scope.detail_en = res.data[0].detail_en;
              //console.log(parseInt($scope.data));
              for(var i = 0; i < res.data.length; i++  ){


                console.log(res.data[i]);
                $scope.gallery[i] = res.data[i];

                //console.log($scope.gallery);
              }
              i = res.data.length;
              $cookies.put("check", i);
              angular.element(document.querySelector('#gallery-select-value')).triggerHandler('click');
              $window.open('view-item#?data=' + JSON.stringify(item.id));
            }

      });
    }
  //$scope.keyword = new Array();
  //$scope.textfinal = '';
  console.log($scope.havetime.length);
  $scope.timeselect = function (event) {
    console.log(event)
    $cookies.remove("idround");
    $cookies.put("idround", event.id);
    console.log(event);
    console.log(event.id)
    console.log($cookies.get('idround'))
    console.log($scope.province);
    var fon = ":";
    var x = event.show_h + fon + event.show_m;
    $scope.textfinal = x;
    //alert( $scope.textfinal)
    console.log(event.id);
   $scope.idround = event.id;
   console.log($scope.idround+"Round ID...........2")

  }
  $scope.deletekeyword = function(input) {
    console.log(input);
    var x = '';
     $scope.textfinal = x;
     //$scope.textfinal.push();
    /*if($scope.keyword.length==1)
            {
              var index = $scope.keyword.indexOf(input);
              $scope.keyword.splice(index,1);
              var text = 0;
            }
            else
            {
              var index = $scope.keyword.indexOf(input);
              $scope.keyword.splice(index,1);
              var text;
                      for(var i = 0 ; i < $scope.keyword.length ; i++)
                      {
                        if($scope.keyword.length==1)
                      {
                        text = $scope.keyword[0];
                        break;
                      }
                      else if(i==0)
                      {
                        text = $scope.keyword[i]
                      }
                      else
                      {
                        text += $scope.keyword[i];
                      }
                      }
                    }*/

  }
      $scope.adultSelect = function(person){
            console.log(person)
            $scope.adultshow = person;
            $scope.sumadult = (person * $scope.sumprice_adult);
            $scope.sumprice_adult_child = $scope.sumadult + $scope.sumchild;
      }
      $scope.childSelect = function(person2){
            console.log(person2)
            $scope.childshow = person2;
            $scope.sumchild = (person2 * $scope.sumprice_child);
             $scope.sumprice_adult_child = $scope.sumadult + $scope.sumchild;
           
      }

      $scope.addCart = function(product){
          console.log($scope.textfinal);

          /*for (var i = 0; i < $scope.time.length; i++) {
            if(i == 2)
            {
              $scope.time.replace(($scope.time),2);
              console.log($scope.time);
            }

          }*/
          //var s1 = $scope.time.substr(0,2);
          //var s2 = $scope.time.substr(2);
          //var s0 = ":";
          //$scope.finaltime = s1 + s0 + s2;
          //console.log($scope.finaltime);
          //console.log(s0);
          //console.log(s1);
          //console.log(s2);
        
          console.log($scope.product);
          $scope.date = $('#booking-date').val();
            console.log($scope.date)
            var slitedDate = $scope.date.split("/");
            $scope.ondate = slitedDate[0]+'-'+slitedDate[1]+'-'+slitedDate[2];
           

            $scope.state = false
            angular.forEach($scope.product, function (data) {
                data.adultshow = $scope.adultshow;
                data.childshow = $scope.childshow;
                data.departure = $scope.ondate;
                data.price =  $scope.sumprice_adult_child;
                data.amount = $scope.adultshow+$scope.childshow;
                data.time = $scope.textfinal;
                data.idround = $scope.idround;

                console.log(data);

          });
          $scope.cart.push($scope.product);
          localStorage.setItem('item', JSON.stringify($scope.cart));
          //console.log($scope.cart);
          location.href="cart";
      }
      /*$scope.getItem = function(){
        $scope.cart = JSON.parse(localStorage.getItem('item'));
      }*/

      $scope.removeCart = function(product){
          $scope.cart.splice($scope.cart.indexOf(product),1);
          localStorage.setItem('item',JSON.stringify($scope.cart));

      }
      $scope.img_click = function(input){
            //alert(input);
            //input+=1;
            $cookies.put("check", input);
      }
      $scope.gohome = function(input){
            location.href= ip;
      }

      $scope.gotour = function(){
        location.href="tour";
      }
      
      
      $scope.gohotel = function() {
        location.href="hotels";
      }
      $scope.transfer = function(){
      location.href="Transports";

    }
     $scope.restaurant = function(){
        location.href="restaurant";

      }
      $scope.shopping = function(){
        location.href="shopping";

      }

      $scope.returnhtml = function(x) {
          //console.log(x);
      //var x = '<h1 style="color:#F0F">TEST</h1><img src="https://i.stack.imgur.com/BfuKj.jpg?s=32&g=1" />';
      return $sce.trustAsHtml(x);

    }
       
        
            

        $scope.plus = function(){


            $scope.adultshow = $scope.adultshow + 1;
            //$scope.amount = $scope.adultshow;
            //console.log($scope.amount);
            //console.log($scope.adultshow);
            $scope.sumadult = ($scope.adultshow*$scope.sumprice_adult);
            $scope.sumprice_adult_child = $scope.sumadult + $scope.sumchild;

            console.log($scope.sumprice_adult_child);
            console.log($scope.adultshow);

        }
        $scope.minus = function(){

            $scope.adultshow = $scope.adultshow - 1;
              if($scope.adultshow<=0)
            {
                if($scope.childshow==0)
                {
                    $scope.adultshow = 0;
                }
                else
                {
                    $scope.adultshow = 0;
                }
            }

                $scope.sumadult = ($scope.adultshow*$scope.sumprice_adult);
                $scope.sumprice_adult_child = $scope.sumadult + $scope.sumchild;
                console.log($scope.sumprice_adult_child);
                console.log($scope.adultshow);

        }


        $scope.plus1 = function(){

            $scope.childshow = $scope.childshow + 1;
            console.log($scope.childshow);


            $scope.sumchild = ($scope.sumprice_child* $scope.childshow);
            $scope.sumprice_adult_child = $scope.sumadult + $scope.sumchild;
            console.log($scope.sumchild);

        }
        $scope.minus1 = function(){
            //alert('minus');
            $scope.childshow = $scope.childshow - 1;
            if($scope.childshow<=0)
            {
                if($scope.adultshow==0)
                {
                    $scope.childshow = 0;
                }
                else
                {
                    $scope.childshow = 0;
                }
            }
                    console.log($scope.childshow);
                  $scope.sumchild = ($scope.childshow*$scope.sumprice_child);
                  $scope.sumprice_adult_child = $scope.sumadult + $scope.sumchild;

                  console.log($scope.sumchild);



        }



        $scope.booking_now = function(product){
          console.log($scope.adultshow);
          console.log($scope.childshow);
          console.log($scope.product);
          $scope.date = $('#booking-date').val();
            var slitedDate = $scope.date.split(" ");
            slitedDate[1] = slitedDate[1].replace(',', '');
            var d = new Date();
            d.setDate(slitedDate[0]);
            d.setMonth(monthMatcher[slitedDate[1]]);
            d.setYear(slitedDate[2]);
            $scope.d = d;
            $scope.state = false
            angular.forEach($scope.product, function (data) {
                data.adultshow = $scope.adultshow;
                data.childshow = $scope.childshow;
                data.departure = $scope.d;
                data.price =  $scope.sumprice_adult_child;
                data.amount = $scope.adultshow+$scope.childshow;
                data.idround = $scope.idround;


                console.log(data);

          });
          $scope.cart.push($scope.product);
          localStorage.setItem('item', JSON.stringify($scope.cart));
          //console.log($scope.cart);
          location.href="cart";

          }
          $scope.select_item_view = function(item,x4){
            
       if (item.type == "Private" || item.type == "Join") {
           
              $window.open('transfer-view#?data=' + JSON.stringify(item.transfer_id));

          }
          else{
            $cookies.remove("dateon");
            $scope.dateon = new Array();
        $scope.dateon.push(item.open_Sun)
        $scope.dateon.push(item.open_Mon)
        $scope.dateon.push(item.open_Thu)
        $scope.dateon.push(item.open_Wed)
        $scope.dateon.push(item.open_Tue)
        $scope.dateon.push(item.open_Fri)
        $scope.dateon.push(item.open_Sat)
        console.log($scope.dateon) 
        $cookies.put("dateon", $scope.dateon);
        angular.element(document.querySelector('#dateon')).triggerHandler('dateon');
           
            
            $window.open('view-item#?data=' + JSON.stringify(item.id));

          }
        }
        $scope.select_item = function(item,x4){
       if (item.type == "Private" || item.type == "Join") {
            $scope.view.push(item);
              //console.log(item.transfer_id); 
              $window.open('transfer-view#?data=' + JSON.stringify(item.transfer_id));

          }
          else{
            $cookies.remove("dateon");
            $scope.dateon = new Array();
        $scope.dateon.push(item.open_Sun)
        $scope.dateon.push(item.open_Mon)
        $scope.dateon.push(item.open_Thu)
        $scope.dateon.push(item.open_Wed)
        $scope.dateon.push(item.open_Tue)
        $scope.dateon.push(item.open_Fri)
        $scope.dateon.push(item.open_Sat)
        console.log($scope.dateon) 
        $cookies.put("dateon", $scope.dateon);
        angular.element(document.querySelector('#dateon')).triggerHandler('dateon');
            $scope.view.push(item);
            localStorage.setItem('view',JSON.stringify($scope.view));             
        //angular.element(document.querySelector('#get-select-value')).triggerHandler('click',$scope.tour);
            $window.open('view-item#?data=' + JSON.stringify(item.id));

          }
        }
      $scope.cartBook = function(){
        location.href="cart";

      }
      /*var timenow = new Date();
        timenow.setDate(timenow.getDate()+1);
        $scope.nowshow = timenow;
        //console.log($scope.nowshow);

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
            timenow.setDate(timenow.getDate());
            $scope.nowshow = timenow;
        }
        else if(datenow > new Date(text3) && datenow <= new Date(text4))
        {
            timenow.setDate(timenow.getDate()+1);
            $scope.nowshow = timenow;
        }

        $scope.now = new Date();
        $scope.datess= new Date();*/

      var language = $cookies.get('language');
      if(language==undefined){
          $cookies.put("language", 1);
          $scope.flag = 'English';
          $scope.flagcheck = 1;
      }
      else if(language==1){
          $scope.flag = 'English';
          $scope.flagcheck = 1;
      }
      else if(language==2){
          $scope.flag = 'Thai';
          $scope.flagcheck = 2;
      }
      else if(language==3){
          $scope.flag = '中文(简体)';
          $scope.flagcheck = 3;
      }
      $scope.language = function(x){

            $scope.body = { 'display':'none'};
            $scope.anmateprocess = { 'display':'block'};
            var interval;
            interval =  $interval(function() {

            if(x==1){          
                $cookies.remove("language");
                $cookies.put("language", 1);
                $scope.flag = 'English';
                $scope.flagcheck = 1;
                $scope.placeholderto = 'To';
                $scope.placeholder = 'From';
            }
            else if(x==2){
              
                $cookies.remove("language");
                $cookies.put("language", 2);
                $scope.flag = 'Thai';
                $scope.flagcheck = 2;
                $scope.placeholderto = 'ไปยัง';
                $scope.placeholder = 'จาก';
              //event_change_month("th");
            }
            else if(x==3){
              
                $cookies.remove("language");
                $cookies.put("language", 3);
                $scope.flag = '中文(简体)';
                $scope.flagcheck = 3;
                 $scope.placeholderto = '至';
                $scope.placeholder = '從';
            }
            $scope.body = { 'display':'block'};
            $scope.anmateprocess = { 'display':'none'};
            $interval.cancel(interval);
           
        },1000 );
        }
  });
app.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src != attrs.errSrc) {
          attrs.$set('src', attrs.errSrc);
        }
      });
    }
  }
});
