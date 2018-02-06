var users = require('./../model/product_m.js');
var bodyParser = require('body-parser')

function getgallery_c(req, res){
	users.Getgallery_m(res,req
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function getproduct_c(req, res){
	//console.log("in case contrllor");
	users.Getproduct_m(res
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function getproduct_c2(req, res){
    //console.log("in case contrllor");
    users.Getproduct_m2(res
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function getproduct_c3(req, res){
    //console.log("in case contrllor");
    users.Getproduct_m3(res
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}

function getselect_product_c(req, res){
    //console.log("in case contrllor");
    users.Getselect_product_m(res,req
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function getproduct_tyle_spa_c(req, res){
    //console.log("in case contrllor");
    users.Getproduct_tyle_spa_m(res
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function getproduct_tyle_boat_c(req, res){
    //console.log("in case contrllor");
    users.Getproduct_tyle_boat_m(res
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function getproduct_tyle_wedding_c(req, res){
    //console.log("in case contrllor");
    users.Getproduct_tyle_wedding_m(res
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function getproduct_tyle_diving_c(req, res){
    //console.log("in case contrllor");
    users.Getproduct_tyle_diving_m(res
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));
           // console.log(res);
        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function getproduct_tyle_goft_c(req, res){
    //console.log("in case contrllor");
    users.Getproduct_tyle_golf_m(res
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function getproduct_tyle_package_c(req, res){
    //console.log("in case contrllor");
    users.Getproduct_tyle_package_m(res
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}



function addBooking_c(req, res){

	//console.log("in case contrllor");
	users.AddBooking_m(req,res
        , function(res, result){
            
            //res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function gettime_c(req, res){
	users.Gettime_m(res,req
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function getproduct_onfront_c(req, res){
	//console.log("in case contrllor");
	users.Getproduct_onfront_m(res
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function getproduct_hotel_C(req, res){
	//console.log("in case contrllor");
	users.Getproduct_hotel_m(res
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}

function getgallery_hotel_c(req, res){
	users.Getgallery_hotel_m(res,req
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function getselect_hotel_c(req, res){
	users.Getselect_hotel_m(res,req
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}

function gettransferchange_hotel_c(req, res){
    users.Gettransferchange_hotel_m(res,req
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function gettransferplace_hotel_c(req, res){
    users.Gettransferplace_hotel_m(res,req
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function getprovince_c(req, res){
    users.Getprovince_m(res
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function gettransfer_product_top(req, res){
    users.Gettransfer_product_m(res
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function gettransfer_product_c_all(req, res){
    users.Gettransfer_product_m_all(res
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function getcar_product_c(req, res){
    users.Getcar_product_m(res
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function getbooking_c(req, res){
    users.Getbooking_m(res,req
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}

function get_web_car_capacity_c(req, res){
    users.Get_web_car_capacity_m(res,req
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function gettransferplace(req,res){
    //console.log("in contro")
    users.Gettransferplace(res,
        function(res, result){
            //console.log(result)
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));
     });
}
function gettransfer_product_byid(req, res){
    users.Gettransfer_product_byid(res,req
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function addBookingless(req, res){

    //console.log("in case contrllor");
    users.AddBookingless(req,res
        , function(res, result){
            
            //res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}

function getwebgalleryprovince(req, res){
    //console.log("in controlllller")
    users.Getwebgalleryprovince(res
        , function(res, result){
            //console.log(result)
            //console.log("iiiiiiii")
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}

function getproduct_type_show_c(req, res){
    //console.log("in case contrllor");
    users.Getproduct_type_show_m(res
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}

function addSubtour(req,res ,onSuccess, onFail){
    console.log("In add Subtour1");
    
    var tour_id = req.body["tour_id"];
    var allotment = req.body["allotment"]

    var since = new Date(req.body["since"]);
    var until = new Date(req.body["until"]);
    var roundTime = req.body["roundTime"];
    var day = req.body["day"];

    var days = [];
    var days2 = [];
    var date = req.body["date"];
    var allotmenttotal = req.body["allotmenttotal"];
    
    //console.log(tour_id) 
    //console.log(allotment) 
    //console.log(since+"since") 
    //console.log(until+"until") 
    //console.log(roundTime+"time")
    
    //console.log(day+'day')
    //console.log(date+"date")
    //console.log(allotmenttotal+"allotmenttotal")

    if(since != '' && until != '' && (new Date(since) < new Date(until))) {
        for (
            ; since <= until
            ; since.setDate(since.getDate() + 1)
        ){
            for(var i = 0 ; i < day.length; i++){
                //console.log(since.getDay());
                if(since.getDay() == parseInt(day[i])){
                    var intervalNewDate = new Date(since);
                    //console.log(time);
                    
                        //console.log("imtimestrig");

                        days.push(intervalNewDate);
                       // console.log(days+"---------------------------")
                    }
                
            }
        }
    }

    if(days.length == 0 && date){
        
                var compareDate = new Date(date);
                
                days2.push(compareDate);
                //console.log(days2+"2222222222222222")

    }else if(date){
        var compareDate = new Date(date);
        days2.push(compareDate);
                
           
    }
    if(days2.length != 0)
    {
        days = days.concat(days2);
    }

    console.log(days);
    //console.log(req.body["since"]);
    //console.log(time);
    var timeone = new Date(req.body["since"]+" "+roundTime+":00");
    //console.log(timeone);
    //console.log(req);
    if(days == "")
    {
        days.push(new Date(timeone));
    }

    //console.log(days)
    //console.log(tour_id)
    //console.log(allotment)
    //console.log(allotmenttotal)

    addSubTourRecusively(res,days, tour_id,allotmenttotal, allotment,roundTime
        , function(res,result){
           res.redirect("/allotmentnew");
        }, function(err){
            onFail(err);
        });
}

function addSubTourRecusively(res,data, tour_id, allotment,allotmenttotal,roundTime, success, fail){
    users.AddSubtourFromcalendar(res,data[0], tour_id,allotmenttotal, allotment,roundTime
        , function(res,result){
            if(data.length == 1){
                success(res);
            }else{
                data.splice(0, 1);
                addSubTourRecusively(res,data, tour_id, allotment,allotmenttotal,roundTime, success, fail);
            }
        }, function(err){
            fail(err)
        });
}
function getproductallotmentseting(req, res){
    //console.log("in case contrllor");
    users.Getproductallotmentseting(res
        , function(res, result){
            res.end(JSON.stringify({status:"ok", data:result}));

        }, function(res, err){

            res.end(JSON.stringify({status:"err", data:err}));

    });
}
function getallotment(req, res){
    datass = [];
    var datesend = req.body["datesend"].split("-");
    //console.log(datesend+"ee")
    var allmonth = [];
    var x = datesend[1];
    var a = 24 - datesend[1];
    var allyear = [];
   // console.log(a+"aaaa")
    //console.log(x+"--")
    //console.log(datesend)
    

    for (var i = 0; i <= a+1; i++) {
        if (x <= 12) {
            allmonth.push(x)
        }
        else{
            x = 0;
            
        }
        if (x<=12) {x++;}
        
    }
    //var year = new Date().getFullYear();
        
    
    //console.log(x)
    console.log(allmonth+'======================================')
    var year = 12 - datesend[1];
    for (var i = 0; i <= year; i++) {
            allyear.push(new Date().getFullYear());
        if ((i) == year) {
            for (var i = 0; i < 12; i++) {
                allyear.push(new Date().getFullYear()+1);
            }
        }
    }
    console.log(allyear)
     getRecusively(res,req,allmonth,allyear
        , function(res,result){
            //console.log(result)
           res.end(JSON.stringify(result));
        }, function(err){
            onFail(err);
        });
}
var datass = [];
function getRecusively(res,req,allmonth,allyear,success, fail){
    //console.log(res)
    users.Getallotment(res,req,allmonth[0],allyear[0]
        , function(res,result){
            
            if(allmonth.length == 1 && allyear.length == 1){
                datass.push(result)
                success(res,datass);
            }else{
                
                datass.push(result)
                allmonth.splice(0, 1);
                allyear.splice(0, 1);
                getRecusively(res,req,allmonth,allyear, success, fail);
            }
        }, function(err){
            fail(err)
        });
}
module.exports = {
    Getproduct_c : getproduct_c,
    Getproduct_c2 : getproduct_c2,
    Getproduct_c3 : getproduct_c3,
    Getgallery_c : getgallery_c,
    Getselect_product_c : getselect_product_c,
    Getproduct_tyle_spa_c : getproduct_tyle_spa_c,
    Getproduct_tyle_boat_c : getproduct_tyle_boat_c,
    Getproduct_tyle_wedding_c : getproduct_tyle_wedding_c,
    Getproduct_tyle_diving_c : getproduct_tyle_diving_c,
    Getproduct_tyle_goft_c : getproduct_tyle_goft_c,
    Getproduct_tyle_package_c : getproduct_tyle_package_c,
	AddBooking_c : addBooking_c,
	Gettime_c : gettime_c,
	Getproduct_onfront_c : getproduct_onfront_c,
	Getproduct_hotel_C : getproduct_hotel_C,
	Getgallery_hotel_c : getgallery_hotel_c,
	Getselect_hotel_c : getselect_hotel_c,
    Gettransferchange_hotel_c : gettransferchange_hotel_c,
    Gettransferplace_hotel_c : gettransferplace_hotel_c,
    Getprovince_c : getprovince_c,
    Gettransfer_product_top : gettransfer_product_top,
    Getcar_product_c : getcar_product_c,
    Gettransfer_product_c_all : gettransfer_product_c_all,
    Getbooking_c : getbooking_c,
    Get_web_car_capacity_c : get_web_car_capacity_c,
    Gettransferplace : gettransferplace,
    Gettransfer_product_byid : gettransfer_product_byid,
    AddBookingless : addBookingless,
    Getwebgalleryprovince : getwebgalleryprovince,
    Getproduct_type_show_c : getproduct_type_show_c,
    AddSubtour : addSubtour,
    Getproductallotmentseting : getproductallotmentseting,
    Getallotment : getallotment


};
