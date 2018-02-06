var bookController = require('./product_c.js');
var nodemailer = require('nodemailer');
var mailer = require('sendmail');
var bodyParser = require('body-parser')
var fs = require('fs');


var transporter = nodemailer.createTransport('smtps:ozaclever@gmail.com:natthaphat128@smtp.gmail.com');

/* --------------------send mail booking------------------------------*/
var fname,lname,phone,email,address,adultshow,childshow,departure,depetime,price,booking_id,product,listcar,link,to,checklink;

function setData(req, res){
        price = 0;

    console.log(req.body["fname"]);
        fname = req.body["fname"];
        lname = req.body["lname"];        
        phone = req.body["phone"];
        email = req.body["email"];
        address = req.body["address"];        
        adultshow = req.body["adultshow"];
        childshow = req.body["childshow"];
        departure = req.body["departure"];
        profrom = req.body["from"];
        proto = req.body["to"];
        idfrom = req.body["idfrom"];
        idto = req.body["idto"];


        cost_a_agent_all = req.body["cost_a_agent_all"];
        cost_b_agent_all = req.body["cost_b_agent_all"];
        id = req.body["id"];
        price = req.body["price"];
        price = price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); 
        product = req.body["product"];
        type = req.body["type"];
        depetime = req.body["depetime"];
        province_to = req.body["province_to"];
        listcar = req.body["listcar"];
        booking_id = req.body["booking_id"];
        var link = "";
        link = "http://gh-travel.com/booking-invoice#?data" +"="+ req.body["booking_id"];
        to = email;
        //checklink = "ShowLink";
        //console.log("dcasdasdfasdfjsakfhdsjkhfsdjkhfksdjhfsdkjhfsdkjfhsdkjfhsdkfh"+price)

        var keyword = ['{{booking_id}}','{{product}}','{{departure}}','{{depetime}}','{{adultshow}}','{{childshow}}','{{type}}','{{fname}}','{{lname}}','{{phone}}','{{email}}','{{address}}','{{link}}','{{price}}'];
        var word = [booking_id,product,departure,depetime,adultshow,childshow,type,fname,lname,phone,email,address,link,price];


        fs.readFile('./views/mail.html','utf-8',function(err,data){
            if(err){
            return console.log(err);
            }            
            for(var i = 0 ; i < keyword.length ; i++)
            {
                if(word != undefined)
                    {
                        if(i==0)
                        {
                            result = insert_string(data,keyword[i],word[i]);

                        }
                        else
                        {
                            result = insert_string(result,keyword[i],word[i]);

                        }
                        
                    }
                    
            }
            var mailOptions = {
                from: 'ozaclever@gmail.com', // sender address
                to: to, // list of receivers

                bcc: ['ozaclever@gmail.com'],
                subject: 'Go Holiday: New Booking ID ' + booking_id, // Subject line
                html: result
            };

            transporter.sendMail(mailOptions, function(error, info){
                  if(error){
                      return console.log(error);
                  }
                  console.log('success');
                  //console.log('Message sent: ' + info.response);
                  res.end(JSON.stringify({status:"ok", data:info}));
                  //AddPdf(function(result){
                    //console.log(result);
                   // res.end();
                  //});

            });
        });

}
function insert_string(original,keyword,word){
    var sumoflength,indexofkeyword,space,laststring,result='aaa';
    sumoflength = original.length;
    indexofkeyword = original.search(keyword);
    space = indexofkeyword+keyword.length;
    laststring = original.slice(space, original.length)
    result = original.slice(0, indexofkeyword)+word+laststring;
    return result;
}
/*-------------------------end---------------------------*/



/*-----------------------send mail allotment-------------*/


var allotid,ondate,allotused,allotbalance,allotplus,roundid;



function setDatamailAllot(req, res){
        console.log(req.body["allotid"]);              
        allotid = req.body["allotid"];
        ondate = req.body["ondate"];        
        allotused = req.body["allotused"];
        allotbalance = req.body["allotbalance"];
        allotplus = req.body["allotplus"];        
        roundid = req.body["roundid"];
        childshow = req.body["childshow"];
        time = req.body["time"];
        name = req.body["name"];
        amount = req.body["amount"];
        idbooking = req.body["idbooking"];
        

        


        
       

        var keyword = ['{{ondate}}','{{roundid}}','{{roundid}}','{{idbooking}}','{{allotplus}}','{{name}}','{{ondate}}','{{time}}','{{amount}}'];
        var word = [ondate,roundid,roundid,allotplus,idbooking,name,ondate,time,amount];


        fs.readFile('./views/mailallotment.html','utf-8',function(err,data){
            if(err){
            return console.log(err);
            }            
            for(var i = 0 ; i < keyword.length ; i++)
            {
                if(word != undefined)
                    {
                        if(i==0)
                        {
                            result = insert_stringmailallotment(data,keyword[i],word[i]);

                        }
                        else
                        {
                            result = insert_stringmailallotment(result,keyword[i],word[i]);

                        }
                        
                    }
                    
            }
            var mailOptions = {
                from: 'ozaclever@gmail.com', // sender address
                to: 'ozaclever@gmail.com', // list of receivers

                bcc: ['ozaclever@gmail.com'],
                subject: 'Go Holiday: Allotment Running Out ' + name, // Subject line
                html: result
            };

            transporter.sendMail(mailOptions, function(error, info){
                  if(error){
                      return console.log(error);
                  }
                  console.log('success');
                  //console.log('Message sent: ' + info.response);
                  res.end(JSON.stringify({status:"ok", data:info}));
                  //AddPdf(function(result){
                    //console.log(result);
                   // res.end();
                  //});

            });
        });

}
function insert_stringmailallotment(original,keyword,word){
    var sumoflength,indexofkeyword,space,laststring,result='aaa';
    sumoflength = original.length;
    indexofkeyword = original.search(keyword);
    space = indexofkeyword+keyword.length;
    laststring = original.slice(space, original.length)
    result = original.slice(0, indexofkeyword)+word+laststring;
    return result;
}


function getdatagallery (req, res){
    bookController.Getgallery_c(req, res);

}
function getdataproduct (req, res){
    bookController.Getproduct_c(req, res);

}
function getdataproduct2 (req, res){
    bookController.Getproduct_c2(req, res);

}
function getdataproduct3 (req, res){
    bookController.Getproduct_c3(req, res);

}
function getselectdataproduct (req, res){
    bookController.Getselect_product_c(req, res);

}
function getselectdata_type_spa (req, res){
    bookController.Getproduct_tyle_spa_c(req, res);

}
function getselectdata_type_boat (req, res){
    bookController.Getproduct_tyle_boat_c(req, res);

}
function getselectdata_type_wedding (req, res){
    bookController.Getproduct_tyle_wedding_c(req, res);

}
function getselectdata_type_diving (req, res){
    bookController.Getproduct_tyle_diving_c(req, res);

}
function getselectdata_type_goft (req, res){
    bookController.Getproduct_tyle_goft_c(req, res);

}
function getselectdata_type_package (req, res){
    bookController.Getproduct_tyle_package_c(req, res);

}
function addBooking (req, res){
    //console.log(req);
    bookController.AddBooking_c(req, res);

}
function gettime (req, res){
    //console.log(req);
    bookController.Gettime_c(req, res);

}
function getproduct_onfront(req, res){
    bookController.Getproduct_onfront_c(req, res);

}

function getproduct_hotel (req, res){
    bookController.Getproduct_hotel_C(req, res);

}
function getgallery_hotel (req, res){
 // console.log("in api");
  //console.log(req);
    bookController.Getgallery_hotel_c(req, res);

}
function getselect_hotel (req, res){
  //console.log("in api");
    bookController.Getselect_hotel_c(req, res);

}
function gettransferchange_hotel (req, res){
  //console.log("in api");
    bookController.Gettransferchange_hotel_c(req, res);

}
function gettransferplace_hotel (req, res){
  //console.log("in api");
    bookController.Gettransferplace_hotel_c(req, res);

}
function getprovince (req, res){
 // console.log("in api");
    bookController.Getprovince_c(req, res);

}

function gettransfer_product (req, res){
  //console.log("in api");
    bookController.Gettransfer_product_top(req, res);

}
function gettransfer_product_all (req, res){
  //console.log("in api");
    bookController.Gettransfer_product_c_all(req, res);

}
function getcar_product (req, res){
  //console.log("in api");
    bookController.Getcar_product_c(req, res);

}
function getbooking(req, res){
  //console.log("in api");
    bookController.Getbooking_c(req, res);

}
function get_web_car_capacity(req, res){
  //console.log("in api");
    bookController.Get_web_car_capacity_c(req, res);

}
function gettransferplace(req, res){ 
//console.log("in api") 
    bookController.Gettransferplace(req, res);

}
function gettransfer_product_byid (req, res){
  //console.log("in api");
    bookController.Gettransfer_product_byid(req, res);

}
function addBookingless (req, res){
    //console.log(req);
    bookController.AddBookingless(req, res);

}
function getwebgalleryprovince (req, res){
    bookController.Getwebgalleryprovince(req, res);

}
function getproduct_type_show (req, res){
    bookController.Getproduct_type_show_c(req, res);

}
function addSubtour(req, res){
    bookController.AddSubtour(req, res);
}
function getproductallotmentseting (req, res){
    bookController.Getproductallotmentseting(req, res);

}
function getallotment (req, res){
    bookController.Getallotment(req, res);

}

module.exports = {
    Getdataproduct : getdataproduct,
    Getdataproduct2 : getdataproduct2,
    Getdataproduct3 : getdataproduct3,
    Getdatagallery : getdatagallery,
    Getselectdataproduct : getselectdataproduct,
    Getselectdata_type_spa : getselectdata_type_spa,
    Getselectdata_type_boat : getselectdata_type_boat,
    Getselectdata_type_wedding : getselectdata_type_wedding,
    Getselectdata_type_diving : getselectdata_type_diving,
    Getselectdata_type_goft : getselectdata_type_goft,
    Getselectdata_type_package : getselectdata_type_package,
    AddBooking : addBooking,
    Gettime : gettime,
    Getproduct_onfront : getproduct_onfront,
    Getproduct_hotel : getproduct_hotel,
    Getgallery_hotel : getgallery_hotel,
    Getselect_hotel : getselect_hotel,
    Gettransferchange_hotel : gettransferchange_hotel,
    Gettransferplace_hotel : gettransferplace_hotel,
    Getprovince : getprovince,
    Gettransfer_product : gettransfer_product,
    Getcar_product : getcar_product,
    Gettransfer_product_all : gettransfer_product_all,
    Getbooking : getbooking,
    SetData : setData,
    Get_web_car_capacity : get_web_car_capacity,
    Gettransferplace : gettransferplace,
    Gettransfer_product_byid : gettransfer_product_byid,
    SetDatamailAllot : setDatamailAllot,
    AddBookingless : addBookingless,
    Getwebgalleryprovince : getwebgalleryprovince,
    Getproduct_type_show : getproduct_type_show,
    AddSubtour : addSubtour,
    Getproductallotmentseting : getproductallotmentseting,
    Getallotment : getallotment
};
