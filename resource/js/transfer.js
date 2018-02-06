/**
 * Created by ozaclever on 11/07/2559.
 */



var app = angular.module('myApp', ['ngCookies','ngRoute','ui.bootstrap','ngDialog']);
  app.controller('myCtrl', function($scope, $location, $http, $cookies, $window,ngDialog) {
     angular.element(document.querySelector('#inTurnFadingTextG')).css('display', 'none');
     angular.element(document.querySelector('#inTurnFadingTextGPro')).css('display', 'block');
    var host = 2;
     var ip = "";
     if (host == 1) {
          ip = "http://gh-travel.com";
     }
     else{
          ip = "http://localhost:8080"
     }
     
    //localStorage.clear();
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
     $scope.cart = new Array();
    
    if (typeof localStorage["item"] !== "undefined" && localStorage["item"] !== "undefined") {
      $scope.cart = JSON.parse(localStorage["item"]);
      console.log($scope.cart);
    }
    
      $scope.province = new Array();
      $scope.t1= new Array();
      $scope.to1= new Array();
      $scope.itemtransfer = new Array();
      $scope.itemtransfertop = new Array();
      $scope.provincetransfer = new Array();
      $scope.idtransfertype = new Array();
      $scope.idtransferprovince = new Array();
      $scope.finaltypetransfer = new Array();
      $scope.finalprovincetransferto = new Array();
      $scope.finalprovincetransfer = new Array();
      console.log($scope.finalprovincetransfer)
      $scope.idtransferprovinceto = new Array();
      $scope.nametooo;
      $scope.cityfrom;
      $scope.cityto;
      $scope.pageSize = 8;
      $scope.currentPage = 1;
      $scope.maxSize = 5;
      //$scope.totalItems = $scope.data.length;
      //$scope.detailitemfinal = new Array();
      //$scope.detailitem;
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
    //====================HOTEL==========================//
    
    $http({
          method : 'post',
          url : "/api/Getprovince",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
          if(res.status == "ok")
          {
              //console.log(res.data);
              for(var i = 0 ; i < res.data.length; i++)
              {
                //console.log(res.data[i]);
                $scope.province.push(res.data[i]); 
              }
                 
          }
                    
    });
          $scope.check4 = {'display': 'none'};
    //=============================Transfer==========================//
    $scope.car;
       $http({
          method : 'post',
          url : "/api/Gettransfer_product_all",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
              //console.log(res.data)
              $scope.itemtransferone = res.data
                for(var i = 0 ; i <50; i++)
                {
                  //console.log(res.data[i]);
                  $scope.idtransfertype.push(parseInt(res.data[i].cartype));
                  $scope.idtransferprovince.push(parseInt(res.data[i].stay));
                  //$scope.itemtransferone = res.data[i];
                  //$scope.idtransferprovinceto.push(parseInt(res.data[i].stay_to));
                  
                  
                }
                //console.log($scope.itemtransfer);
                 
              $http({
                method : 'post',
                url : "/api/Getcar_product",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function(res){
                if(res.status == "ok")
                {
                    $scope.car = res.data;

                     var x = $scope.idtransfertype;
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
                      
                      for (var i = 0; i < y.length; i++) {
                      angular.forEach($scope.car, function(data){
                                   
                          if (data.id == y[i]) 
                          {
                             //$scope.finaltypetarnsfer.push(data);
                          }
                      });
                    }
                    
                      
                      var a = $scope.idtransferprovince;
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




                       //---------------------------itemonload--------------------//
                      angular.forEach($scope.itemtransferone, function(dataonload){
                        //console.log(dataonload)

                          //console.log(b[0]);  
                          //$scope.idtransferprovinceto.push(parseInt(dataonload.province_id));        
                          if (dataonload.province_id == b[0]) 
                          {
                            
                            //console.log(dataonload)
                            //console.log($scope.detailitem)
                             $scope.itemtransfer.push(dataonload);
                             $scope.idtransferprovinceto.push(parseInt(dataonload.province_id_to));
                             $scope.nametooo = dataonload.province_name;
                             angular.element(document.querySelector('#inTurnFadingTextGPro')).css('display', 'none');
                           }

                          else{
                            console.log("Not Work!!");
                          }
                      });
                      //console.log($scope.itemtransfer)
                      //console.log($scope.detailitemfinal)

                      //-------------------------------------------
                     var c = $scope.idtransferprovinceto;
                          var d = new Array();
                          var first3 = 0;
                          var count3 = 0;
                          for(var i = 0 ; i < c.length; i++)
                           {
                            count3 = 0;              
                            if(first3==0)
                                {
                                  d.push(c[i]);
                                  first3++;
                                }
                                for(var j = 0 ; j < d.length ; j++)
                                {                    
                                  if(d[j]!=c[i])
                                  {
                                    count3++;
                                    if(count3==d.length)
                                    {
                                      d.push(c[i]);
                                    }
                                  }
                                }              
                          }
                          console.log(d); 
                        for (var i = 0; i < d.length; i++) {
                          angular.forEach($scope.province, function(data){ 
                              if (data.id == d[i]) 
                              {
                                 $scope.finalprovincetransferto.push(data);
                                 console.log($scope.nametooo) 
                                 
                              }

                              
                          });
                     }
                      console.log($scope.finalprovincetransferto);
                      for (var i = 0; i < b.length; i++) {
                        angular.forEach($scope.province, function(data){ 
                            if (data.id == b[i]) 
                            {
                              
                               $scope.finalprovincetransfer.push(data);
                            }
                            
                        });

                     }
                     angular.forEach($scope.idtransferprovince, function(data){ 
                      console.log(data);
                            
                            
                        });
                     
                      
                     console.log($scope.finalprovincetransfer);

                     $scope.idexo = $scope.finalprovincetransfer[0].name;
                     $scope.cityfrom = $scope.finalprovincetransfer[0];
                     console.log($scope.cityfrom);
                     
                     
                }                  
                      
              });  
            
            }

    }); 
$scope.getcondition = function(x){
  $scope.model = x;

  
 $http({
          method : 'post',
          url : "/api/Get_web_car_capacity/"+$scope.model,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
          if(res.status == "ok")
          {
            console.log(res.data);
              $scope.detailitem = res.data;
              ngDialog.open({
            template: 'firstDialog',
            controller: 'myCtrl',
            className: 'ngdialog-theme-default ngdialog-theme-custom',
            scope: $scope
            });//console.log(res.data);
              
                 
          }
                    
    });
  
}
        
        $scope.selectcitytransfer = function(city){
          console.log(city);
          $scope.cityfrom = city;
          $scope.idtransfertype = new Array();
          $scope.itemtransfer = new Array();
          $scope.finaltypetransfer = new Array();
         // $scope.finaltypetarnsfer = new Array();
           $scope.finaltypetransferto = new Array();
           $scope.idtransferprovinceto = new Array();
           $scope.finalprovincetransferto = new Array();
          $http({
              method : 'post',
              url : "/api/Gettransfer_product_all",
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(res){
              if(res.status == "ok"){
                for (var i = 0; i < res.data.length; i++) {
                  if (res.data[i].province_id == city.id) {
                     // $scope.idtarnsfertype.push(parseInt(res.data[i].cartype));
                      $scope.idtransferprovince.push(parseInt(res.data[i].stay));
                      $scope.itemtransfer.push(res.data[i]);
                      //console.log(res.data[i].stay_to);
                      //if(city.id ==(res.data[i].stay)){
                        //console.log(res.data[i]);
                        $scope.idtransferprovinceto.push(parseInt(res.data[i].stay_to));
                      //}
                      
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
                      
                          var c = $scope.idtransferprovinceto;
                          var d = new Array();
                          var first3 = 0;
                          var count3 = 0;
                          for(var i = 0 ; i < c.length; i++)
                           {
                            count3 = 0;              
                            if(first3==0)
                                {
                                  d.push(c[i]);
                                  first3++;
                                }
                                for(var j = 0 ; j < d.length ; j++)
                                {                    
                                  if(d[j]!=c[i])
                                  {
                                    count3++;
                                    if(count3==d.length)
                                    {
                                      d.push(c[i]);
                                    }
                                  }
                                }              
                          }
                          console.log(d); 
                        for (var i = 0; i < d.length; i++) {
                          angular.forEach($scope.province, function(data){ 
                              if (data.id == d[i]) 
                              {
                                 $scope.finalprovincetransferto.push(data);
                              }
                              
                          });
                     }
                      console.log($scope.finalprovincetransferto);
                       
                    }     
                  }); 
              }
            });
  }  


   $scope.selectcitytransferto = function(cityto){
          console.log(cityto.name);
          $scope.finaltypetransfer = new Array();
          console.log(cityto);
          $scope.cityto = cityto;

          console.log($scope.cityfrom)
          //$scope.cityfrom = city.name; 
          $scope.idtransfertype = new Array();     
          $scope.itemtransfer = new Array();
          //$scope.finaltypetarnsfer = new Array();
          //finaltypetarnsfer
          $scope.check4 = {'display': 'block'};
      
          $http({
              method : 'post',
              url : "/api/Gettransfer_product_all",
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(res){
              if(res.status == "ok"){
                  console.log(res.data);
                for (var i = 0; i < res.data.length; i++) {
                  if (res.data[i].province_id == $scope.cityfrom.id) {  
                      if (res.data[i].province_id_to == cityto.id) {
                        console.log(res.data[i].cartype)
                        $scope.idtransfertype.push(parseInt(res.data[i].cartype));
                        $scope.itemtransfer.push(res.data[i]);
                      }                 
                      
                      
                      
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
                      var x = $scope.idtransfertype;
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
                          var c = $scope.idtransferprovinceto;
                      console.log(c);
                          var d = new Array();
                          var first3 = 0;
                          var count3 = 0;
                          for(var i = 0 ; i < c.length; i++)
                           {
                            count3 = 0;              
                            if(first3==0)
                                {
                                  d.push(c[i]);
                                  first3++;
                                }
                                for(var j = 0 ; j < d.length ; j++)
                                {                    
                                  if(d[j]!=c[i])
                                  {
                                    count3++;
                                    if(count3==d.length)
                                    {
                                      d.push(c[i]);
                                    }
                                  }
                                }              
                          }
                          console.log(d);    
                          //---------------------provinceto---------------------//
                                               
                          console.log(y);
                          for (var i = 0; i < y.length; i++) {
                          angular.forEach($scope.car, function(data){                                
                              if (data.id == y[i]) 
                              {
                                 $scope.finaltypetransfer.push(data);
                              }
                          });
                        }

                        for (var i = 0; i < d.length; i++) {
                          angular.forEach($scope.province, function(data){ 
                              if (data.id == d[i]) 
                              {
                                 //$scope.finalprovincetransferto.push(data);
                              }
                              
                          });
                     }
                      //console.log($scope.finalprovincetransferto);

                    
                          console.log($scope.finaltypetransfer);                          
                    }     
                  }); 
                                   
                    
              }
            });
  }    
     $scope.selecttypetransfer = function(type){

       $scope.itemtransfer = new Array();
       console.log(type.topic_en)
       console.log($scope.cityfrom.id)
       console.log($scope.cityto.id)
       //console.log($scope.itemtransfer)
      $http({
          method : 'post',
          url : "/api/Gettransfer_product_all",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(res){
          if(res.status == "ok"){
            console.log(type);
            for (var i = 0; i < res.data.length; i++) {
              //console.log(type.id)
             // console.log(res.data[i].cartype)
              if (res.data[i].cartype == type.id) {
                  if (res.data[i].province_id == $scope.cityfrom.id && (res.data[i].province_id_to == $scope.cityto.id)) {
                    console.log(res.data[i])
                    $scope.itemtransfer.push(res.data[i]);
                  }
                  //console.log(res.data[i]);
                  
              }
            }
            console.log($scope.itemtransfer);
          }
      });

  }

  $scope.gotransfer = function(item){
      $scope.view.push(item);
      //console.log(item.transfer_id);  
      //localStorage.clear();    
      localStorage.setItem('view',JSON.stringify($scope.view));
      $window.open('transfer-view#?data=' + JSON.stringify(item.transfer_id));

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
      $scope.gohotel = function(){
        location.href="hotels";

      }

      
    /*$scope.gotransfer = function(item){
      //$scope.itemhotel.push(item);
      console.log(item.transfer_id);      
      //localStorage.setItem('itemhotel',JSON.stringify($scope.itemhotel));
      $window.open('transfer-view#?data=' + JSON.stringify(item.transfer_id));

    }*/
    //$scope.resoul = true;
    $scope.moreitem = function(){
      //alert("dsds");
      var resoul = angular.element(document.querySelector('#transportitem'))
      resoul.css('height','auto');
      $scope.resoul = true;
    }
    $scope.morehide = function(){
      //alert("dsds");
      var resoul = angular.element(document.querySelector('#transportitem'))
      resoul.css('height','130px');
      $scope.resoul = false;
    }                
    console.log($scope.itemhotel);
  $scope.clickactive = function(city,name){
    $scope.city = city;
    console.log($scope.city);
    console.log(name)
    for (var i = 0; i < $scope.city.length; i++) {
      if ($scope.city[i].name == name) {
        angular.element(document.getElementById($scope.city[i].name)).css('background-color','#8bc34a');
        angular.element(document.getElementById($scope.city[i].name)).css('border-top-right-radius','5px');
         angular.element(document.getElementById($scope.city[i].name)).css('border-top-left-radius','5px');
         angular.element(document.getElementById($scope.city[i].name)).css('color','#fff');

      }
      else{        
        angular.element(document.getElementById($scope.city[i].name)).css('background-color','#fff');
        angular.element(document.getElementById($scope.city[i].name)).css('color','#333');
      }
    }
   
   
    
  }
  /*$scope.checkedactive = function(x){
    //console.log($scope.idexo)
    //console.log(x[0].name);
    var text = "A";
   $scope.idtext = text + x[0].name;
    console.log($scope.idtext);
    
     //angular.element(document.getElementById($scope.idtext)).css('background-color','#02946d');
      //                       angular.element(document.getElementById(dataonload.province_name)).css('border-top-right-radius','5px');
      ////                       angular.element(document.getElementById(dataonload.province_name)).css('border-top-left-radius','5px');
      //                       angular.element(document.getElementById(dataonload.province_name)).css('color','#fff'); 
                          
  }*/
  /*$scope.clickactivecityto = function(cityto,x){
    $scope.cityto = cityto;
    console.log($scope.cityto);
    console.log(x)
    for (var i = 0; i < cityto.length; i++) {
      if (x.target.outerText == cityto[i]) {
        $scope.select = true;
        console.log($scope.value);

      }
      else{
        $scope.select = false;
        console.log("else"+ $scope.value);
      }
      }
    }*/


  

  $scope.calssative = function(city){
    console.log(city)
  
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
app.filter('startFrom',function(){
  return function(data,start){
    return data.slice(start); 
  }
}); 
