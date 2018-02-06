var app = angular.module('myApp', ['ngCookies','ngRoute','angular.filter']);
    app.controller('myCtrl', function($scope, $location, $http, $cookies, $window,$injector,$filter, $interval) {
        angular.element(document.querySelector('#inTurnFadingTextG')).css('display', 'none');
        $scope.anmateprocess = { 'display':'none'};
        var host = 2;
        var ip = "";
        if (host == 1) {
            ip = "http://gh-travel.com";
        }
        else{
            ip = "http://localhost:8080"
        }
     
        $scope.cart = [];    
        $scope.tour= new Array();    
        $scope.province = new Array();
        $scope.tourprovince = new Array();
        $scope.provinceselect =new Array();
        $scope.dateon = new Array();
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
        $scope.view = [];
        if (typeof localStorage["view"] !== "undefined" && localStorage["view"] !== "undefined") {
            $scope.view = JSON.parse(localStorage["view"]);
            console.log($scope.view);
            if ($scope.view.length > 3) {
              $scope.view.splice($scope.view.indexOf($scope.view[0]),1);
              localStorage.setItem('view',JSON.stringify($scope.view));
            }
            console.log($scope.view);
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

        //======================province=========================//
        $http({
            method : 'post',
            url : "/api/Getprovince",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(res){
            if(res.status == "ok"){
                for(var i = 0 ; i < res.data.length; i++)
                {
                    $scope.province.push(res.data[i]);
                }
                    
            }
                    
        });
        var lengthpro;
        $scope.page = function(){
          location.href="page2";
        }     
        $scope.transfer = function(){
          location.href="Transports";

        }
        $scope.gohotel = function() {
          location.href="hotels";
        }
        $scope.gotour = function() {
          location.href="tour";
        }
        $scope.gohome = function() {
          location.href= ip;
        }
        $scope.restaurant = function(){
          location.href="restaurant";
        }
        $scope.shopping = function(){
          location.href="shopping";
        }
        $scope.sectiontourall = function(){
          $window.open('all-tour');
        }
        $scope.sectionspaall = function(){
          $window.open('all-spa');
        }
        $scope.sectionboatall = function(){
          $window.open('all-boat');
        }
        $scope.sectionweddingall = function(){
          $window.open('all-wedding');
        }
        $scope.sectiondivingall = function(){
          $window.open('all-diving');
        }
        $scope.sectiongolfall = function(){
          $window.open('all-golf');
        } 
        $scope.sectionpackageall = function(){
            $window.open('all-package');
        }
        $scope.sectionshowall = function(){
            $window.open('all-show');
        }    
        $scope.select_item = function(x,item){
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
          


        //=============================tour=============================//
        $scope.finalprovince = new Array();
        $scope.finalprovincespa = new Array();
        $scope.finalprovinceboat = new Array();
        $scope.finalprovincewedding = new Array();
        $scope.finalprovincediving = new Array();
        $scope.finalprovincegolf = new Array();
        $scope.finalprovincepackage = new Array();
        $scope.finalprovinceshow = new Array();
        
        $scope.f1= new Array();
        $scope.f2= new Array();
        $scope.f3= new Array();
        $scope.f4= new Array();
        $scope.f5= new Array();
        $scope.f6= new Array();
        $scope.f7= new Array();
         $scope.f8= new Array();

        $http({
            method : 'post',
            url : "/api/Getproduct_onfront",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(res){
            if(res.status == "ok"){            
                angular.forEach(res.data, function(data){                 
                    console.log(data.province);                      
                    $scope.tour.push(data);
                    $scope.f1.push(data.province);
                    $scope.alltour = { 'display':'none'};
                      
                });
                console.log($scope.f1)
                x = $scope.f1;
                console.log(x);
                var y = new Array();
                var first = 0;
                var count = 0;
                for(var i = 0 ; i < x.length; i++)
                {
                    count = 0;              
                    if(first==0)
                    {
                        y.push(x[i]);
                        first++;
                    }
                    for(var j = 0 ; j < y.length ; j++)
                    {                    
                        if(y[j]!=x[i])
                        {
                            count++;
                            if(count==y.length)
                                {
                                    y.push(x[i]);
                                }
                        }
                    }              
                }
                console.log(y);
                for (var i = 0; i < y.length; i++) {
                    angular.forEach($scope.province, function(data){                 
                        if (data.id == y[i]) 
                        {
                           $scope.finalprovince.push(data);
                        }
                    });
                }
                    console.log($scope.finalprovince); 
            }
        });
        $scope.selectcitytour = function(city){
          $scope.alltour = { 'display':'block'};
            $scope.tour = new Array();
            $http({
                method : 'post',
                url : "/api/Getproduct_onfront",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
              }).success(function(res){
                  if(res.status == "ok"){
                      console.log(city);
                      for (var i = 0; i < res.data.length; i++) {                        
                        if (res.data[i].province == city.id) {                           
                            $scope.tour.push(res.data[i]);
                            $scope.alltour = { 'display':'none'};
                        }
                      }
                  }
            });

        }

        //========================spa===================================//
        $scope.itemspa = new Array();
        $http({
            method : 'post',
            url : "/api/Getselectdata_type_spa",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
              if(res.status == "ok"){            
                  angular.forEach(res.data, function(data){ 
                      {
                          $scope.itemspa.push(data);
                          $scope.f2.push(data.province);
                          $scope.allspa = { 'display':'none'};
                      }
                  });
                  console.log($scope.f2)
                  x = $scope.f2;
                  console.log(x);
                  var y = new Array();
                  var first = 0;
                  var count = 0;
                  for(var i = 0 ; i < x.length; i++)
                  {
                      count = 0;              
                      if(first==0)
                      {
                          y.push(x[i]);
                          first++;
                      }
                      for(var j = 0 ; j < y.length ; j++)
                      {                    
                          if(y[j]!=x[i])
                          {
                              count++;
                              if(count==y.length)
                              {
                                  y.push(x[i]);
                              }
                          }
                      }              
                  }
                  console.log(y);
                  for (var i = 0; i < y.length; i++) {
                      angular.forEach($scope.province, function(data){                 
                          if (data.id == y[i]) 
                          {
                              $scope.finalprovincespa.push(data);
                          }
                      });
                  }
                    console.log($scope.finalprovincespa); 
              }
          });
          $scope.selectcityspa = function(city){
            $scope.allspa = { 'display':'block'};
            $scope.itemspa = new Array();
            $http({
                method : 'post',
                url : "/api/Getselectdata_type_spa",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
              }).success(function(res){
                  if(res.status == "ok"){
                      console.log(city);
                      for (var i = 0; i < res.data.length; i++) {
                          console.log(city.id)
                          console.log(res.data[i].province)
                          if (res.data[i].province == city.id ) {
                              console.log(res.data[i]);
                              $scope.itemspa.push(res.data[i]);
                              $scope.allspa = { 'display':'none'};
                          }
                      }
                  }
            });

        }
        //====================BOAT==============================//
        $scope.itemboat = new Array();
        $http({
            method : 'post',
            url : "/api/Getselectdata_type_boat",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
                angular.forEach(res.data, function(data){                 
                console.log(data.province);
                {
                  $scope.itemboat.push(data);
                   $scope.f3.push(data.province);
                   $scope.allboat = { 'display':'none'};
                }
            });
            console.log($scope.f3)
            x = $scope.f3;
            console.log(x);
            var y = new Array();
            var first = 0;
            var count = 0;
            for(var i = 0 ; i < x.length; i++)
             {
              count = 0;              
              if(first==0)
                  {
                    y.push(x[i]);
                    first++;
                  }
                  for(var j = 0 ; j < y.length ; j++)
                  {                    
                    if(y[j]!=x[i])
                    {
                      count++;
                      if(count==y.length)
                      {
                        y.push(x[i]);
                      }
                    }
                  }              
            }
            console.log(y);
            for (var i = 0; i < y.length; i++) {
                
            
            angular.forEach($scope.province, function(data){                 
                if (data.id == y[i]) 
                {
                   $scope.finalprovinceboat.push(data);
                }
            });
           }
          console.log($scope.finalprovinceboat); 
      }
      });
    $scope.selectcityboat = function(city){
      $scope.allboat= { 'display':'block'};
        $scope.itemboat = new Array();
        $http({
            method : 'post',
            url : "/api/Getselectdata_type_boat",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
              console.log(city);
              for (var i = 0; i < res.data.length; i++) {
                console.log(city.id)
                console.log(res.data[i].province)
                if (res.data[i].province == city.id ) {
                    console.log(res.data[i]);
                    $scope.itemboat.push(res.data[i]);
                    $scope.allboat = { 'display':'none'};
                }
              }
            }
        });

    }
          
        //=====================WEDDING===========================//
        $scope.itemwedding = new Array();
        $http({
            method : 'post',
            url : "/api/Getselectdata_type_wedding",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
              angular.forEach(res.data, function(data){                 
                console.log(data.province);
                {
                  $scope.itemwedding.push(data);
                   $scope.f4.push(data.province);
                   $scope.allwedding = { 'display':'none'};
                }
            });
            console.log($scope.f4)
            x = $scope.f4;
            console.log(x);
            var y = new Array();
            var first = 0;
            var count = 0;
            for(var i = 0 ; i < x.length; i++)
             {
              count = 0;              
              if(first==0)
                  {
                    y.push(x[i]);
                    first++;
                  }
                  for(var j = 0 ; j < y.length ; j++)
                  {                    
                    if(y[j]!=x[i])
                    {
                      count++;
                      if(count==y.length)
                      {
                        y.push(x[i]);
                      }
                    }
                  }              
            }
            console.log(y);
            for (var i = 0; i < y.length; i++) {
                
            
            angular.forEach($scope.province, function(data){                 
                if (data.id == y[i]) 
                {
                   $scope.finalprovincewedding.push(data);
                }
            });
           }
          console.log($scope.finalprovincewedding); 
      }
    });
  $scope.selectcitywedding = function(city){
      $scope.allwedding = { 'display':'block'};
        $scope.itemwedding = new Array();
        $http({
            method : 'post',
            url : "/api/Getselectdata_type_wedding",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
              console.log(city);
              for (var i = 0; i < res.data.length; i++) {
                console.log(city.id)
                console.log(res.data[i].province)
                if (res.data[i].province == city.id ) {
                    console.log(res.data[i]);
                    $scope.itemwedding.push(res.data[i]);
                    $scope.allwedding = { 'display':'none'};
                }
              }
            }
        });

    }
          
          //=====================DIVING==========================//
          $scope.itemdiving = new Array();
          $http({
              method : 'post',
              url : "/api/Getselectdata_type_diving",
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(res){
              if(res.status == "ok"){
                angular.forEach(res.data, function(data){                 
                console.log(data.province);
                {
                  $scope.itemdiving.push(data);
                   $scope.f5.push(data.province);
                   $scope.alldiving = { 'display':'none'};
                }
            });
            console.log($scope.f5)
            x = $scope.f5;
            console.log(x);
            var y = new Array();
            var first = 0;
            var count = 0;
            for(var i = 0 ; i < x.length; i++)
             {
              count = 0;              
              if(first==0)
                  {
                    y.push(x[i]);
                    first++;
                  }
                  for(var j = 0 ; j < y.length ; j++)
                  {                    
                    if(y[j]!=x[i])
                    {
                      count++;
                      if(count==y.length)
                      {
                        y.push(x[i]);
                      }
                    }
                  }              
            }
            console.log(y);
            for (var i = 0; i < y.length; i++) {
              angular.forEach($scope.province, function(data){                 
                  if (data.id == y[i]) 
                  {
                     $scope.finalprovincediving.push(data);
                  }
              });
            }
          console.log($scope.finalprovincediving); 
      }
    });

  $scope.selectcitydiving = function(city){
        $scope.alldiving = { 'display':'block'};
        $scope.itemdiving = new Array();
        $http({
            method : 'post',
            url : "/api/Getselectdata_type_diving",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
              console.log(city);
              for (var i = 0; i < res.data.length; i++) {
                console.log(city.id)
                console.log(res.data[i].province)
                if (res.data[i].province == city.id ) {
                    console.log(res.data[i]);
                    $scope.itemdiving.push(res.data[i]);
                    $scope.alldiving = { 'display':'none'};
                }
              }
            }
        });

    }
           
            //====================GOLF============================//
            $scope.itemgolf = new Array();
            $http({
                method : 'post',
                url : "/api/Getselectdata_type_goft",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
              }).success(function(res){
                if(res.status == "ok"){
                    angular.forEach(res.data, function(data){                 
                console.log(data.province);
                {
                  $scope.itemgolf.push(data);
                   $scope.f6.push(data.province);
                   $scope.allgolf = { 'display':'none'};
                }
            });
            console.log($scope.f6)
            x = $scope.f6;
            console.log(x);
            var y = new Array();
            var first = 0;
            var count = 0;
            for(var i = 0 ; i < x.length; i++)
             {
              count = 0;              
              if(first==0)
                  {
                    y.push(x[i]);
                    first++;
                  }
                  for(var j = 0 ; j < y.length ; j++)
                  {                    
                    if(y[j]!=x[i])
                    {
                      count++;
                      if(count==y.length)
                      {
                        y.push(x[i]);
                      }
                    }
                  }              
            }
            console.log(y);
            for (var i = 0; i < y.length; i++) {
                
            
            angular.forEach($scope.province, function(data){                 
                if (data.id == y[i]) 
                {
                   $scope.finalprovincegolf.push(data);
                }
            });
           }
          console.log($scope.finalprovincegolf); 
      }
    });

  $scope.selectcitygolf = function(city){
    $scope.allgolf = { 'display':'block'};
        $scope.itemgolf = new Array();
        $http({
            method : 'post',
            url : "/api/Getselectdata_type_goft",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
              console.log(city);
              for (var i = 0; i < res.data.length; i++) {
                console.log(city.id)
                console.log(res.data[i].province)
                if (res.data[i].province == city.id ) {
                    console.log(res.data[i]);
                    $scope.itemgolf.push(res.data[i]);
                    $scope.allgolf = { 'display':'none'};
                }
              }
            }
        });

    }
              
              //==================PACKAGE=========================//
              $scope.itempackage = new Array();
              $http({
                  method : 'post',
                  url : "/api/Getselectdata_type_package",
                  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function(res){
                  if(res.status == "ok"){
                    angular.forEach(res.data, function(data){                 
                console.log(data.province);
                {
                  $scope.itempackage.push(data);
                   $scope.f7.push(data.province);
                   $scope.allpackage = { 'display':'none'};
                }
            });
            console.log($scope.f7)
            x = $scope.f7;
            console.log(x);
            var y = new Array();
            var first = 0;
            var count = 0;
            for(var i = 0 ; i < x.length; i++)
             {
              count = 0;              
              if(first==0)
                  {
                    y.push(x[i]);
                    first++;
                  }
                  for(var j = 0 ; j < y.length ; j++)
                  {                    
                    if(y[j]!=x[i])
                    {
                      count++;
                      if(count==y.length)
                      {
                        y.push(x[i]);
                      }
                    }
                  }              
            }
            console.log(y);
            for (var i = 0; i < y.length; i++) {
                
            
            angular.forEach($scope.province, function(data){                 
                if (data.id == y[i]) 
                {
                   $scope.finalprovincepackage.push(data);
                }
            });
           }
          console.log($scope.finalprovincepackage); 
      }
    });

    $scope.selectcitypackage = function(city){
      $scope.allpackage = { 'display':'block'};
        $scope.itempackage = new Array();
        $http({
            method : 'post',
            url : "/api/Getselectdata_type_package",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
              console.log(city);
              for (var i = 0; i < res.data.length; i++) {
                console.log(city.id)
                console.log(res.data[i].province)
                if (res.data[i].province == city.id ) {
                    console.log(res.data[i]);
                    $scope.itempackage.push(res.data[i]);
                    $scope.allpackage = { 'display':'none'};
                }
              }
            }
        });

    }
       
      //========================END===================================//
      //==================Show=========================//
              $scope.itemshow = new Array();
              $http({
                  method : 'post',
                  url : "/api/Getproduct_type_show",
                  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function(res){
                  if(res.status == "ok"){
                    angular.forEach(res.data, function(data){                 
                console.log(data.province);
                {
                  $scope.itemshow.push(data);
                   $scope.f8.push(data.province);
                   $scope.allshow = { 'display':'none'};
                }
            });
            console.log($scope.f8)
            x = $scope.f8;
            console.log(x);
            var y = new Array();
            var first = 0;
            var count = 0;
            for(var i = 0 ; i < x.length; i++)
             {
              count = 0;              
              if(first==0)
                  {
                    y.push(x[i]);
                    first++;
                  }
                  for(var j = 0 ; j < y.length ; j++)
                  {                    
                    if(y[j]!=x[i])
                    {
                      count++;
                      if(count==y.length)
                      {
                        y.push(x[i]);
                      }
                    }
                  }              
            }
            console.log(y);
            for (var i = 0; i < y.length; i++) {
                
            
            angular.forEach($scope.province, function(data){                 
                if (data.id == y[i]) 
                {
                   $scope.finalprovinceshow.push(data);
                }
            });
           }
          console.log($scope.finalprovinceshow); 
      }
    });

    $scope.selectcityshow = function(city){
      $scope.allshow = { 'display':'block'};
        $scope.itemshow = new Array();
        $http({
            method : 'post',
            url : "/api/Getproduct_type_show",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
              console.log(city);
              for (var i = 0; i < res.data.length; i++) {
                console.log(city.id)
                console.log(res.data[i].province)
                if (res.data[i].province == city.id ) {
                    console.log(res.data[i]);
                    $scope.itemshow.push(res.data[i]);
                    $scope.allshow = { 'display':'none'};
                }
              }
            }
        });

    }
       
      //========================END===================================//

      
      
      
      
      $scope.cartBook = function(){
        location.href="cart";

      }
    $scope.activesectiontour = function(province,provincename){
    
    console.log(province);
    console.log(provincename)
    for (var i = 0; i < province.length; i++) {
      if (province[i].name == provincename) {
        angular.element(document.getElementById("tour"+province[i].name)).css('background-color','#0dabf9');
         angular.element(document.getElementById("tour"+province[i].name)).css('color','#fff');
         //angular.element(document.getElementById("tour"+province[i].name)).css('cursor','default');


      }
      else{        
        angular.element(document.getElementById("tour"+province[i].name)).css('background-color','#fff');
        angular.element(document.getElementById("tour"+province[i].name)).css('color','#333');
      }
    }
  }
     $scope.activesectionspa = function(province,provincename){
    
    console.log(province);
    console.log(provincename)
    for (var i = 0; i < province.length; i++) {
      if (province[i].name == provincename) {
        angular.element(document.getElementById("spa"+province[i].name)).css('background-color','#f44336');
         angular.element(document.getElementById("spa"+province[i].name)).css('color','#fff');
         //angular.element(document.getElementById("spa"+province[i].name)).css('cursor','default');


      }
      else{        
        angular.element(document.getElementById("spa"+province[i].name)).css('background-color','#fff');
        angular.element(document.getElementById("spa"+province[i].name)).css('color','#333');
      }
    }
  }
  
  $scope.activesectionboat = function(province,provincename){
    
    console.log(province);
    console.log(provincename)
    for (var i = 0; i < province.length; i++) {
      if (province[i].name == provincename) {
        angular.element(document.getElementById("boat"+province[i].name)).css('background-color','#9c27b0');
         angular.element(document.getElementById("boat"+province[i].name)).css('color','#fff');
         //angular.element(document.getElementById("boat"+province[i].name)).css('cursor','default');


      }
      else{        
        angular.element(document.getElementById("boat"+province[i].name)).css('background-color','#fff');
        angular.element(document.getElementById("boat"+province[i].name)).css('color','#333');
      }
    }
  }
  $scope.activesectionwedding = function(province,provincename){    
    console.log(province);
    console.log(provincename)
    for (var i = 0; i < province.length; i++) {
      if (province[i].name == provincename) {
       
        angular.element(document.getElementById("wedding"+province[i].name)).css('background-color','#e2336e');
         angular.element(document.getElementById("wedding"+province[i].name)).css('color','#fff');
         //angular.element(document.getElementById("wedding"+province[i].name)).css('cursor','default');


      }
      else{        
        angular.element(document.getElementById("wedding"+province[i].name)).css('background-color','#fff');
        angular.element(document.getElementById("wedding"+province[i].name)).css('color','#333');
      }
    }
  }
  $scope.activesectiondiving = function(province,provincename){
    
    console.log(province);
    console.log(provincename)
    for (var i = 0; i < province.length; i++) {
      if (province[i].name == provincename) {
       
        angular.element(document.getElementById("diving"+province[i].name)).css('background-color','#4caf50');
         angular.element(document.getElementById("diving"+province[i].name)).css('color','#fff');
         //angular.element(document.getElementById("diving"+province[i].name)).css('cursor','default');


      }
      else{        
        angular.element(document.getElementById("diving"+province[i].name)).css('background-color','#fff');
        angular.element(document.getElementById("diving"+province[i].name)).css('color','#333');
      }
    }
  }
  $scope.activesectiongolf = function(province,provincename){
    
    console.log(province);
    console.log(provincename)
    for (var i = 0; i < province.length; i++) {
      if (province[i].name == provincename) {
       
        angular.element(document.getElementById("golf"+province[i].name)).css('background-color','#cddc39');
         angular.element(document.getElementById("golf"+province[i].name)).css('color','#fff');
         //angular.element(document.getElementById("golf"+province[i].name)).css('cursor','default');

      }
      else{        
        angular.element(document.getElementById("golf"+province[i].name)).css('background-color','#fff');
        angular.element(document.getElementById("golf"+province[i].name)).css('color','#333');
      }
    }
  }
  $scope.activesectionpackage = function(province,provincename){
    
    console.log(province);
    console.log(provincename)
    for (var i = 0; i < province.length; i++) {
      if (province[i].name == provincename) {
       
        angular.element(document.getElementById("package"+province[i].name)).css('background-color','#ff5722');
         angular.element(document.getElementById("package"+province[i].name)).css('color','#fff');
         //angular.element(document.getElementById("package"+province[i].name)).css('cursor','default');


      }
      else{        
        angular.element(document.getElementById("package"+province[i].name)).css('background-color','#fff');
        angular.element(document.getElementById("package"+province[i].name)).css('color','#333');
      }
    }
  }
  $scope.activesectionshow = function(province,provincename){
    
    console.log(province);
    console.log(provincename)
    for (var i = 0; i < province.length; i++) {
      if (province[i].name == provincename) {
       
        angular.element(document.getElementById("show"+province[i].name)).css('background-color','rgb(85, 202, 245)');
         angular.element(document.getElementById("show"+province[i].name)).css('color','#fff');
         //angular.element(document.getElementById("package"+province[i].name)).css('cursor','default');


      }
      else{        
        angular.element(document.getElementById("show"+province[i].name)).css('background-color','#fff');
        angular.element(document.getElementById("show"+province[i].name)).css('color','#333');
      }
    }
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
            //$scope.body = { 'display':'block'};
            //$scope.anmateprocess = { 'display':'none'};
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
