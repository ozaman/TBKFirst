var app = angular.module('myApp', ['ngCookies','ngRoute','ngSanitize']);
  app.controller('myCtrl', function($scope, $location, $http, $cookies,$sce,$filter) {
     angular.element(document.querySelector('#inTurnFadingTextG')).css('display', 'none');
      //$scope.product = new Array();
      var host = 2;
     var ip = "";
     if (host == 1) {
          ip = "http://gh-travel.com";
     }
     else{
          ip = "http://localhost:8080"
     }
     
      $scope.cart = [];
    if (typeof localStorage["itemhotel"] !== "undefined" && localStorage["itemhotel"] !== "undefined") {
      $scope.cart = JSON.parse(localStorage["itemhotel"]);
      console.log($scope.cart);
    }
    $scope.carttransfer = [];
         if (typeof localStorage["itemtransfer"] !== "undefined" && localStorage["itemtransfer"] !== "undefined") {
      $scope.carttransfer = JSON.parse(localStorage["itemtransfer"]);
      console.log($scope.carttransfer);

    }
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
              $scope.Profile = res[0].resource;
              $scope.userEmail = res[0].email;
              $scope.loginname = res[0].fname+" "+res[0].lname;
            });
      }
      else
      {
        $scope.loginstatus = true;
      }
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

      console.log($scope.data);
      $http({
            method : 'post',
            url : "/api/Getgallery_hotel/"+$scope.data,
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
            //$scope.round_en;
          $http({
            method : 'post',
            url : "/api/Getselect_hotel/"+$scope.data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
              $scope.datahotel = res.data;
              console.log(res.data);
              //$scope.round_en = res.data[0].round_en;
              //console.log($scope.round_en);
              //console.log(res.data);
              $scope.topic_en = res.data[0].topic_en;
              //$scope.cost_a_agent_all = res.data[0].cost_a_agent_all;
              //$scope.cost_b_agent_all = res.data[0].cost_b_agent_all;
               $scope.detail = res.data[0].detail;

              $scope.product =  res.data;
              //$scope.sumprice_adult = res.data[0].cost_a_agent_all;
              //$scope.sumprice_child = res.data[0].cost_b_agent_all;
              $scope.product.forEach( function (item) {

              });
              console.log($scope.product);
            }

      });
      $scope.havetime = new Array();
      $http({
        method : 'post',
        url : "/api/Gettime/"+$scope.data.id,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function(res){
        if(res.status == "ok"){
          $scope.select = res.data;
          console.log($scope.select);
          for (var i = 0; i < res.data.length; i++) {
          if((res.data[i].show_h == undefined && res.data[i].show_m == undefined)&&((res.data[i].show_h == null && res.data[i].show_m == null)))
          {
              $scope.havetime = $scope.round_en;

          }
          else {
              var fon = ":";
              //$scope.havetime = res.data[i];//$scope.select[i].show_h + fon + $scope.select[i].show_m;
                $scope.havetime.push(res.data[i]);
                console.log($scope.havetime);
          }
          //for (var i = 0; i < res.data.length; i++) {
          //  $scores.data[i]
          //}
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
        //document.getElementById("cssload-container").style.display = "none";
        $scope.front = res.data;
        console.log(res.data);
        console.log(res.data.length);



       



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
  $scope.textfinal = '';
  $scope.timeselect = function ($event) {
                    var fon = ":";
                    var x = $event.show_h + fon + $event.show_m;
                    $scope.textfinal = x;

                    

  }
  $scope.deletekeyword = function(input) {
    console.log(input);
    var x = '';
     $scope.textfinal = x;
    

  }
      $scope.addCart = function(product){
          console.log($scope.textfinal);

         
          //var s1 = $scope.time.substr(0,2);
          //var s2 = $scope.time.substr(2);
          //var s0 = ":";
          //$scope.finaltime = s1 + s0 + s2;
          //console.log($scope.finaltime);
          //console.log(s0);
          //console.log(s1);
          //console.log(s2);
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
                data.time = $scope.textfinal;


                console.log(data);

          });
          $scope.cart.push($scope.product);
          localStorage.setItem('item', JSON.stringify($scope.cart));
          //console.log($scope.cart);
          location.href="http://localhost:8080/cart";
      }
      $scope.getItem = function(){
        $scope.cart = JSON.parse(localStorage.getItem('item'));
      }

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

      $scope.page2 = function(){
        location.href="page2";
      }
      $scope.train = function(){
        location.href="train";

      }
      $scope.air = function(){
        location.href="air";

      }
      $scope.transfer = function(){
      location.href="Transports";

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


                console.log(data);

          });
          $scope.cart.push($scope.product);
          localStorage.setItem('item', JSON.stringify($scope.cart));
          //console.log($scope.cart);
          location.href="http://localhost:8080/cart";

          }
      $scope.cartBook = function(){
        location.href="cart";

      }

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
          if(x==1){          
              $cookies.remove("language");
              $cookies.put("language", 1);
              $scope.flag = 'English';
              $scope.flagcheck = 1;
          }
          else if(x==2){
            
              $cookies.remove("language");
              $cookies.put("language", 2);
              $scope.flag = 'Thai';
              $scope.flagcheck = 2;
            //event_change_month("th");
          }
          else if(x==3){
            
              $cookies.remove("language");
              $cookies.put("language", 3);
              $scope.flag = '中文(简体)';
              $scope.flagcheck = 3;
          }
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
