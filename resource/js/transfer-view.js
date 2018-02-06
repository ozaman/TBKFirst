var app = angular.module('myApp', ['ngCookies','ngRoute','ngSanitize','ui.bootstrap','ngDialog']);
    app.controller('myCtrl', function($scope, $location, $http, $cookies,$sce,$filter,$window,$interval,ngDialog) {
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
     
        $scope.sumprice_adult_child;
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
        $scope.itemtransfer = new Array();
        $scope.from;
        $scope.to;
        $scope.now_selest;
        $scope.cartype;
        $scope.person;     
        $scope.cart = [];
        $scope.view = [];
        $scope.carttransfer = [];
        $scope.numperson = [];
        $scope.numperson2 = [];
        $scope.youto = [];
        $scope.transferplace_nowto =[];
        $scope.searchtransportFrom;
        $scope.searchtransportTo;
        $scope.ID_From;
        $scope.ID_To
        $scope.allpax;
        $scope.listcar = 1;
        $scope.selectnumperson = 0;
        $scope.selectnumperson2 = 0;
        $scope.dateon = new Array();
        
        //localStorage.clear();
        $scope.optioncar = [ {value:1},{value:2},{value:3},{value:4},{value:5} ];
        $scope.selectedAllotment = {
            child : 0,
            adult : 0
        }
        $scope.num = [ '01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','23'];
        $scope.num2 = [ '01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20',
                    '21','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40',
                    '41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'];
        var x = 100;
        for (var i = 1; i <= x; i++) {
          $scope.numperson.push(i);
          
        }
        console.log($scope.numperson);
        var x2 = 100;
        for (var i = 1; i <= x2; i++) {
          $scope.numperson2.push(i);
          
        }
        console.log($scope.numperson2);
       // $scope.numperson = 0;
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

        if(typeof localStorage["item"] !== "undefined" && localStorage["item"] !== "undefined") {
              $scope.cart = JSON.parse(localStorage["item"]);
              //console.log($scope.cart);
        } 
        if (typeof localStorage["view"] !== "undefined" && localStorage["view"] !== "undefined") {
            $scope.view = JSON.parse(localStorage["view"]);
            if($scope.view.length > 3) {
                $scope.view.splice($scope.view.indexOf($scope.view[0]),1);
                localStorage.setItem('view',JSON.stringify($scope.view));
            }
        }
    
        if (typeof localStorage["itemtransfer"] !== "undefined" && localStorage["itemtransfer"] !== "undefined") {
            $scope.carttransfer = JSON.parse(localStorage["itemtransfer"]);
            console.log($scope.carttransfer);
        }
        var dataST = JSON.parse(localStorage.getItem("dataSelect"))
        if (dataST == null) {
            $scope.searchtransportFrom = '';
            $scope.searchtransportTo = '';
            $scope.ID_From = '';
            $scope.ID_To = '';
        }
        else{
            $scope.searchtransportFrom = dataST.from;
            $scope.searchtransportTo = dataST.to;
            $scope.ID_From = dataST.idfrom;
            $scope.ID_To = dataST.idto;
        }
        
        console.log(dataST)
        console.log($scope.searchtransportFrom)
        console.log($scope.searchtransportTo)
        $scope.data = JSON.parse($location.search().data);
        //localStorage.removeItem("dataSelect")
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
                        $scope.loginname = res[0].lname+" "+res[0].fname;
                  });
            }
            else
            {
              $scope.loginstatus = true;
            }
        }
        $scope.changevalue = function(item){            
            var pax;
            if (item == undefined) {
                pax = 1;
            }
            else{
                pax = item;
            }
            
            console.log(pax);
            $scope.listcar = pax;
            if ($scope.listcar > 1) {
                $scope.list ={'display':'block'};
            }
            else{
               $scope.list ={'display':'none'}; 
            }
            $scope.person = $scope.allpax * pax ;
            console.log($scope.person)
            $scope.sumprice_adult_child = $scope.cost*pax;
            console.log($scope.sumprice_adult_child)
            console.log($scope.cost)
        }

        $scope.changenumperson = function(person){
            console.log($scope.listcar+'ooooooo')
            console.log(person)
            var sumpaxAC1 = 0;
            $scope.selectnumperson = person;
            sumpaxAC1 = $scope.selectnumperson +  $scope.selectnumperson2;
            console.log($scope.person)
            if ($scope.listcar > 1) {
                $scope.list ={'display':'block'};
            }
            else{
               $scope.list ={'display':'none'}; 
            }

            if (sumpaxAC1>parseInt($scope.person)) {
                $scope.listcar++;
                 $scope.list ={'display':'block'};
                $scope.sumprice_adult_child = $scope.cost*$scope.listcar;
                console.log( $scope.sumprice_adult_child)
                $scope.person = parseInt($scope.person) + parseInt($scope.allpax);
                console.log($scope.listcar+'listcar')
                console.log($scope.person+'$scope.person')
                //$scope.selectnumperson = parseInt($scope.person) ;
            }
            else{
                 
                    
                    
            }
            console.log($scope.selectnumperson)
        }
        $scope.changenumperson2 = function(person2){
            var sumpaxAC2 = 0;
            $scope.selectnumperson2 = person2;
            sumpaxAC2 = $scope.selectnumperson + parseInt(person2);

            console.log($scope.selectnumperson)

            console.log(sumpaxAC2+'sumpaxAC')
             console.log($scope.listcar+'listcar')
            if ($scope.listcar > 1) {
                $scope.list ={'display':'block'};
            }
            else{
               $scope.list ={'display':'none'}; 
            }
            if (sumpaxAC2>parseInt($scope.person)) {
                $scope.listcar++;
                $scope.list ={'display':'block'};
                $scope.sumprice_adult_child = $scope.cost*$scope.listcar;
                console.log( $scope.sumprice_adult_child)
                $scope.person = parseInt($scope.person) + parseInt($scope.allpax);
               
                console.log($scope.person+'$scope.person')

                //$scope.selectnumperson = parseInt($scope.person) ;
            }
            else{
                //$scope.selectnumperson = person ;
            }
           
            console.log($scope.selectnumperson2)
            console.log($scope.listcar+'listcar')
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
        $scope.time1 = new Date();
        $scope.showMeridian = true;
        $http({
            method : 'post',
            url : "/api/Gettransfer_product_byid/"+ $scope.data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(res){
                if(res.status == "ok"){
                    //console.log(res.data);
                    for(var i = 0 ; i < res.data.length; i++)
                    {
                        if(res.data[i].transfer_id == $scope.data)
                        {
                          
                          console.log(res.data[i]);
                          $scope.sumprice_adult_child =  res.data[i].cost_a_agent_all;
                          $scope.cartype = res.data[i].cartype;
                          $scope.person = res.data[i].person;
                          $scope.allpax = res.data[i].person
                          console.log($scope.person)
                          $scope.topic_en = res.data[i].topic_en;
                          $scope.cost = res.data[i].cost_a_agent_all;
                          $scope.itemtransfer.push(res.data[i]);
                          $scope.from = res.data[i].province_id;
                          $scope.to = res.data[i].province_id_to;
                          console.log($scope.to)
                          $http({
                                method : 'post',
                                url : "/api/Gettransferplace_hotel/"+$scope.to,
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                                }).success(function(res){
                                    if(res.status == "ok"){
                                        $scope.hotelto = { 'display':'block' };
                                        console.log(res.data);
                                        $scope.youto = res.data;
                                        for (var i = 0; i < res.data.length; i++)
                                        { 
                                              
                                        }
                                    }

                            });
                        }                      
                    }
                    console.log($scope.itemtransfer); 
                    console.log($scope.from);
                    console.log($scope.to); 
                    i = res.data.length;
                    $cookies.put("check", i);
                    angular.element(document.querySelector('#gallery-select-value')).triggerHandler('click');

                }

        });
        $http({
            method : 'post',
            url : "/api/Getproduct_onfront",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(res){
                if(res.status == "ok"){             
                    $scope.front = res.data;
                }
        });
        $scope.select_to = function(x){
            console.log(x);
            $scope.now_selest = x.target.outerText;                
            console.log($scope.now_selest);
            $scope.modaleventto = {'display': 'none'};
        }
        var DatepickerDemoCtrl = function ($scope) {
            $scope.open = function($event) {
                $event.preventDefault();
                $event.stopPropagation();

                $scope.opened = true;
            };
            $scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
            };
            $scope.format = 'dd-MMMM-yyyy';
        };
        

        function create_word(input){
            var word;
            var ascii;
            for(var i = 0 ; i < input.length ; i++)
            {
                ascii = input.charCodeAt(i);
                if(i==0)
                    word = String.fromCharCode(ascii);
                else
                    word += String.fromCharCode(ascii);
            }
            return word;
        }
        $scope.transportsearchFrom = function(){
            String($scope.searchtransport);
            var x = document.getElementsByName("searchtransportFrom");
            console.log(x)
            var word = create_word(x[0].value);
            $scope.searchtransport = word;
            console.log(word)

            if($scope.searchtransport === undefined)
            {
                //$scope.transferplace_now.push($scope.transferplace[i]);
                $scope.transferplace_now = new Array();
                $scope.planceformStyle = { 'display':'none'};
              
            }
            else
            {
                $scope.transferplace_now = new Array();
                for(var i = 0 ; i < $scope.youto.length ; i++)
                {
                    var n = $scope.youto[i].topic.toLowerCase().indexOf($scope.searchtransport.toLowerCase());
                    if(n != -1) $scope.transferplace_now.push($scope.youto[i]);
                    $scope.planceformStyle = { 'display':'block'};
                }      
            }
        }
        $scope.selecthotelFrom = function(from){
            $scope.itemtransferfinal = [];
            //console.log($scope.itemtransfer);
            $scope.searchtransportFrom = from.topic;
            $scope.ID_From = from.id;
            console.log($scope.ID_From)
            console.log($scope.searchtransportFrom)
            $scope.planceformStyle = { 'display':'none'};
            //alert(from.aum)
            if (from.aum == 0) {
                console.log("in case pro")
                $scope.plancefrom = parseInt(from.pro);
            }
            else{
                $scope.plancefrom = parseInt(from.aum);
                console.log( $scope.plancefrom)               
            }
            angular.forEach($scope.itemtransfer, function(data){
                  console.log(data.aum_from)
                    if (data.aum_from == $scope.plancefrom) 
                      {
                        console.log(data)
                        $scope.itemtransferfinal.push(data);                        
                                         
                      }               
                });
            console.log($scope.itemtransferfinal)
        }
        function create_word2(input){
            var word2;
            var ascii2;
            for(var i = 0 ; i < input.length ; i++)
            {
                ascii2 = input.charCodeAt(i);
                if(i==0)
                    word2 = String.fromCharCode(ascii2);
                else
                    word2 += String.fromCharCode(ascii2);
            }
            return word2;
        }
        $scope.transportsearchTo= function(){
            String($scope.searchtransportTo);
            var x = document.getElementsByName("searchtransportTo");
            console.log(x)
            var word2 = create_word2(x[0].value);
            $scope.searchtransportTo = word2;
            console.log(word2)
            if($scope.searchtransportTo === undefined)
            {

                $scope.transferplace_nowto = new Array();
                $scope.plancetoStyle = { 'display':'none'};
              
            }
            else
            {
                $scope.transferplace_nowto = new Array();
                for(var i = 0 ; i < $scope.youto.length ; i++)
                {
                    var n = $scope.youto[i].topic.toLowerCase().indexOf($scope.searchtransportTo.toLowerCase());
                    if(n != -1) $scope.transferplace_nowto.push($scope.youto[i]);
                        $scope.plancetoStyle = { 'display':'block'};
                }       
            }
        }
        $scope.selecthotelTo = function(from){          
            console.log($scope.plancefrom)
            $scope.searchtransportTo = from.topic;
            $scope.ID_To = from.id;
            console.log($scope.ID_To)
            console.log($scope.searchtransportTo)
            $scope.plancetoStyle = { 'display':'none'};
             if (from.aum == 0) {
                console.log("in case pro")
                $scope.planceto = parseInt(from.pro);
            }
            else{
                $scope.planceto = parseInt(from.aum);
            }
        }
        $scope.selectto = function(){
            
            $scope.modaleventto = {'display': 'block'};
        }
        $scope.deletekeyword = function(input) {
            console.log(input);
            var x = '';
            $scope.textfinal = x;
        }
        $scope.listcar = 1;
        
        $scope.changenum = function(list){
            console.log(list)
            
                $scope.selectnum = list;
            
        }
        $scope.changenum2 = function(list2){
            console.log(list2)
            $scope.selectnum2 = list2;
        }
        /*$scope.changenumperson = function(person){
            console.log(person)
            $scope.selectnumperson = person;
        }*/
        
        $scope.addCart = function(product){
            //console.log($scope.listcar);         
            //console.log($scope.textfinal);
            //console.log($scope.now_selest);        
            //console.log($scope.adultshow);
            //console.log($scope.childshow);
            var selectnum;
            var selectnum2;
            var selectnumperson
            var selectnumperson2
            if ($scope.selectnum == undefined) {
                selectnum = '00';
            }
            else{
                selectnum = $scope.selectnum;
            }

            if ($scope.selectnum2 == undefined) {
                selectnum2 = '00';
            }
            else{
                selectnum2 = $scope.selectnum2;
            }
            if ($scope.selectnumperson == undefined) {
                selectnumperson = '0';
            }
            else{
              selectnumperson = $scope.selectnumperson;
            }
            if ($scope.selectnumperson2 == undefined) {
                selectnumperson2 = '0';
            }
            else{
              selectnumperson2 = $scope.selectnumperson2;
            }
            console.log($scope.searchtransportFrom)
            console.log($scope.searchtransportTo)
            console.log(selectnum)
            console.log(selectnum2)
            console.log(selectnumperson)
            $scope.time = selectnum + ":" +  selectnum2;        
            console.log($scope.time)
            $scope.date = $('#booking-date').val();
            console.log($scope.date)
            var slitedDate = $scope.date.split(" ");
            console.log(slitedDate)
            slitedDate[1] = slitedDate[1].replace(',', '');
            var d = new Date(slitedDate);
            d.setDate(slitedDate[0]);
            d.setMonth(monthMatcher[slitedDate[1]]);
            d.setYear(slitedDate[2]);
            $scope.d = d.toISOString();
            $scope.ondate = $filter('date')(new Date($scope.d),'MM-dd-yyyy');
            $scope.state = false
            angular.forEach($scope.itemtransfer, function (data) {
                data.adultshow = selectnumperson;
                data.childshow = selectnumperson2;
                data.departure = $scope.ondate;
                data.topic_en = $scope.topic_en;
                data.price =  $scope.sumprice_adult_child;
                data.amount = selectnumperson+selectnumperson2;
                data.time = $scope.time;
                data.province_to = $scope.now_selest;
                data.listcar = $scope.listcar;
                data.from = $scope.searchtransportFrom;
                data.to = $scope.searchtransportTo;
                data.idfrom = $scope.ID_From;
                data.idto = $scope.ID_To;

                console.log(data);

            });
            $scope.carttransfer.push($scope.itemtransfer);
            localStorage.setItem('itemtransfer', JSON.stringify($scope.carttransfer));
            console.log($scope.carttransfer);
            location.href='cart';
        }
        $scope.getItem = function(){
           $scope.cart = JSON.parse(localStorage.getItem('item'));
        }
        $scope.removeCart = function(product){
            $scope.cart.splice($scope.cart.indexOf(product),1);
            localStorage.setItem('item',JSON.stringify($scope.cart));
        }
        $scope.img_click = function(input){
            $cookies.put("check", input);
        }
        $scope.gohome = function(input){
            location.href= ip;
            $scope.state = false
        }
        $scope.gohotel = function(){
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
        $scope.gotour = function(){
            location.href="tour";
        }
        $scope.returnhtml = function(x) {
            return $sce.trustAsHtml(x);
        }
        $scope.plus = function(){
            $scope.adultshow = $scope.adultshow + 1;
            console.log($scope.itemtransfer);
            console.log($scope.cartype);
            console.log($scope.person);
            if($scope.cartype != 2)
            {
                if ($scope.adultshow > $scope.person  )
                {
                  $scope.overload = {'display': 'block'};
                  //$scope.over = " Over load pax ";
                  //$scope.sumprice_adult_child = $scope.sumprice_adult_child*2;
                }
            }
            else {
                console.log("cartype == 2");

            }
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
            if($scope.cartype != 2)
            {
                //if ($scope.adultshow <= $scope.person  )
               // {
                //  $scope.overload = {'display': 'none'};              
                  
                  $scope.sumprice_adult_child = $scope.cost;
                  console.log($scope.sumprice_adult_child)
                //}
            }
            else {
                console.log("cartype == 2");

            }
               /* if (true) {}
                $scope.sumadult = ($scope.adultshow*$scope.sumprice_adult);
                $scope.sumprice_adult_child = $scope.sumadult + $scope.sumchild;
                console.log($scope.sumprice_adult_child);
                console.log($scope.adultshow);*/

        }
        $scope.select_item_view = function(x,item){
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
            if (item.type == "Private" || item.type == "Join") {
             
                $window.open('transfer-view#?data=' + JSON.stringify(item.transfer_id));

            }
            else{
               $window.open('view-item#?data=' + JSON.stringify(item.id));

            }
          
        }
        $scope.select_item = function(x,item){ 
            if (item.type == "Transfer") {
                $scope.view.push(item);
                //console.log(item.transfer_id); 
                $window.open('transfer-view#?data=' + JSON.stringify(item.transfer_id));

            }
            else{
                $scope.view.push(item);
                localStorage.setItem('view',JSON.stringify($scope.view));             
                //angular.element(document.querySelector('#get-select-value')).triggerHandler('click',$scope.tour);
                $window.open('view-item#?data=' + JSON.stringify(item.id));

            }
        
        }


        $scope.booking_now = function(product){
            console.log($scope.listcar);
          //alert("sadasdsad")
            console.log($scope.textfinal);
            console.log($scope.now_selest);
          
            console.log($scope.adultshow);
            console.log($scope.childshow);


            $scope.time = $('#time').val();           
            console.log($scope.time)
            //$scope.cars = $('#cars').val();
           
            console.log($scope.cars);

            
            $scope.date = $('#booking-date').val();
            var slitedDate = $scope.date.split(" ");
            slitedDate[1] = slitedDate[1].replace(',', '');
            var d = new Date();
            d.setDate(slitedDate[0]);
            d.setMonth(monthMatcher[slitedDate[1]]);
            d.setYear(slitedDate[2]);
            $scope.d = d;
            $scope.state = false;

            angular.forEach($scope.itemtransfer, function (data) {
                data.adultshow = $scope.adultshow;
                data.childshow = $scope.childshow;
                data.departure = $scope.d;
                data.topic_en = $scope.topic_en;
                data.price =  $scope.sumprice_adult_child;
                data.amount = $scope.adultshow+$scope.childshow;
                data.time = $scope.time;
                data.province_to = $scope.now_selest;
                data.listcar = $scope.listcar;

                console.log(data);

            });
            $scope.carttransfer.push($scope.itemtransfer);
            localStorage.setItem('itemtransfer', JSON.stringify($scope.carttransfer));
            console.log($scope.carttransfer);
            location.href="book";

        }
        $scope.cartBook = function(){
          location.href="cart";

        }
        $scope.yougohide = function(){
          $scope.modaleventto = {'display': 'none'}; 
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

