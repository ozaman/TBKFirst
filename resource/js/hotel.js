/**
 * Created by ozaclever on 11/07/2559.
 */



var app = angular.module('myApp', ['ngCookies','ngRoute']);
  app.controller('myCtrl', function($scope, $location, $http, $cookies, $window) {
     angular.element(document.querySelector('#inTurnFadingTextG')).css('display', 'none');

    //$scope.cart = new Array();
   

    var host = 2;
     var ip = "";
     if (host == 1) {
          ip = "http://gh-travel.com";
     }
     else{
          ip = "http://localhost:8080"
     }
     $scope.cart = new Array();
    
    if (typeof localStorage["item"] !== "undefined" && localStorage["item"] !== "undefined") {
      $scope.cart = JSON.parse(localStorage["item"]);
      console.log($scope.cart);
    }
    $scope.carttransfer = [];
         if (typeof localStorage["itemtransfer"] !== "undefined" && localStorage["itemtransfer"] !== "undefined") {
      $scope.carttransfer = JSON.parse(localStorage["itemtransfer"]);
      console.log($scope.carttransfer);

    }
    $scope.itemhotel = new Array();
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
    //====================HOTEL==========================//

    $http({
        method : 'post',
        url : "/api/Getproduct_hotel",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function(res){

        if(res.status == "ok"){
          //document.getElementById("cssload-container").style.display = "none";
          $scope.hotel = res.data;
          console.log(res.data);

        }
      });
      
      $scope.select_itemhotel = function(x,item){
        console.log(x);
        console.log(item);
        $scope.sale = tour;
        console.log(item.id);
        console.log(x);
        console.log($scope.id);
        $scope.id[x];
        console.log($scope.id[x]);
        //angular.element(document.querySelector('#get-select-value')).triggerHandler('click',$scope.tour);
        location.href="hotel#?data=" + JSON.stringify(item.id);
      }
      //=====================THE END==================//
    $scope.cartBook = function(){
      location.href="cart";

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
    $scope.transfer = function(){
      location.href="Transports";

    }
     $scope.restaurant = function(){
        location.href="restaurant";

      }
      $scope.shopping = function(){
        location.href="shopping";

      }
       $scope.gotour = function(){
        location.href="tour";

      }

      
    $scope.getViewhotel = function(item){
      $scope.itemhotel.push(item);
      //console.log(item);      
      localStorage.setItem('itemhotel',JSON.stringify($scope.itemhotel));
      $window.open('hotel-view#?data=' + JSON.stringify(item.id));

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

