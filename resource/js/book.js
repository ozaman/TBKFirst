var app = angular.module('myApp', ['ngCookies','ngRoute','ngSanitize','ngDialog']);
app.controller('myCtrl', function($scope, $location, $http, $cookies,$sce ,$window,ngDialog,$interval) {
    angular.element(document.querySelector('#inTurnFadingTextG')).css('display', 'none');
    $scope.anmateprocess = { 'display':'none'};
    $scope.selectcountryValue;
    var host = 2;
    var ip = "";
    if (host == 1) {
          ip = "http://gh-travel.com";
    }
    else{
          ip = "http://localhost:8080"
    }
    $scope.cart2 = [];
    $scope.sumtotal = 0;
    
    if (typeof localStorage["itemSelect"] !== "undefined" && localStorage["itemSelect"] !== "undefined") {
        $scope.cart = JSON.parse(localStorage["itemSelect"]);
        console.log($scope.cart);
        for (var i = 0; i < $scope.cart.length; i++)
        {
            console.log($scope.cart[i])
            for (var j = 0; j < $scope.cart[i].length; j++)
             {  
                $scope.type = $scope.cart[i][j].type;
                console.log($scope.type)
                $scope.sumtotal += parseInt($scope.cart[i][j].price);
            }
        }
    }

    angular.forEach($scope.cart, function (data) {
    angular.forEach(data, function (data1) {
    console.log(data1)
          if (data1.type == 'Private' || data1.type == 'Join') {
              $scope.channelhead = 'channel-head';
            $scope.navbarbrand = 'navbar-brand';
            $scope.navbardefault = 'navbar-default';
            $scope.castnum = 'cast-num';
            $scope.box2 = 'box2';
            $scope.dropdownmenu = 'dropdown-menu';
            $scope.selestournew = 'seles-tour-new';
            $scope.pay = 'pay';
            $scope.btnprimary = 'btn-primary';
            $scope.footer = 'footer';
            $scope.btnbooks = 'btn-books';
            $scope.getuser = 'getuser';
              
          }
          else{
            $scope.channelhead = 'channel-head2';
              $scope.navbarbrand = 'navbar-brand2';
              $scope.navbardefault = 'navbar-default2';
              $scope.castnum = 'cast-num2';
              $scope.box2 = 'box2-2';
              $scope.dropdownmenu = 'dropdown-menu2';
              $scope.selestournew = 'seles-tour-new2';
              $scope.pay = 'pay2';
              $scope.btnprimary = 'btn-primary2';
              $scope.footer = 'footer2';
              $scope.btnbooks = 'btn-books2';
              $scope.getuser = 'getuser2';


            
            
          }
         

        });
  });
  
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
    $scope.Country = function(){
      console.log(i)
      $scope.countrybox = { 'display':'block'};
      for (var i = 0; i < $scope.country.length; i++) {
      }
    }
    $scope.numCountryselect = function(i ,$event){
      $scope.countrybox = { 'display':'none'};
      $scope.selectcountryValue = '+'+i.phonecode;
      $scope.Countryfont = ' ' + '(' + '+' + i.phonecode + ')' + i.name;
      //console.log($event)
      var x = 'flagstrap-icon-'+i.iso;
      $scope.class = x;
      console.log($scope.class)
      angular.element("#flagstrap-icon").addClass($scope.class);
      $scope.selectcountryValue;
    }
    /*$scope.changephone = function(){
       $scope.phonefinal =  $scope.phonesend + $scope.phone;
       console.log($scope.phonefinal)
    }*/
    $http({
                method:'post',
                url: "/getCountry",                
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(res){
                
                   console.log(res)
                   $scope.country = res;

                   
               
            });
    $scope.profile = function(){
        location.href="profile";

    }
    
    $scope.logout = function(){
          $cookies.remove("login");
          $window.location.reload();
    }
    $scope.getdatauser = function(state){
      console.log("success")
      console.log(state)
      
      if (state == true) {
         $http({
            method:'post',
            url: "/getfulluserbyid",
            data: $.param({id: $cookies.get('login')}),
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(res){
            $scope.address = res[0].address;
            $scope.email = res[0].email;
            $scope.fname = res[0].fname;
            $scope.lname = res[0].lname;
            $scope.phonefinal = res[0].phone;
            var x = $scope.phonefinal.split('-');
            console.log(x)
            console.log( $scope.phonefinal)
            $scope.selectcountryValue = x[0];
            $scope.phone = x[1];
      
            console.log($scope.address)
            console.log($scope.email)
            console.log($scope.fname)
            console.log($scope.lname)
            console.log($scope.phone)
        });
      }
      else{
            $scope.address = "";
            $scope.email = "";
            $scope.fname = "";
            $scope.lname = "";
            $scope.phone = "";
            $scope.selectcountryValue = "";

      }
      //console.log(checkboxgetuser)
      
         
    }

       //console.log($scope.getuser.getText())
       //element(by.model('getuser.value')).click();

 
    $scope.data = [];
    //$scope.adultshow = [];
    //var file = [];
    $scope.name = [];
    var por = [];
    $scope.datainfo = new Array();

    
    

    $scope.addbook = function(ev) {
      
      if (($scope.fname != undefined) && ($scope.lname != undefined) && ($scope.phone != undefined) && ($scope.email != undefined) && ($scope.selectcountryValue != undefined) ) {
         console.log($scope.fname);
      console.log($scope.lname);
      
      console.log($scope.phonefinal);
      console.log($scope.email);
      console.log($scope.other);
      //console.log($scope.cart[2]);
       var file = new Array();
       $scope.data = {"fname":$scope.fname,
                      "lname":$scope.lname,                      
                      "phone":$scope.selectcountryValue+ '-' +$scope.phone,
                      "email":$scope.email,
                      "other":$scope.other,
                      "account":$cookies.get('login')
                    }
            
            console.log( $scope.data);
            
            localStorage.setItem('data', JSON.stringify($scope.data));
            location.href="book-info";
     }
      else{
        ngDialog.open({
            template: 'firstDialog',
            controller: 'myCtrl',
            className: 'ngdialog-theme-default ngdialog-theme-custom'
          });
  
      }
    }
    
    $scope.nameselect = function() {
      console.log($scope.name);

    }



    $scope.gohotel = function() {
        location.href="hotels";
    }
    $scope.gohome = function(input){
        location.href= ip;
    }
    $scope.cartBook = function(){
        location.href="cart";
    }
    $scope.transfer = function(){
        location.href="Transports";
    }
    $scope.gotour = function(){
        location.href="tour";
    }
     $scope.restaurant = function(){
        location.href="restaurant";
    }
    $scope.shopping = function(){
        $window.open('shopping','_blank');
    }

    var language = $cookies.get('language');
      if(language==undefined){
          $cookies.put("language", 1);
          $scope.flag = 'English';
          $scope.flagcheck = 1;
          $scope.Countryfont = "-Please select country-";
      }
      else if(language==1){
          $scope.flag = 'English';
          $scope.flagcheck = 1;
          $scope.Countryfont = "-Please select country-";
      }
      else if(language==2){
          $scope.flag = 'Thai';
          $scope.flagcheck = 2;
          $scope.Countryfont = "-โปรดเลือกประเทศ-";
      }
      else if(language==3){
          $scope.flag = '中文(简体)';
          $scope.flagcheck = 3;
          $scope.Countryfont = "-请选择国家-";
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
            $scope.body = { 'display':'block'};
            $scope.anmateprocess = { 'display':'none'};
            $interval.cancel(interval);
        },1000 );
    }

});
