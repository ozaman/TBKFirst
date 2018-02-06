var app = angular.module('myApp', ['ngCookies','ngRoute','ngSanitize']);
  app.controller('myCtrl', function($scope, $location, $http, $cookies,$sce ,$window,$interval) {
     angular.element(document.querySelector('#inTurnFadingTextG')).css('display', 'none');
      //$scope.product = new Array();
      $scope.anmateprocess = { 'display':'none'};
      var host = 2;
     var ip = "";
     if (host == 1) {
          ip = "http://gh-travel.com";
     }
     else{
          ip = "http://localhost:8080"
     }
     
      $scope.totalpricesum =0;
      $scope.tourrecomm = [];
       $scope.data = [];
     $scope.cart = [];
         if (typeof localStorage["item"] !== "undefined" && localStorage["item"] !== "undefined") {
      $scope.cart = JSON.parse(localStorage["item"]);
      console.log($scope.cart);

    }
    $scope.carttransfer = [];
         if (typeof localStorage["itemtransfer"] !== "undefined" && localStorage["itemtransfer"] !== "undefined") {
      $scope.carttransfer = JSON.parse(localStorage["itemtransfer"]);
      console.log($scope.carttransfer);

    }
    if ($scope.cart.length > 0 && $scope.carttransfer.length <= 0) {
      $scope.channelhead = 'channel-head2';
      $scope.navbarbrand = 'navbar-brand2';
      $scope.navbardefault = 'navbar-default2';
      $scope.castnum = 'cast-num2';
      $scope.box1 = 'box1-2';
      $scope.dropdownmenu = 'dropdown-menu2';
      $scope.selestournew = 'seles-tour-new2';
      $scope.pay = 'pay2';
      $scope.btnprimary = 'btn-primary2';
      $scope.footer = 'footer2';
     
    }
    else{
      $scope.channelhead = 'channel-head';
      $scope.navbarbrand = 'navbar-brand';
      $scope.navbardefault = 'navbar-default';
      $scope.castnum = 'cast-num';
      $scope.box1 = 'box1';
      $scope.dropdownmenu = 'dropdown-menu';
      $scope.selestournew = 'seles-tour-new';
      $scope.pay = 'pay';
      $scope.btnprimary = 'btn-primary';
      $scope.footer = 'footer';

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
              console.log(res)
             if (res[0].resource == "") {
               
                $scope.Profile= "profile.png";
              }
              else{
                $scope.Profile = res[0].resource;
              }
              $scope.userEmail = res[0].email;
              $scope.tokenid = $cookies.get('login');
              $scope.loginname = res[0].fname+" "+res[0].lname;
              console.log($scope.loginname)
              $scope.EditAddress = res[0].address;
              $scope.EditEmail = res[0].email;
              $scope.EditLname = res[0].lname;
              $scope.EditName = res[0].fname;
              $scope.EditPhone = res[0].phone;
              var res = res[0].password.split('"');
              $scope.EditPassword = res[1];
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



       /*for (var i = 0; i < $scope.cart.length; i++) {
               console.log($scope.cart[0][i].price);
       }*/



        angular.forEach($scope.cart, function (data) {
          $scope.data.push(data);
          angular.forEach(data, function (data2) {
          
          $scope.totalpricesum += parseInt(data2.price);

        });
          });
        angular.forEach($scope.carttransfer, function (data) {
          $scope.data.push(data);
           angular.forEach(data, function (data2) {
            $scope.totalpricesum += parseInt(data2.cost_a_agent_all*data2.listcar);
          console.log($scope.totalpricesum)
          
          

            });
        });
        $scope.all = function() {
        document.getElementById('all').checked = true;

        }
      $scope.clearcaer = function(){

        localStorage.clear();

      }
      $scope.gohotel = function() {
        location.href="hotels";
      }
       $scope.gotour = function() {
        location.href="tour";
      }
      $scope.paysss = function(){
	localStorage.setItem('itemSelect',JSON.stringify($scope.data));
        location.href="book";
      }
      $scope.removeCart = function(list){
          $scope.product_id = list;
          console.log(list);
          $scope.topic = list[0].topic_en;

          
      }
      $scope.Removeproduct = function(item){
        console.log(item)
        angular.forEach(item, function (data) {          
          $scope.totalpricesum -= data.price;
          
          });
          $scope.cart.splice($scope.cart.indexOf(item),1);
          $scope.data.splice($scope.data.indexOf(item),1);
          localStorage.setItem('item',JSON.stringify($scope.cart));
        }

       $scope.removeCart2 = function(list){
          $scope.producttransfer_id = list;
          $scope.topic2 = list[0].topic_en;
          
      }
      $scope.Removeproduct2 = function(item){
        console.log(item)
        angular.forEach(item, function (data) {          
          $scope.totalpricesum -= data.cost_a_agent_all;
          
          });
          
          $scope.carttransfer.splice($scope.carttransfer.indexOf(item),1);
           $scope.data.splice($scope.data.indexOf(item),1);
          localStorage.setItem('itemtransfer',JSON.stringify($scope.carttransfer));
        }

      


      $scope.gohome = function(input){
            location.href= ip;
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
    var inv_count = 0;
      $scope.showcount==0;
    //$scope.totalpricesum =0;
   
    $scope.totalprice = 0;
    $scope.totalprice2 = 0
    $scope.inv_func = function(list,$event,price,state){
                    console.log($scope.totalprice2);
                    console.log(state);
                    console.log(price);
                    console.log($event);
                    console.log(list)
                    $scope.price = list[0].price;
                    console.log($scope.price);
                    if(state == true)
                    {


                        inv_count++;
                        $scope.showcount = inv_count;
                        $scope.totalpricesum =$scope.totalprice+=$scope.price;
                        console.log($scope.totalprice);
                        $scope.data.push(list);


                    }
                    else
                    {
                      inv_count--;
                      $scope.showcount = inv_count;

                            $scope.totalpricesum-=$scope.price;

                            $scope.data.splice(list.indexOf(list),1);
                    }
                    console.log($scope.data);
      }
       $scope.inv_func2 = function(list,$event,price,state){
                    console.log($scope.totalpricesum);
                    console.log(state);
                    console.log(price);
                    console.log($event);
                    console.log(list)
                    $scope.price = list[0].price;
                    console.log($scope.price);
                    if(state == true)
                    {


                        inv_count++;
                        $scope.showcount = inv_count;
                        $scope.totalpricesum+= parseInt($scope.price);
                        console.log($scope.totalpricesum);
                        $scope.data.push(list);


                    }
                    else
                    {
                      inv_count--;
                      $scope.showcount = inv_count;

                            $scope.totalpricesum-=parseInt($scope.price);

                            $scope.data.splice(list.indexOf(list),1);
                    }
                    console.log($scope.data);
      }

      $http({
          method : 'post',
          url : "/api/getdataproduct3",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(res){
            if(res.status == "ok"){
                for(var i = 0 ; i < 5; i++)
                {
                  $scope.tourrecomm.push(res.data[i]);
                 // document.getElementById("cssload-container").style.display = "none";
                }
            }
    });
    $scope.select_item = function(x,item){        
        localStorage.setItem('view',JSON.stringify($scope.view));           
        //angular.element(document.querySelector('#get-select-value')).triggerHandler('click',$scope.tour);
        $window.open('view-item#?data=' + JSON.stringify(item.id));
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
