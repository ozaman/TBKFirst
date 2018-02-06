var app = angular.module('myApp', ['ngCookies','ngRoute']);
  app.controller('myCtrl', function($scope, $location, $http, $cookies, $window) {
    $scope.idindex ;
    $scope.y;
    $scope.id = new Array();
    $scope.id2 = new Array();
    $scope.tour= new Array();
    $scope.tour2= new Array();
    $scope.res = new Array();
    $scope.spa = new Array();
    $scope.spa2= new Array();
    $scope.idspa = new Array();
    
    var lengthpro;
      $scope.authen = function(){
        $scope.loginbg = {'display':'block'};
        $scope.registerbg = {'display':'none'};
      }
      $scope.register = function(){
        $scope.loginbg = {'display':'none'};
        $scope.registerbg = {'display':'block'};
      }
      $scope.page = function(){        
        location.href="page2.html";
      }
     
     document.getElementById("tour").style.display = "block";
      $http({
            method : 'post',
            url : "/api/getdataproduct", 
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){

            if(res.status == "ok"){
              $scope.res = res.data;
              document.getElementById("circularG").style.display = "none";
              
              
              for(var i = 0 ; i < res.data.length; i++)
                {
                  if((res.data[i].onsale_top == 1) && (res.data[i].type == "Day Tour"))
                    {
                      $scope.tour2.push(res.data[i]);                      
                    }

                }  
                console.log($scope.tour2);                
                for (var x = 0; x < 8; x++)
                 {
                  $scope.tour.push($scope.tour2[x]);                  
                  console.log($scope.tour2[x].id);                  
                  $scope.id.push($scope.tour2[x].id);                 
                 } 
            }
      });
      //--------------------tour------------------------------------------

      $scope.getcompare = function(x){
        //alert(x);
        $scope.tour =[];
        $scope.tour2 =[];
        $scope.num = x;
        $http({
            method : 'post',
            url : "/api/getdataproduct", 
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
              var max =8;
              lengthpro = res.data.length;              
              for(var i = 0 ; i < res.data.length ; i++)
                {   
                  //console.log($scope.num);               
                  //console.log("===========================IN FOR=============================");
                  if($scope.num == 1)
                  {

                    if((res.data[i].onsale_front == 1) && (res.data[i].type == "Day Tour"))
                    {
                      console.log(res.data[i]);
                      $scope.tour2.push(res.data[i]);
                    }
                  }
                  else if($scope.num == 2)
                  {
                    //console.log("=========================IN IF CASE2===========================");
                    if((res.data[i].onsale_enable == 1) && (res.data[i].type == "Day Tour"))
                    {
                      console.log("In case x=2 :");
                      console.log(res.data[i]);
                      $scope.tour2.push(res.data[i]);
                    }
                    else{
                      console.log("No case");
                    }
                  }
                  else if($scope.num == 3)
                  {
                    if((res.data[i].onsale_promotion == 1) && (res.data[i].type == "Day Tour"))
                    {
                      console.log("In case x=2 :");
                      console.log(res.data[i]);
                      $scope.tour2.push(res.data[i]);
                    }
                    else{
                      console.log("No case");
                    }
                  }
                  else if ($scope.num == 4)
                  {
                    if ((res.data[i].onsale_top == 1) && (res.data[i].type == "Day Tour"))
                    {
                      console.log(res.data[i]);
                      $scope.tour2.push(res.data[i]);
                    }
                    else{
                      console.log("No case");
                    }
                  }
                  else if($scope.num == 5)
                  {
                    if(res.data[i].type == "Day Tour"){

                      console.log(res.data[i]);
                      $scope.tour2.push(res.data[i]);
                    }
                    else{
                      console.log("No case");
                    }
                  }
                }
                console.log($scope.tour2);
                for (var x = 0; x < 8; x++)
                 {

                  $scope.tour.push($scope.tour2[x]);                  
                  console.log($scope.tour2[x].id);                  
                  $scope.id.push($scope.tour2[x].id);
                 
                 }
            }
      });
      }

      //------------------------------SELECT INDEX TOUR---------------------------------------

      $scope.select_item = function(x){
        $scope.id[x];
        console.log($scope.id[x]);
        //angular.element(document.querySelector('#get-select-value')).triggerHandler('click',$scope.tour);
        location.href="page3.html#?data=" + JSON.stringify($scope.id[x]);
      }
      //------------------------------END--------------------------------------------


      //-------------------------------SELECT INDEX SPA------------------------------
      $scope.select_itemspa = function(x){
        $scope.idspa[x];
        console.log($scope.idspa[x]);
        //angular.element(document.querySelector('#get-select-value')).triggerHandler('click',$scope.tour);
        location.href="page3.html#?data=" + JSON.stringify($scope.idspa[x]);
      }
      //-------------------------------END-------------------------------------------


      //====================GET SPA=============================
      $scope.getspa = function(){
        document.getElementById("tour").style.display = "none";
        document.getElementById("spa").style.display = "block";

          console.log($scope.res);
          console.log($scope.res.length);
          for(var i = 0 ; i < $scope.res.length; i++)
                {
                  
                  if(($scope.res[i].onsale_front == 1) && ($scope.res[i].type == "Spa"))
                    {
                       console.log($scope.res[i]);
                      $scope.spa2.push($scope.res[i]);
                      
                    }

                  
                  console.log($scope.res.length);
                }
                lengthpro = $scope.tour2.length;
                console.log(lengthpro);
                
                for (var x = 0; x < 8; x++)
                 {
                  console.log($scope.spa2[x]);
                  $scope.spa.push($scope.spa2[x]);                  
                  console.log($scope.spa2[x].id);                  
                  $scope.idspa.push($scope.spa2[x].id);
                 
                 }
      }
      //==============================END====================

      $scope.getdaytour = function(){
        document.getElementById("spa").style.display = "none";
        document.getElementById("tour").style.display = "block";
        $http({
            method : 'post',
            url : "/api/getdataproduct", 
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){

            if(res.status == "ok"){
              $scope.res = res.data;
              
              document.getElementById("circularG").style.display = "none";
              
              
              for(var i = 0 ; i < res.data.length; i++)
                {
                  if((res.data[i].onsale_front == 1) && (res.data[i].type == "Day Tour"))
                    {
                      $scope.tour2.push(res.data[i]);
                      
                    }
                } 
                onsole.log($scope.tour2);               
                for (var x = 0; x < 8; x++)
                 {
                  console.log($scope.tour2[x]);
                  $scope.tour.push($scope.tour2[x]);                  
                  console.log($scope.tour2[x].id);                  
                  $scope.id.push($scope.tour2[x].id);
                 
                 }
            }

      });
        //$window.location.reload();
      }
      //========================GET BOAT==============================
      $scope.boat= new Array();
      $scope.boat2= new Array();
      $scope.idboat = new Array();
      $scope.getboat = function(){
        
        document.getElementById("tour").style.display = "none";
        document.getElementById("spa").style.display = "none";
        document.getElementById("boat").style.display = "block";

          console.log($scope.res);
          console.log($scope.res.length);
          for(var i = 0 ; i < $scope.res.length; i++)
                {
                  
                  if(($scope.res[i].onsale_front == 1) && ($scope.res[i].type == "Boat"))
                    {
                       console.log($scope.res[i]);
                      $scope.boat2.push($scope.res[i]);                      
                    }
                } 
                 console.log($scope.boat2);              
                for (var x = 0; x < 8; x++)
                 {
                   console.log($scope.boat2[x]);
                  $scope.boat.push($scope.boat2[x]);                  
                  console.log($scope.boat2[x].id);                  
                  $scope.idboat.push($scope.boat2[x].id);
                 
                 }
         
      }
      $scope.select_itemboat = function(x){

        $scope.idboat[x];
        console.log($scope.idboat[x]);
        //angular.element(document.querySelector('#get-select-value')).triggerHandler('click',$scope.tour);
        location.href="page3.html#?data=" + JSON.stringify($scope.idboat[x]);
      }
      //======================GET WEDDING=============================
      $scope.wedding= new Array();
      $scope.wedding2= new Array();
      $scope.idwedding = new Array();
      $scope.Getwedding = function(){
        document.getElementById("tour").style.display = "none";
        document.getElementById("spa").style.display = "none";
        document.getElementById("boat").style.display = "none";
        document.getElementById("wedding").style.display = "block";

          console.log($scope.res);
          console.log($scope.res.length);
          for(var i = 0 ; i < $scope.res.length; i++)
                {
                 
                  if(($scope.res[i].onsale_front == 1) && ($scope.res[i].type == "Wedding"))
                    {
                       //console.log($scope.res[i]);
                      $scope.wedding2.push($scope.res[i]);
                      
                    }
                }
                console.log($scope.wedding2);
                for (var x = 0; x < 8; x++)
                 {
                  console.log($scope.wedding2[x]);
                  $scope.wedding.push($scope.wedding2[x]);                  
                  console.log($scope.wedding2[x].id);                  
                  $scope.idwedding.push($scope.wedding2[x].id);
                 
                 }
      }
      $scope.select_itemwedding = function(x){      
        $scope.idwedding[x];
        console.log($scope.idwedding[x]);       
        //angular.element(document.querySelector('#get-select-value')).triggerHandler('click',$scope.tour);
        location.href="page3.html#?data=" + JSON.stringify($scope.idwedding[x]);

      }
      //======================GET DIVING=============================
      $scope.diving= new Array();
      $scope.diving2= new Array();
      $scope.iddiving = new Array();
      $scope.Getdiving = function(){
        document.getElementById("tour").style.display = "none";
        document.getElementById("spa").style.display = "none";
        document.getElementById("boat").style.display = "none";
        document.getElementById("wedding").style.display = "none";
        document.getElementById("diving").style.display = "block";

          console.log($scope.res);
          console.log($scope.res.length);
          for(var i = 0 ; i < $scope.res.length; i++)
                {
                                   
                  if(($scope.res[i].onsale_front == 1) && ($scope.res[i].type == "Diving"))
                    {
                      console.log($scope.res[i]);
                      $scope.diving2.push($scope.res[i]);
                      
                    }
                }
                console.log($scope.diving2);
                for (var x = 0; x < 8; x++)
                 {
                  console.log($scope.diving2[x]);
                  $scope.diving.push($scope.diving2[x]);                  
                  console.log($scope.diving2[x].id);                  
                  $scope.iddiving.push($scope.diving2[x].id);
                 
                 }
          
      }
      $scope.select_itemdiving = function(x){
        $scope.iddiving[x];
        console.log($scope.iddiving[x]);        
        //angular.element(document.querySelector('#get-select-value')).triggerHandler('click',$scope.tour);
        location.href="page3.html#?data=" + JSON.stringify($scope.iddiving[x]);

      }
      //======================GET GOLF=============================
      $scope.golf= new Array();
      $scope.golf2= new Array();
      $scope.idgolf = new Array();
      $scope.Getgolf = function(){
        document.getElementById("tour").style.display = "none";
        document.getElementById("spa").style.display = "none";
        document.getElementById("boat").style.display = "none";
        document.getElementById("wedding").style.display = "none";
        document.getElementById("diving").style.display = "none";
        document.getElementById("golf").style.display = "block";

          console.log($scope.res);
          console.log($scope.res.length);
          for(var i = 0 ; i < $scope.res.length; i++)
                {
                  console.log($scope.res[i].type);                  
                  if(($scope.res[i].onsale_front == 1) && ($scope.res[i].type == "Golf"))
                    {
                      console.log($scope.res[i]);
                      $scope.golf2.push($scope.res[i]);                      
                    }

                  
                  
                }
                for (var x = 0; x < 8; x++)
                 {
                  console.log($scope.golf2[x]);
                  $scope.golf.push($scope.golf2[x]);                  
                  console.log($scope.golf2[x].id);                  
                  $scope.idgolf.push($scope.golf2[x].id);
                 
                 }
          
      }
      $scope.select_itemgolf = function(x){
        $scope.idgolf[x];
        console.log($scope.idgolf[x]);
        //angular.element(document.querySelector('#get-select-value')).triggerHandler('click',$scope.tour);
        location.href="page3.html#?data=" + JSON.stringify($scope.idgolf[x]);

      }
      //======================GET GOLF=============================
      $scope.package = new Array();
      $scope.package2= new Array();
      $scope.idpackage = new Array();      
      $scope.Getpackage = function(){
        document.getElementById("tour").style.display = "none";
        document.getElementById("spa").style.display = "none";
        document.getElementById("boat").style.display = "none";
        document.getElementById("wedding").style.display = "none";
        document.getElementById("diving").style.display = "none";
        document.getElementById("golf").style.display = "none";
        document.getElementById("package").style.display = "block";

         
          for(var i = 0 ; i < $scope.res.length; i++)
                {
                 
                  if(($scope.res[i].onsale_front == 1) && ($scope.res[i].type == "Package"))
                    {
                       //console.log($scope.res[i]);
                      $scope.package2.push($scope.res[i]);
                      
                    }

                }
                console.log($scope.package2);
                for (var x = 0; x < 8; x++)
                 {
                  console.log($scope.package2[x].id);
                   console.log($scope.package2[x]);
                  $scope.package.push($scope.package2[x]);                  
                  //console.log($scope.package2[x].id);                  
                  $scope.idpackage.push($scope.package2[x].id);                 
                 }
      }
      $scope.select_itempackage = function(x){        
        $scope.idpackage[x];
        console.log($scope.idpackage[x]);
        //angular.element(document.querySelector('#get-select-value')).triggerHandler('click',$scope.tour);
        location.href="page3.html#?data=" + JSON.stringify($scope.idpackage[x]);

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
      
  });