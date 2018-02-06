var app = angular.module('myApp', ['ngCookies','ngRoute','satellizer']);
  app.controller('myCtrl', function($scope, $location, $http, $cookies, $window,$rootScope , $auth,$interval) {
    angular.element(document.querySelector('#inTurnFadingTextG')).css('display', 'none');
     $scope.anmateprocess = { 'display':'none'};
     $cookies.remove("dateon");
     delete $cookies["dateon"];
    var host = 2;
     var ip = "";
     if (host == 1) {
          ip = "http://gh-travel.com";
     }
     else{
          ip = "http://localhost:8080"
     }
    $scope.format = 'M-d-yy hh:mm:ss ';
    $scope.cart = [];
   //localStorage.clear(); 
    $scope.tourtop= new Array();
    $scope.tourpro = new Array();
    $scope.tourrecomm = new Array();
    $scope.tour= new Array();   
    $scope.province = new Array();
    $scope.tourprovince = new Array();
    $scope.provinceselect =new Array();
     $scope.itemtransfer = new Array();
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
            if($scope.view.length > 3) {
                $scope.view.splice($scope.view.indexOf($scope.view[0]),1);
                localStorage.setItem('view',JSON.stringify($scope.view));
            }

    }
    //localStorage.clear();
    
      $scope.finalprovince = new Array();
      $scope.finalprovincespa = new Array();
      $scope.finalprovinceboat = new Array();
      $scope.finalprovincewedding = new Array();
      $scope.finalprovincediving = new Array();
      $scope.finalprovincegolf = new Array();
      $scope.finalprovincepackage = new Array();
      $scope.finaltypetarnsfer = new Array();
      $scope.f1= new Array();
      $scope.f2= new Array();
      $scope.f3= new Array();
      $scope.f4= new Array();
      $scope.f5= new Array();
      $scope.f6= new Array();
      $scope.f7= new Array();
      $scope.t1= new Array();
      $scope.dateon = new Array();
      $scope.idtarnsferprovince= new Array();
      $scope.provincetarnsfer = new Array();
      //$scope.car = new Array();
      $scope.idtarnsfertype = new Array();
      $scope.finalprovincetransfer = new Array();
    var lengthpro;

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
              console.log(res)
              if (res[0].resource == "") {
               
                $scope.Profile= "profile.png";
              }
              else{
                $scope.Profile = res[0].resource;
              }
              console.log($scope.Profile)
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
      console.log($scope.username)
      console.log($scope.password)
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
      $scope.transfer = function(){
        $window.open('Transports');

      }
      $scope.gohotel = function() {
         $window.open('hotels');
      }
      $scope.gohome = function() {
         $window.location.reload();
      }
      $scope.gotour = function() {
        $window.open('tour');
      } 
      $scope.restaurant = function(){
        location.href="restaurant";
      }
      $scope.shopping = function(){
        location.href="shopping";

      }
      $scope.change_language = function(){
      $scope.lstart = { 'display':'none' };
      $scope.lopen = { 'display':'block' };
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
            $scope.body = { 'display':'block'};
            $scope.anmateprocess = { 'display':'none'};
            $interval.cancel(interval);
        },1000 );
    }
    $http({
              method : 'post',
              url : "/api/Getprovince",
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
              if(res.status == "ok")
              {
                
                  for(var i = 0 ; i < res.data.length; i++)
                  {
                    $scope.province.push(res.data[i]); 
                  }
                     
              }
                    
        });
    $http({
            method : 'post',
            url : "/api/getdataproduct",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){

            if(res.status == "ok"){
              console.log(res.data)
             
              
              for(var i = 0 ; i < 4; i++)
              {     
                $scope.tourtop.push(res.data[i]);
              }

            }
      });
    $http({
        method : 'post',
        url : "/api/getdataproduct2",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(res){
            if(res.status == "ok"){              
                for(var i = 0 ; i < 4; i++)
                {
                  $scope.tourpro.push(res.data[i]);
                }
            }
      });
    $http({
          method : 'post',
          url : "/api/getdataproduct3",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
                for(var i = 0 ; i < 4; i++)
                {
                  $scope.tourrecomm.push(res.data[i]);
                 // document.getElementById("cssload-container").style.display = "none";
                }
            }
    });

    //=============================Transfer==========================//
    $scope.car;
       $http({
          method : 'post',
          url : "/api/Gettransfer_product",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
                for(var i = 0 ; i <res.data.length; i++)
                {
                  $scope.idtarnsfertype.push(parseInt(res.data[i].cartype));
                  $scope.idtarnsferprovince.push(parseInt(res.data[i].stay));
                  $scope.itemtransfer.push(res.data[i]);
                  $scope.transferfront = { 'display':'none'};
                  
                }
                console.log($scope.itemtransfer);
                 
              $http({
                method : 'post',
                url : "/api/Getcar_product",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function(res){
                if(res.status == "ok")
                {
                    $scope.car = res.data;
                    console.log($scope.car);
                     var x = $scope.idtarnsfertype;
                      //console.log(x);
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
                      
                      //console.log(y);
                      for (var i = 0; i < y.length; i++) {
                      angular.forEach($scope.car, function(data){
                      //console.log(data);                 
                          if (data.id == y[i]) 
                          {
                             $scope.finaltypetarnsfer.push(data);
                          }
                      });
                    }
                      console.log($scope.finaltypetarnsfer);


                      //console.log($scope.idtarnsferprovince)
                      var a = $scope.idtarnsferprovince;
                      //console.log(a);
                      var b = new Array();
                      var first2 = 0;
                      var count2 = 0;
                      for(var i = 0 ; i < a.length; i++)
                       {
                        count2 = 0;              
                        if(first2==0)
                            {
                              b.push(a[i]);
                              first2++;
                            }
                            for(var j = 0 ; j < b.length ; j++)
                            {                    
                              if(b[j]!=a[i])
                              {
                                count2++;
                                if(count2==b.length)
                                {
                                  b.push(a[i]);
                                }
                              }
                            }              
                      }
                      //console.log(b);
                      for (var i = 0; i < b.length; i++) {
                          
                      console.log($scope.province)
                      angular.forEach($scope.province, function(data){ 
                        //console.log(data);                
                          if (data.id == b[i]) 
                          {
                             $scope.finalprovincetransfer.push(data);
                          }
                      });
                     }
                    console.log($scope.finalprovincetransfer); 
                      
                }                  
                      
              });  
            
            }
    });
        
        $scope.selectcitytransfer = function(city){
          $scope.transferfront = { 'display':'block'};
          console.log(city);
          $scope.idtarnsfertype = new Array();
          $scope.itemtransfer = new Array();
          $scope.finaltypetarnsfer = new Array();
          $http({
              method : 'post',
              url : "/api/Gettransfer_product",
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(res){
              if(res.status == "ok"){
                for (var i = 0; i < res.data.length; i++) {
                  if (res.data[i].province_id == city.id) {
                      $scope.idtarnsfertype.push(parseInt(res.data[i].cartype));
                      $scope.idtarnsferprovince.push(parseInt(res.data[i].stay));
                      $scope.itemtransfer.push(res.data[i]);
                      $scope.transferfront = { 'display':'none'};
                  }
                }
                $http({
                    method : 'post',
                    url : "/api/Getcar_product",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).success(function(res){
                    if(res.status == "ok")
                    {
                      $scope.car = res.data;
                      console.log($scope.car);
                      var x = $scope.idtarnsfertype;
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
                          angular.forEach($scope.car, function(data){                                
                              if (data.id == y[i]) 
                              {
                                 $scope.finaltypetarnsfer.push(data);
                              }
                          });
                        }
                          console.log($scope.finaltypetarnsfer);                          
                    }     
                  }); 
              }
            });
  }    
     $scope.selecttypetransfer = function(type){
      $scope.transferfront = { 'display':'block'};
       $scope.itemtransfer = new Array();
       console.log(type)
       //console.log($scope.itemtransfer)
      $http({
          method : 'post',
          url : "/api/Gettransfer_product",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(res){
          if(res.status == "ok"){
            console.log(type);
            for (var i = 0; i < res.data.length; i++) {
              console.log(type.id)
              console.log(res.data[i].cartype)
              if (res.data[i].cartype == type.id) {
                  //console.log(res.data[i]);
                  $scope.itemtransfer.push(res.data[i]);
                  $scope.transferfront = { 'display':'none'};
              }
            }
            console.log($scope.itemtransfer);
          }
      });

  }

  $scope.gotransfer = function(item){

      $scope.view.push(item);       
      localStorage.setItem('view',JSON.stringify($scope.view));
      $window.open('transfer-view#?data=' + JSON.stringify(item.transfer_id));

      

  }
  //=========================ENDTRANSFER=================================//

     //document.getElementById("cssload-container").style.display = "block";      
      
    $scope.select_item = function(x,item){
      //console.log(item)
      $cookies.remove("dateon");
      delete $cookies["dateon"];
      $scope.dateon = new Array();
      $scope.view.push(item);
      $scope.dateon.push(item.open_Sun)
      $scope.dateon.push(item.open_Mon)
      $scope.dateon.push(item.open_Thu)
      $scope.dateon.push(item.open_Wed)
      $scope.dateon.push(item.open_Tue)
      $scope.dateon.push(item.open_Fri)
      $scope.dateon.push(item.open_Sat)
      console.log($scope.dateon) 
      $cookies.put("dateon", $scope.dateon);
      $scope.havetime = new Array();
      $http({
            method : 'post',
            url : "/api/Gettime/"+item.id,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
                for (var i = 0; i < res.data.length; i++) {
                    if(res.data.length == 1 ){
                        $scope.idround = res.data[i].id;
                        //console.log($scope.idround)
                        $cookies.put("idround", $scope.idround);
                        localStorage.setItem('view',JSON.stringify($scope.view));           
              
                        $window.open('view-item#?data=' + JSON.stringify(item.id));
                    }
                    else{
                        localStorage.setItem('view',JSON.stringify($scope.view)); 
                        $window.open('view-item#?data=' + JSON.stringify(item.id));
                    }
                }
            }
             

      });
    }
    $scope.select_itemtranfer = function(x,item){ 
     $scope.view.push(item);
        
        localStorage.setItem('view',JSON.stringify($scope.view)); 
        //angular.element(document.querySelector('#get-select-value')).triggerHandler('click',$scope.tour);
                    $window.open('hotel-view#?data=' + JSON.stringify(item.id));
    }
     $scope.select_itemhotel= function(x,item){  
      $scope.view.push(item);
        
        localStorage.setItem('view',JSON.stringify($scope.view));   
        //angular.element(document.querySelector('#get-select-value')).triggerHandler('click',$scope.tour);
                    $window.open('hotel-view#?data=' + JSON.stringify(item.id));
    }

      //=============================tour=============================//
    $http({
      method : 'post',
      url : "/api/Getproduct_onfront",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(res){
      if(res.status == "ok"){
        for(var i = 0 ; i < res.data.length; i++)
        {
            $scope.tour.push(res.data[i]);            
        }
        angular.forEach(res.data, function(data){                 
                //console.log(data.province);
                {
                  $scope.f1.push(data.province);
                }
            });
            //console.log($scope.f1)
            x = $scope.f1;
            //console.log(x);
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
            //console.log(y);
            for (var i = 0; i < y.length; i++) {
                
            
            angular.forEach($scope.province, function(data){                 
                if (data.id == y[i]) 
                {
                   $scope.finalprovince.push(data);
                }
            });
           }
          //console.log($scope.finalprovince); 
      }
    });
    $scope.selectcitytour = function(city){

      $scope.tour = new Array();
      $http({
          method : 'post',
          url : "/api/Getproduct_onfront",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(res){
          if(res.status == "ok"){
            //console.log(city);
            for (var i = 0; i < res.data.length; i++) {
              //console.log(city.id)
              //console.log(res.data[i].province)
              if (res.data[i].province == city.id) {
                  //console.log(res.data[i]);
                  $scope.tour.push(res.data[i]);
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
            //document.getElementById("cssload-container").style.display = "none";           
            for(var i = 0 ; i < 8; i++)
              {
                if(res.data[i].onsale_front == 1)
                  {
                    //console.log(res.data[i]);
                    $scope.itemspa.push(res.data[i]);
                  }
                  else{
                    console.log("NO HAVE");
                  }                  
              }
              angular.forEach(res.data, function(data){                 
                //console.log(data.province);
                {
                  $scope.f2.push(data.province);
                }
            });
            //console.log($scope.f2)
            x = $scope.f2;
            //console.log(x);
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
            //console.log(y);
            for (var i = 0; i < y.length; i++) {
                
            
            angular.forEach($scope.province, function(data){                 
                if (data.id == y[i]) 
                {
                   $scope.finalprovincespa.push(data);
                }
            });
           }
          //console.log($scope.finalprovincespa); 

          }
        });
        
    $scope.selectcityspa = function(city){

      $scope.itemspa = new Array();
      $http({
          method : 'post',
          url : "/api/Getselectdata_type_spa",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(res){
          if(res.status == "ok"){
            //console.log(city);
            for (var i = 0; i < res.data.length; i++) {
              //console.log(city.id)
              //console.log(res.data[i].province)
              if (res.data[i].province == city.id) {
                  //console.log(res.data[i]);
                  $scope.itemspa.push(res.data[i]);
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
             for(var i = 0 ; i < 8; i++)
                {

                  if(res.data[i].onsale_front == 1)
                    {
                      //console.log(res.data[i]);
                      $scope.itemboat.push(res.data[i]);
                    }
                    else{
                      console.log("NO HAVE");
                    }
                    
                }
                angular.forEach(res.data, function(data){                 
                //console.log(data.province);
                {
                  $scope.f3.push(data.province);
                }
            });
            //console.log($scope.f3)
            x = $scope.f3;
           // console.log(x);
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
            //console.log(y);
            for (var i = 0; i < y.length; i++) {
                
            
            angular.forEach($scope.province, function(data){                 
                if (data.id == y[i]) 
                {
                   $scope.finalprovinceboat.push(data);
                }
            });
           }
         // console.log($scope.finalprovinceboat); 



            }
          });
          
      $scope.selectcityboat = function(city){

      $scope.itemboat = new Array();
      $http({
          method : 'post',
          url : "/api/Getselectdata_type_boat",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(res){
          if(res.status == "ok"){
            //console.log(city);
            for (var i = 0; i < res.data.length; i++) {
             // console.log(city.id)
             // console.log(res.data[i].province)
              if (res.data[i].province == city.id) {
                 // console.log(res.data[i]);
                  $scope.itemboat.push(res.data[i]);
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
              for(var i = 0 ; i < 8; i++)
                {

                  if(res.data[i].onsale_front == 1)
                    {
                      //console.log(res.data[i]);
                      $scope.itemwedding.push(res.data[i]);
                    }
                    else{
                      console.log("NO HAVE");
                    }
                    //$scope.idwedding.push(res.data[i].id);
                }
                angular.forEach(res.data, function(data){                 
                //console.log(data.province);
                {
                  $scope.f4.push(data.province);
                }
            });
            //console.log($scope.f4)
            x = $scope.f4;
            //console.log(x);
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
            //console.log(y);
            for (var i = 0; i < y.length; i++) {
                
            
            angular.forEach($scope.province, function(data){                 
                if (data.id == y[i]) 
                {
                   $scope.finalprovincewedding.push(data);
                }
            });
           }
         // console.log($scope.finalprovincewedding); 





            }
          });
          
     $scope.selectcitywedding = function(city){

      $scope.itemwedding = new Array();
      $http({
          method : 'post',
          url : "/api/Getselectdata_type_wedding",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(res){
          if(res.status == "ok"){
            //console.log(city);
            for (var i = 0; i < res.data.length; i++) {
              //console.log(city.id)
              //console.log(res.data[i].province)
              if (res.data[i].province == city.id) {
                //  console.log(res.data[i]);
                  $scope.itemwedding.push(res.data[i]);
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
                for(var i = 0 ; i < 8; i++)
                {

                  if(res.data[i].onsale_front == 1)
                    {
                      //console.log(res.data[i]);
                      $scope.itemdiving.push(res.data[i]);
                    }
                    else{
                      console.log("NO HAVE");
                    }
                    //$scope.idwedding.push(res.data[i].id);
                }
                angular.forEach(res.data, function(data){                 
               // console.log(data.province);
                {
                  $scope.f5.push(data.province);
                }
            });
            //console.log($scope.f5)
            x = $scope.f5;
            //console.log(x);
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
            //console.log(y);
            for (var i = 0; i < y.length; i++) {
                
            
            angular.forEach($scope.province, function(data){                 
                if (data.id == y[i]) 
                {
                   $scope.finalprovincediving.push(data);
                }
            });
           }
          //console.log($scope.finalprovincediving); 


              }
            });
            
      $scope.selectcitydiving = function(city){

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
              if (res.data[i].province == city.id) {
                  console.log(res.data[i]);
                  $scope.itemdiving.push(res.data[i]);
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
                  for(var i = 0 ; i < 8; i++)
                  {

                    if(res.data[i].onsale_front == 1)
                      {
                        //console.log(res.data[i]);
                        $scope.itemgolf.push(res.data[i]);
                      }
                      else{
                        console.log("NO HAVE");
                      }
                      //$scope.idwedding.push(res.data[i].id);
                  }
                  angular.forEach(res.data, function(data){                 
                //console.log(data.province);
                {
                  $scope.f6.push(data.province);
                }
            });
           // console.log($scope.f6)
            x = $scope.f6;
           // console.log(x);
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
            //console.log(y);
            for (var i = 0; i < y.length; i++) {
                
            
            angular.forEach($scope.province, function(data){                 
                if (data.id == y[i]) 
                {
                   $scope.finalprovincegolf.push(data);
                }
            });
           }
          //console.log($scope.finalprovincegolf); 

                }
              });
              
      $scope.selectcitygolf = function(city){

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
              if (res.data[i].province == city.id) {
                  console.log(res.data[i]);
                  $scope.itemgolf.push(res.data[i]);
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
                    for(var i = 0 ; i < res.data.length; i++)
                    {
                        
                    
                        // console.log(res.data[i]);
                          $scope.itempackage.push(res.data[i]);
                        
                      }
                      angular.forEach(res.data, function(data){                 
               // console.log(data.province);
                {
                  $scope.f7.push(data.province);
                }
            });
            //console.log($scope.f7)
            x = $scope.f7;
            //console.log(x);
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
            //console.log(y);
            for (var i = 0; i < y.length; i++) {
                
            
            angular.forEach($scope.province, function(data){                 
                if (data.id == y[i]) 
                {
                   $scope.finalprovincepackage.push(data);
                }
            });
           }
          //console.log($scope.finalprovincepackage); 

                  }
                });
      $scope.selectcitypackage = function(city){
      $scope.itempackage = new Array();
      $http({
          method : 'post',
          url : "/api/Getselectdata_type_package",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(res){
          if(res.status == "ok"){
            console.log(city);
            for (var i = 0; i < res.data.length; i++) {
             // console.log(city.id)
             // console.log(res.data[i].province)
              if (res.data[i].province == city.id) {
                  //console.log(res.data[i]);
                  $scope.itempackage.push(res.data[i]);
              }
            }
          }
      });
  }
       
      //========================END===================================//

      //========================hotel==================================//
      //$scope.hotel = new Array();
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
      /*$http({
        method : 'post',
        url : "/api/Getproduct_hotel",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function(res){
        if(res.status == "ok"){
          for(var i = 0 ; i < 8; i++)
          {
            //document.getElementById("cssload-container").style.display = "none";
            $scope.hotel.push(res.data[i]);
            //console.log(res.data);
          }

        }
      }); */
      $scope.restaurant = function(){
        location.href="restaurant";

      }
      $scope.shopping = function(){
        location.href="shopping";

      }
      $scope.profile = function(){
        location.href="profile";

      }
      $scope.change_language = function(){
      $scope.lstart = { 'display':'none' };
      $scope.lopen = { 'display':'block' };
    }
      $scope.cartBook = function(){
        location.href="cart";

      }
      $scope.getrecommend = function(x){
        console.log("in getrecommend");
      }
      $scope.getpromotion = function(x){
        console.log("in getpromotion");
      }
      $scope.getpopular = function(x){
        console.log("in getpopular");
      }
    $scope.clickactive = function(city,name){
    $scope.city = city;
    console.log($scope.city);
    console.log(name)
    for (var i = 0; i < $scope.city.length; i++) {
      if ($scope.city[i].name == name) {
        angular.element(document.getElementById($scope.city[i].name)).css('background-color','rgb(85, 202, 245)');
         angular.element(document.getElementById($scope.city[i].name)).css('color','#fff');

      }
      else{        
        angular.element(document.getElementById($scope.city[i].name)).css('background-color','#fff');
        angular.element(document.getElementById($scope.city[i].name)).css('color','#333');
      }
    }
  }
  $scope.activetypetransfer = function(type,nametype){
    
    console.log(type);
    console.log(nametype)
    for (var i = 0; i < type.length; i++) {
      if (type[i].topic_en == nametype) {
        angular.element(document.getElementById(type[i].topic_en)).css('background-color','rgb(85, 202, 245)');
         angular.element(document.getElementById(type[i].topic_en)).css('color','#fff');

      }
      else{        
        angular.element(document.getElementById(type[i].topic_en)).css('background-color','#fff');
        angular.element(document.getElementById(type[i].topic_en)).css('color','#333');
      }
    }
  }
  $scope.clickactiveprovincespa = function(province,provincename){
    
    console.log(province);
    console.log(provincename)
    for (var i = 0; i < province.length; i++) {
      if (province[i].name == provincename) {
        angular.element(document.getElementById("spa"+province[i].name)).css('background-color','#55caf5');
         angular.element(document.getElementById("spa"+province[i].name)).css('color','#fff');

      }
      else{        
        angular.element(document.getElementById("spa"+province[i].name)).css('background-color','#fff');
        angular.element(document.getElementById("spa"+province[i].name)).css('color','#333');
      }
    }
  }
  $scope.clickactiveprovincetour = function(province,provincename){
    
    console.log(province);
    console.log(provincename)
    for (var i = 0; i < province.length; i++) {
      if (province[i].name == provincename) {
        console.log("if"+province[i].name)   
        angular.element(document.getElementById("tour"+province[i].name)).css('background-color','#55caf5');
         angular.element(document.getElementById("tour"+province[i].name)).css('color','#fff');

      }
      else{ 
      console.log(province[i].name)       
        angular.element(document.getElementById("tour"+province[i].name)).css('background-color','#fff');
        angular.element(document.getElementById("tour"+province[i].name)).css('color','#333');
      }
    }
  }
  $scope.clickactiveprovinceboat = function(province,provincename){
    
    console.log(province);
    console.log(provincename)
    for (var i = 0; i < province.length; i++) {
      if (province[i].name == provincename) {
        console.log("boat"+province[i].name)
        angular.element(document.getElementById("boat"+province[i].name)).css('background-color','#55caf5');
         angular.element(document.getElementById("boat"+province[i].name)).css('color','#fff');

      }
      else{        
        angular.element(document.getElementById("boat"+province[i].name)).css('background-color','#fff');
        angular.element(document.getElementById("boat"+province[i].name)).css('color','#333');
      }
    }
  }
  $scope.clickactiveprovincewedding = function(province,provincename){
    
    console.log(province);
    console.log(provincename)
    for (var i = 0; i < province.length; i++) {
      if (province[i].name == provincename) {
       
        angular.element(document.getElementById("wedding"+province[i].name)).css('background-color','#55caf5');
         angular.element(document.getElementById("wedding"+province[i].name)).css('color','#fff');

      }
      else{        
        angular.element(document.getElementById("wedding"+province[i].name)).css('background-color','#fff');
        angular.element(document.getElementById("wedding"+province[i].name)).css('color','#333');
      }
    }
  }
  $scope.clickactiveprovincediving = function(province,provincename){
    
    console.log(province);
    console.log(provincename)
    for (var i = 0; i < province.length; i++) {
      if (province[i].name == provincename) {
       
        angular.element(document.getElementById("diving"+province[i].name)).css('background-color','#55caf5');
         angular.element(document.getElementById("diving"+province[i].name)).css('color','#fff');

      }
      else{        
        angular.element(document.getElementById("diving"+province[i].name)).css('background-color','#fff');
        angular.element(document.getElementById("diving"+province[i].name)).css('color','#333');
      }
    }
  }
  $scope.clickactiveprovincegolf = function(province,provincename){
    
    console.log(province);
    console.log(provincename)
    for (var i = 0; i < province.length; i++) {
      if (province[i].name == provincename) {
       
        angular.element(document.getElementById("golf"+province[i].name)).css('background-color','#55caf5');
         angular.element(document.getElementById("golf"+province[i].name)).css('color','#fff');

      }
      else{        
        angular.element(document.getElementById("golf"+province[i].name)).css('background-color','#fff');
        angular.element(document.getElementById("golf"+province[i].name)).css('color','#333');
      }
    }
  }
  $scope.clickactiveprovincepackage = function(province,provincename){
    
    console.log(province);
    console.log(provincename)
    for (var i = 0; i < province.length; i++) {
      if (province[i].name == provincename) {
       
        angular.element(document.getElementById("package"+province[i].name)).css('background-color','#55caf5');
         angular.element(document.getElementById("package"+province[i].name)).css('color','#fff');

      }
      else{        
        angular.element(document.getElementById("package"+province[i].name)).css('background-color','#fff');
        angular.element(document.getElementById("package"+province[i].name)).css('color','#333');
      }
    }
  }
//function = sendstatusfacebook(data){

 //   console.log(data)
//}


/*FB.init({
      appId  : '675698835926000',
      status : true, // check login status
      cookie : true, // enable cookies to allow the server to access the session
      xfbml  : true  // parse XFBML
    });

    FB.getLoginStatus(function(response) {
      if (response.status == 'connected') {
        getCurrentUserInfo(response)
      } else {
        FB.login(function(response) {
          if (response.authResponse){
            getCurrentUserInfo(response)
          } else {
            console.log('Auth cancelled.')
          }
        }, { scope: 'email' });
      }
    });

    function getCurrentUserInfo() {
      FB.api('/me', function(userInfo) {
        //sendstatusfacebook(userInfo);
        console.log(userInfo)
        console.log(userInfo.name + ': ' + userInfo.email);
      });
    }*/

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };
    

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

app.directive('myCurrentTime', ['$interval', 'dateFilter',
      function($interval, dateFilter) {
        // return the directive link function. (compile function not needed)
        return function(scope, element, attrs) {
          var format,  // date format
              stopTime; // so that we can cancel the time updates

          // used to update the UI
          function updateTime() {
            element.text(dateFilter(new Date(), format));
          }

          // watch the expression, and update the UI on change.
          scope.$watch(attrs.myCurrentTime, function(value) {
            format = value;
            updateTime();
          });

          stopTime = $interval(updateTime, 1000);

          // listen on DOM destroy (removal) event, and cancel the next UI update
          // to prevent updating time after the DOM element was removed.
          element.on('$destroy', function() {
            $interval.cancel(stopTime);
          });
        }
      }]);

  app.config(function($authProvider) {

        // Optional: For client-side use (Implicit Grant), set responseType to 'token' (default: 'code')
    $authProvider.facebook({
      clientId: '675698835926000',
      responseType: '0bfe01f652915d02c8f9ef053b16bd86'
    });

    /*$authProvider.google({
      clientId: 'Google Client ID'
    });

    $authProvider.github({
      clientId: 'GitHub Client ID'
    });

    $authProvider.linkedin({
      clientId: 'LinkedIn Client ID'
    });

    $authProvider.instagram({
      clientId: 'Instagram Client ID'
    });

    $authProvider.yahoo({
      clientId: 'Yahoo Client ID / Consumer Key'
    });

    $authProvider.live({
      clientId: 'Microsoft Client ID'
    });

    $authProvider.twitch({
      clientId: 'Twitch Client ID'
    });

    $authProvider.bitbucket({
      clientId: 'Bitbucket Client ID'
    });

    $authProvider.spotify({
      clientId: 'Spotify Client ID'
    });*/

    // No additional setup required for Twitter

    
    $authProvider.facebook({
      name: 'facebook',
      url: '/auth/facebook',
      authorizationEndpoint: 'https://www.facebook.com/v2.7/dialog/oauth',
      redirectUri: window.location.origin + '/',
      requiredUrlParams: ['display', 'scope'],
      scope: ['email'],
      scopeDelimiter: ',',
      display: 'popup',
      oauthType: '2.0',
      popupOptions: { width: 580, height: 400 }
    });
    $authProvider.oauth2({
  name: null,
  url: null,
  clientId: null,
  redirectUri: null,
  authorizationEndpoint: null,
  defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
  requiredUrlParams: null,
  optionalUrlParams: null,
  scope: null,
  scopePrefix: null,
  scopeDelimiter: null,
  state: null,
  oauthType: null,
  popupOptions: null,
  responseType: 'code',
  responseParams: {
    code: 'code',
    clientId: '675698835926000',
    redirectUri: 'redirectUri'
  }
});

  });
  



 
  