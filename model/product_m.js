/**
 * Created by ozaclever on 11/07/2559.
 */



var mysql = require('mysql');
var bodyParser = require('body-parser')
//console.log(bodyParser);
//var config = require("./../config");
var pool  = mysql.createPool({
  host     : '223.223.218.85',
  user     : 'admin_webfront',
  password : 'web@t-booking',
  database : 'admin_webfront'
  /*connectionLimit: 100,
  connectTimeout: 2000,
  queueLimit: 0,
  debug: true,
  waitForConnection: true,
  dateStrings: true*/


});
var pool2  = mysql.createPool({
  host     : '223.223.218.85',
  user     : 'admin_webfront',
  password : 'web@t-booking',
  database : 'admin_limit'
  


});

//connection.connect();
function getgallery_m(res,req,onSuccess, onFail){
  var id = req.params.id;
  //console.log(id);
  pool.getConnection(function(err, connection) {
    if(err){
      console.log('Error connecting to Db:\n'+err.stack);
      return;
    }

    connection.query('SELECT post_date FROM web_galleryday where category = ?'
       , [id]
       ,  function(err, result){
        connection.release();
        if(err){
            onFail(res, err);
          }
          else{
            //console.log(result);
            onSuccess(res, result)
          }
     });
    //connection.end();
  });

}
function getselect_product_m(res, req,onSuccess, onFail){
  var id = req.params.id;
  //console.log(id);
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT tbl_web_product.topic, tbl_web_product.detail_en, tbl_web_product.detail_cn,tbl_web_product.detail_th, tbl_web_product.cost_a_agent_all,tbl_web_product.cost_b_agent_all, tbl_web_product.type, tbl_web_product.topic_en_web as topic_en,tbl_web_product.topic_cn_web as topic_cn,tbl_web_product.topic_th_web as topic_th, tbl_web_product.onsale_front, tbl_web_product.onsale_enable, tbl_web_product.onsale_promotion, tbl_web_product.onsale_top,tbl_web_product.image_crop,tbl_web_product.id,tbl_web_product.round_en,tbl_web_product.province,tbl_web_product.open_Sun,tbl_web_product.open_Mon, tbl_web_product.open_Tue,tbl_web_product.open_Wed,tbl_web_product.open_Thu,tbl_web_product.open_Fri,tbl_web_product.open_Sat,tbl_web_admin.company  FROM web_product as tbl_web_product LEFT JOIN web_admin as tbl_web_admin ON tbl_web_product.company=tbl_web_admin.id   WHERE tbl_web_product.id = ?'
          ,[id]
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

                onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}
function getproduct_m(res,onSuccess, onFail){
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT tbl_web_product.topic, tbl_web_product.detail_en, tbl_web_product.detail_cn,tbl_web_product.detail_th, tbl_web_product.cost_a_agent_all,tbl_web_product.cost_b_agent_all, tbl_web_product.type, tbl_web_product.topic_en_web as topic_en,tbl_web_product.topic_cn_web as topic_cn,tbl_web_product.topic_th_web as topic_th, tbl_web_product.onsale_front, tbl_web_product.onsale_enable, tbl_web_product.onsale_promotion, tbl_web_product.onsale_top,tbl_web_product.image_crop,tbl_web_product.id,tbl_web_product.round_en,tbl_web_product.province,tbl_web_product.open_Sun,tbl_web_product.open_Mon, tbl_web_product.open_Tue,tbl_web_product.open_Wed,tbl_web_product.open_Thu,tbl_web_product.open_Fri,tbl_web_product.open_Sat,tbl_web_admin.company  FROM web_product as tbl_web_product LEFT JOIN web_admin as tbl_web_admin ON tbl_web_product.company=tbl_web_admin.id WHERE tbl_web_product.onsale_top = 1'
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

                onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}
function getproduct_m2(res,onSuccess, onFail){
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT tbl_web_product.topic, tbl_web_product.detail_en, tbl_web_product.detail_cn,tbl_web_product.detail_th, tbl_web_product.cost_a_agent_all,tbl_web_product.cost_b_agent_all, tbl_web_product.type, tbl_web_product.topic_en_web as topic_en,tbl_web_product.topic_cn_web as topic_cn,tbl_web_product.topic_th_web as topic_th, tbl_web_product.onsale_front, tbl_web_product.onsale_enable, tbl_web_product.onsale_promotion, tbl_web_product.onsale_top,tbl_web_product.image_crop,tbl_web_product.id,tbl_web_product.round_en,tbl_web_product.province,tbl_web_product.open_Sun,tbl_web_product.open_Mon, tbl_web_product.open_Tue,tbl_web_product.open_Wed,tbl_web_product.open_Thu,tbl_web_product.open_Fri,tbl_web_product.open_Sat,tbl_web_admin.company  FROM web_product as tbl_web_product LEFT JOIN web_admin as tbl_web_admin ON tbl_web_product.company=tbl_web_admin.id WHERE tbl_web_product.onsale_promotion = 1'
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

                onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}
function getproduct_m3(res,onSuccess, onFail){
 // console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT tbl_web_product.topic, tbl_web_product.detail_en, tbl_web_product.detail_cn,tbl_web_product.detail_th, tbl_web_product.cost_a_agent_all,tbl_web_product.cost_b_agent_all, tbl_web_product.type, tbl_web_product.topic_en_web as topic_en,tbl_web_product.topic_cn_web as topic_cn,tbl_web_product.topic_th_web as topic_th, tbl_web_product.onsale_front, tbl_web_product.onsale_enable, tbl_web_product.onsale_promotion, tbl_web_product.onsale_top,tbl_web_product.image_crop,tbl_web_product.id,tbl_web_product.round_en,tbl_web_product.province,tbl_web_product.open_Sun,tbl_web_product.open_Mon, tbl_web_product.open_Tue,tbl_web_product.open_Wed,tbl_web_product.open_Thu,tbl_web_product.open_Fri,tbl_web_product.open_Sat,tbl_web_admin.company  FROM web_product as tbl_web_product LEFT JOIN web_admin as tbl_web_admin ON tbl_web_product.company=tbl_web_admin.id WHERE tbl_web_product.onsale_enable = 1 '
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

                onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}
function getproduct_tyle_spa_m(res,onSuccess, onFail){
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT tbl_web_product.topic, tbl_web_product.detail_en, tbl_web_product.detail_cn,tbl_web_product.detail_th, tbl_web_product.cost_a_agent_all,tbl_web_product.cost_b_agent_all, tbl_web_product.type, tbl_web_product.topic_en_web as topic_en,tbl_web_product.topic_cn_web as topic_cn,tbl_web_product.topic_th_web as topic_th, tbl_web_product.onsale_front, tbl_web_product.onsale_enable, tbl_web_product.onsale_promotion, tbl_web_product.onsale_top,tbl_web_product.image_crop,tbl_web_product.id,tbl_web_product.round_en,tbl_web_product.province,tbl_web_product.open_Sun,tbl_web_product.open_Mon, tbl_web_product.open_Tue,tbl_web_product.open_Wed,tbl_web_product.open_Thu,tbl_web_product.open_Fri,tbl_web_product.open_Sat,tbl_web_admin.company  FROM web_product as tbl_web_product LEFT JOIN web_admin as tbl_web_admin ON tbl_web_product.company=tbl_web_admin.id WHERE tbl_web_product.type = "Spa"'
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

                onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}
function getproduct_tyle_diving_m(res,onSuccess, onFail){
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT tbl_web_product.topic, tbl_web_product.detail_en, tbl_web_product.detail_cn,tbl_web_product.detail_th, tbl_web_product.cost_a_agent_all,tbl_web_product.cost_b_agent_all, tbl_web_product.type, tbl_web_product.topic_en_web as topic_en,tbl_web_product.topic_cn_web as topic_cn,tbl_web_product.topic_th_web as topic_th, tbl_web_product.onsale_front, tbl_web_product.onsale_enable, tbl_web_product.onsale_promotion, tbl_web_product.onsale_top,tbl_web_product.image_crop,tbl_web_product.id,tbl_web_product.round_en,tbl_web_product.province,tbl_web_product.open_Sun,tbl_web_product.open_Mon, tbl_web_product.open_Tue,tbl_web_product.open_Wed,tbl_web_product.open_Thu,tbl_web_product.open_Fri,tbl_web_product.open_Sat,tbl_web_admin.company  FROM web_product as tbl_web_product LEFT JOIN web_admin as tbl_web_admin ON tbl_web_product.company=tbl_web_admin.id WHERE tbl_web_product.type = "Diving"'
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

                onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}
function getproduct_tyle_golf_m(res,onSuccess, onFail){
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT tbl_web_product.topic, tbl_web_product.detail_en, tbl_web_product.detail_cn,tbl_web_product.detail_th, tbl_web_product.cost_a_agent_all,tbl_web_product.cost_b_agent_all, tbl_web_product.type, tbl_web_product.topic_en_web as topic_en,tbl_web_product.topic_cn_web as topic_cn,tbl_web_product.topic_th_web as topic_th, tbl_web_product.onsale_front, tbl_web_product.onsale_enable, tbl_web_product.onsale_promotion, tbl_web_product.onsale_top,tbl_web_product.image_crop,tbl_web_product.id,tbl_web_product.round_en,tbl_web_product.province,tbl_web_product.open_Sun,tbl_web_product.open_Mon, tbl_web_product.open_Tue,tbl_web_product.open_Wed,tbl_web_product.open_Thu,tbl_web_product.open_Fri,tbl_web_product.open_Sat,tbl_web_admin.company  FROM web_product as tbl_web_product LEFT JOIN web_admin as tbl_web_admin ON tbl_web_product.company=tbl_web_admin.id WHERE tbl_web_product.type = "Golf"'
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

                onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}
function getproduct_tyle_wedding_m(res,onSuccess, onFail){
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT tbl_web_product.topic, tbl_web_product.detail_en, tbl_web_product.detail_cn,tbl_web_product.detail_th, tbl_web_product.cost_a_agent_all,tbl_web_product.cost_b_agent_all, tbl_web_product.type, tbl_web_product.topic_en_web as topic_en,tbl_web_product.topic_cn_web as topic_cn,tbl_web_product.topic_th_web as topic_th, tbl_web_product.onsale_front, tbl_web_product.onsale_enable, tbl_web_product.onsale_promotion, tbl_web_product.onsale_top,tbl_web_product.image_crop,tbl_web_product.id,tbl_web_product.round_en,tbl_web_product.province,tbl_web_product.open_Sun,tbl_web_product.open_Mon, tbl_web_product.open_Tue,tbl_web_product.open_Wed,tbl_web_product.open_Thu,tbl_web_product.open_Fri,tbl_web_product.open_Sat,tbl_web_admin.company  FROM web_product as tbl_web_product LEFT JOIN web_admin as tbl_web_admin ON tbl_web_product.company=tbl_web_admin.id WHERE tbl_web_product.type = "Wedding"'
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

                onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}
function getproduct_tyle_boat_m(res,onSuccess, onFail){
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT tbl_web_product.topic, tbl_web_product.detail_en, tbl_web_product.detail_cn,tbl_web_product.detail_th, tbl_web_product.cost_a_agent_all,tbl_web_product.cost_b_agent_all, tbl_web_product.type, tbl_web_product.topic_en_web as topic_en,tbl_web_product.topic_cn_web as topic_cn,tbl_web_product.topic_th_web as topic_th, tbl_web_product.onsale_front, tbl_web_product.onsale_enable, tbl_web_product.onsale_promotion, tbl_web_product.onsale_top,tbl_web_product.image_crop,tbl_web_product.id,tbl_web_product.round_en,tbl_web_product.province,tbl_web_product.open_Sun,tbl_web_product.open_Mon, tbl_web_product.open_Tue,tbl_web_product.open_Wed,tbl_web_product.open_Thu,tbl_web_product.open_Fri,tbl_web_product.open_Sat,tbl_web_admin.company  FROM web_product as tbl_web_product LEFT JOIN web_admin as tbl_web_admin ON tbl_web_product.company=tbl_web_admin.id WHERE tbl_web_product.type = "Boat"'
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

                onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}
function getproduct_tyle_package_m(res,onSuccess, onFail){
 // console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT tbl_web_product.topic, tbl_web_product.detail_en, tbl_web_product.detail_cn,tbl_web_product.detail_th, tbl_web_product.cost_a_agent_all,tbl_web_product.cost_b_agent_all, tbl_web_product.type, tbl_web_product.topic_en_web as topic_en,tbl_web_product.topic_cn_web as topic_cn,tbl_web_product.topic_th_web as topic_th, tbl_web_product.onsale_front, tbl_web_product.onsale_enable, tbl_web_product.onsale_promotion, tbl_web_product.onsale_top,tbl_web_product.image_crop,tbl_web_product.id,tbl_web_product.round_en,tbl_web_product.province,tbl_web_product.open_Sun,tbl_web_product.open_Mon, tbl_web_product.open_Tue,tbl_web_product.open_Wed,tbl_web_product.open_Thu,tbl_web_product.open_Fri,tbl_web_product.open_Sat,tbl_web_admin.company  FROM web_product as tbl_web_product LEFT JOIN web_admin as tbl_web_admin ON tbl_web_product.company=tbl_web_admin.id WHERE tbl_web_product.type = "Package"'
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

                onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}

function addBooking_m(req,res,onSuccess, onFail){
  console.log("in model add booking");

  var adultshow = req.body["adultshow"];
   var childshow = req.body["childshow"];
   var cost_a_agent_all = req.body["cost_a_agent_all"];
   var cost_b_agent_all = req.body["cost_b_agent_all"];
    var id = req.body["id"];
    var price = req.body["price"];
    var topic_en = req.body["topic_en"];
    var type = req.body["type"];
    var depetime = req.body["depetime"];
    var departure = req.body["departure"].split("-");
    var fname = req.body["fname"];
    var lname = req.body["lname"];
    var address = req.body["address"];
    var phone = req.body["phone"];
    var email = req.body["email"];
    var province_to = req.body["province_to"];
    var listcar = req.body["listcar"];
    var profrom = req.body["from"];
    var proto = req.body["to"];
    
    var lname = req.body["lname"];
    //var address = req.body["address"];
    //var phone = req.body["phone"];
    var email = req.body["email"];
    //console.log("dfvgdfgjdfkgdfkgdjfgjfdkgfdgkjdfkgdfkgjfdkgjdfgjdfkgjdfkgjfdkgjdfkgjfdkgjdfkgjfdgkjdfgkdfjgkdfjk"+depetime);
    console.log(id);
    console.log(topic_en);
    console.log(adultshow);
    console.log(childshow);
    console.log(cost_a_agent_all);
    console.log(cost_b_agent_all);
    console.log(departure+"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    var departurenew = departure[2] + '-' + departure[0] + '-' + departure[1];

    console.log(departurenew);


    //console.log(type);
    console.log(profrom);
    console.log(proto);

  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('insert into web_booking(tour_id,tour_name,adult,child,cost_adult,cost_child,type,booking_date,depe_date,fname,lname,address,phone, email, dape_time ,total_price, privince_to, cars, p_from, p_to,id_from, id_to,user_id ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) '
          , [id,topic_en,adultshow,childshow,cost_a_agent_all,cost_b_agent_all,type, new Date(),departurenew, fname, lname, address, phone, email, depetime ,price, province_to ,listcar, req.body["from"], req.body["to"],req.body["idfrom"],req.body["idto"],req.body["account"]]
          , function(err, result) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

               console.log("sssssss"+result);

                //console.log(result);
                //onSuccess(res, result)
                var date = new Date();
                var day  = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();
                day = (day < 10 ? "0" : "") + day;
                month = (month < 10 ? "0" : "") + month;
                var booking_id = (year+month+day);
                var booking_day = (year+'-'+month+'-'+day);
                //return booking_id;

                genbookingid(req,res,booking_id,booking_day,result.insertId ,onSuccess);
                //onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}
function genbookingid(req, res, booking_id, booking_day, id , onSuccess ){
        var day = booking_day+' 00:00:00';
        var day1 = booking_day+' 23:59:59';
        var newBooking;

        var booking = booking_id;
        // console.log(id.booking_id);
        var j = id;
        console.log("in get beetween date-time")
        pool.getConnection(function(err, connection) {
           if (err) {
              console.error('error connecting: ' + err.stack);
              return;
            }
            else
            {

              connection.query('select count(*) as cnt from web_booking where booking_date BETWEEN ? AND ? '
                ,[day,day1]
                , function(err, result) {
                    //connection.release();
                      if (err) {
                        console.log(err);
                        onFail(res, err);
                      }
                      else {


                        //console.log(result[0].count);
                        //console.log(result);
                        var x = result[0].cnt;
                        //console.log("xxx"+x);
                        var n = x.toString();
                        var zero = 4 - n.length;
                        var newcode;
                        for ( var i = 0;i < zero;i++ )
                        {
                            if(i==0)
                            {
                                newcode = '0';
                            }
                            else
                            {
                                newcode += '0';
                            }
                        }
                        var code = newcode + n;
                        var finalcode = booking + code;
                        //console.log(finalcode);
                        var booking_id;
                        connection.query("UPDATE web_booking SET  booking_id = ? WHERE  id = ? " 
                        , [finalcode,j]
                        ,  function(err, result) {
                            connection.release();
                              if (err) {
                                console.log(err);
                                onFail(res, err);
                              }
                              else {
                                    console.log("BOOKING UPDATE SUCCESS");
                                    
                                   
                                    //console.log("booking_id"+booking_id);
                                   res.end(JSON.stringify({status:"ok", data:result, bookid:finalcode}));
                                     //return booking_id;
                                   
                                }

                        });
                        //return booking_id;


                    }

                });
            }
        });
}
function gettime_m(res,req,onSuccess, onFail){
  var id = req.params.id;
  //console.log(id);
  pool.getConnection(function(err, connection) {
    if(err){
      console.log('Error connecting to Db:\n'+err.stack);
      return;
    }

    connection.query('SELECT show_h,show_m ,id FROM web_showtime where product = ?'
       , [id]
       ,  function(err, result){
        connection.release();
        if(err){
            onFail(res, err);
          }
          else{
            //console.log(result);
            onSuccess(res, result)
          }
     });
    //connection.end();
  });

}
function getproduct_onfront_m(res,onSuccess, onFail){
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT tbl_web_product.topic, tbl_web_product.detail_en, tbl_web_product.detail_cn,tbl_web_product.detail_th, tbl_web_product.cost_a_agent_all,tbl_web_product.cost_b_agent_all, tbl_web_product.type, tbl_web_product.topic_en_web as topic_en,tbl_web_product.topic_cn_web as topic_cn,tbl_web_product.topic_th_web as topic_th, tbl_web_product.onsale_front, tbl_web_product.onsale_enable, tbl_web_product.onsale_promotion, tbl_web_product.onsale_top,tbl_web_product.image_crop,tbl_web_product.id,tbl_web_product.round_en,tbl_web_product.province,tbl_web_product.open_Sun,tbl_web_product.open_Mon, tbl_web_product.open_Tue,tbl_web_product.open_Wed,tbl_web_product.open_Thu,tbl_web_product.open_Fri,tbl_web_product.open_Sat,tbl_web_admin.company  FROM web_product as tbl_web_product LEFT JOIN web_admin as tbl_web_admin ON tbl_web_product.company=tbl_web_admin.id WHERE tbl_web_product.type = "Day Tour" and tbl_web_product.onsale_front =1'
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

                onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}

function getproduct_hotel_m(res,onSuccess, onFail){
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('select * from web_hotel where onsale_front = 1'
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

                onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}


function getgallery_hotel_m(res,req,onSuccess, onFail){
  var id = req.params.id;
  //console.log(id);
  pool.getConnection(function(err, connection) {
    if(err){
      console.log('Error connecting to Db:\n'+err.stack);
      return;
    }

    connection.query('SELECT post_date FROM web_galleryhotel where category = ?'
       , [id]
       ,  function(err, result){
        connection.release();
        if(err){
            onFail(res, err);
          }
          else{
            //console.log(result);
            onSuccess(res, result)
          }
     });
    //connection.end();
  });

}

function getselect_hotel_m(res, req,onSuccess, onFail){
  var id = req.params.id;
  //console.log(id);
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('select * from web_hotel where id = ?'
          ,[id]
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

                onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}

function gettransferchange_hotel_m(res, req,onSuccess, onFail){
  var hotel_id = req.params.hotel_id;
  var showtime_id = req.params.showtime_id;
  //console.log(hotel_id);
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('select * from web_transfercharge_hotel where hotel = ? AND showtime = ?'
          ,[hotel_id,showtime_id]
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

                onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}

function gettransferplace_hotel_m(res, req,onSuccess, onFail){
  var id = req.params.id;
  console.log(id);
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('select * from web_transferplace where pro = ?'
          ,[id]
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {
                //console.log(result)
                onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}


function getprovince_m(res, onSuccess, onFail){
  //var id = req.params.id;
  //console.log(id);
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('select id,name_en_web as name_en ,name_th_web as name_th,name_cn_web as name_cn, front_transfer from web_province'
          //,[id]
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {
                //console.log(result);
                onSuccess(res, result)

             }
              //connection.end();
        });
      }
   });
}


function gettransfer_product_m(res, onSuccess, onFail){
  //var id = req.params.id;
  //console.log(id);
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT tbl_transfer.topic_en as topic_en, tbl_transfer.topic_cn_web as topic_cn, tbl_transfer.topic_th_web as topic_th, tbl_transfer.onsale_top as pro_ontop, tbl_transfer.id as transfer_id, tbl_transfer.stay,tbl_transfer.stay_to, tbl_transfer.cartype, tbl_transfer.cost_a_sell as cost_a_agent_all , tbl_transfer.type,tbl_transfer.post_date, tbl_car.id as car_id, tbl_car.person as person, tbl_car.topic_en_web as car_topic_en,tbl_car.topic_th_web as car_topic_th, tbl_car.topic_cn_web as car_topic_cn,  tbl_car.pax_en_web as pax_en,tbl_car.pax_th_web as pax_th,tbl_car.pax_cn_web as pax_cn, tbl_car.car_model ,  tbl_province.id as province_id, tbl_province.front_transfer as front_transfer, tbl_province.name_en_web as province_name_en,tbl_province.name_cn_web as province_name_cn,tbl_province.name_th_web as province_name_th,  tbl_province_to.id as province_id_to,  tbl_province_to.name_th_web as province_name_to,tbl_province_to.name_cn_web as province_name_to_cn,tbl_province_to.name_th_web as province_name_to_th FROM web_transferproduct as tbl_transfer LEFT JOIN web_car as tbl_car ON tbl_transfer.cartype=tbl_car.id  LEFT JOIN web_province as tbl_province  ON tbl_transfer.stay = tbl_province.id LEFT JOIN web_province as tbl_province_to  ON tbl_transfer.stay_to = tbl_province_to.id WHERE tbl_transfer.onsale_top = 1 ORDER BY tbl_transfer.cost_a_sell*1 ASC'
          //,[id]
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {
                //console.log(result);
                onSuccess(res, result)

             }
              //connection.end();
        });
      }
   });
}
function gettransfer_product_m_all(res, onSuccess, onFail){
  //var id = req.params.id;
  //console.log(id);
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT tbl_transfer.topic_en as topic_en, tbl_transfer.topic_cn_web as topic_cn, tbl_transfer.topic_th_web as topic_th, tbl_transfer.onsale_top as pro_ontop, tbl_transfer.id as transfer_id, tbl_transfer.stay,tbl_transfer.stay_to, tbl_transfer.cartype, tbl_transfer.cost_a_sell as cost_a_agent_all, tbl_transfer.type,tbl_transfer.post_date,tbl_transfer.aum_from,tbl_transfer.aum_to,tbl_transfer.place_default,tbl_transfer.place_default_to,tbl_transfer.stay,tbl_transfer.area, tbl_car.id as car_id, tbl_car.person as person, tbl_car.topic_en_web as car_topic_en,tbl_car.topic_th_web as car_topic_th, tbl_car.topic_cn_web as car_topic_cn,  tbl_car.pax_en_web as pax_en,tbl_car.pax_th_web as pax_th,tbl_car.pax_cn_web as pax_cn, tbl_car.car_model ,  tbl_province.id as province_id, tbl_province.front_transfer as front_transfer, tbl_province.name_en_web as province_name_en,tbl_province.name_cn_web as province_name_cn,tbl_province.name_th_web as province_name_th,  tbl_province_to.id as province_id_to,  tbl_province_to.name_en_web as province_name_to,tbl_province_to.name_cn_web as province_name_to_cn,tbl_province_to.name_th_web as province_name_to_th FROM web_transferproduct as tbl_transfer LEFT JOIN web_car as tbl_car ON tbl_transfer.cartype=tbl_car.id  LEFT JOIN web_province as tbl_province  ON tbl_transfer.stay = tbl_province.id LEFT JOIN web_province as tbl_province_to  ON tbl_transfer.stay_to = tbl_province_to.id WHERE tbl_transfer.status = 1 ORDER BY tbl_transfer.cost_a_sell*1 ASC'
            //,[id]
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {
                for (var i = 0; i < result.length; i++) {
                  //console.log(result[i].car_model)
                }
                //console.log(result)
                //console.log(result);
                onSuccess(res, result)

             }
              //connection.end();
        });
      }
   });
}


function getcar_product_m(res, onSuccess, onFail){
  //var id = req.params.id;
  //console.log(id);
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('select id,topic_en_web as topic_en,person,pax_en_web as pax_en ,pax_cn_web as pax_cn, pax_th_web as pax_th,  topic_en_web as topic_en,topic_cn_web as topic_cn,topic_th_web as topic_th from web_car'
          //,[id]
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {
                //console.log(result);
                onSuccess(res, result)

             }
              //connection.end();
        });
      }
   });
}


function getbooking_m(res,req,onSuccess, onFail){
  var bookid = req.params.bookid;
  console.log(bookid);
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('select * from web_booking where booking_id = ?'
          ,[bookid]
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {
                //console.log(result);
                onSuccess(res, result)

             }
              //connection.end();
        });
      }
   });
}

function get_web_car_capacity_m(res,req, onSuccess, onFail){
  var model = req.params.model;
  //console.log(id);
  console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT bag_big, bag_small, adult, child, plan, car_model FROM web_car_capacity WHERE car_model = ?'
          ,[model]
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {
                //console.log(result);
                onSuccess(res, result);

             }
              //connection.end();
        });
      }
   });
}
function gettransferplace(res,onSuccess, onFail){ 
  console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('select id,topic,topic_en,aum,pro,amphur,latitude,longitude,province from web_transferplace where status = 1'          
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {
                //console.log(result);
                onSuccess(res, result)
             }
        });
      }
   });
}
function gettransfer_product_byid(res,req, onSuccess, onFail){
  var id = req.params.id;
  //console.log(id);
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT tbl_transfer.topic_en as topic_en, tbl_transfer.topic_cn_web as topic_cn, tbl_transfer.topic_th_web as topic_th, tbl_transfer.onsale_top as pro_ontop, tbl_transfer.id as transfer_id, tbl_transfer.stay,tbl_transfer.stay_to, tbl_transfer.cartype, tbl_transfer.cost_a_sell as cost_a_agent_all, tbl_transfer.type,tbl_transfer.aum_from,tbl_transfer.aum_to,tbl_transfer.place_default,tbl_transfer.place_default_to,tbl_transfer.post_date,tbl_transfer.area, tbl_car.id as car_id, tbl_car.person as person, tbl_car.topic_en_web as car_topic_en,tbl_car.topic_th_web as car_topic_th, tbl_car.topic_cn_web as car_topic_cn,  tbl_car.pax_en_web as pax_en,tbl_car.pax_th_web as pax_th,tbl_car.pax_cn_web as pax_cn, tbl_car.car_model ,  tbl_province.id as province_id, tbl_province.front_transfer as front_transfer, tbl_province.name_en_web as province_name,tbl_province.name_cn_web as province_name_cn,tbl_province.name_th_web as province_name_th,  tbl_province_to.id as province_id_to,  tbl_province_to.name_en_web as province_name_to,tbl_province_to.name_cn_web as province_name_to_cn,tbl_province_to.name_th_web as province_name_to_th FROM web_transferproduct as tbl_transfer LEFT JOIN web_car as tbl_car ON tbl_transfer.cartype=tbl_car.id  LEFT JOIN web_province as tbl_province  ON tbl_transfer.stay = tbl_province.id LEFT JOIN web_province as tbl_province_to  ON tbl_transfer.stay_to = tbl_province_to.id WHERE tbl_transfer.id = ? '
          ,[id]
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {
                //console.log(result);
                onSuccess(res, result)

             }
              //connection.end();
        });
      }
   });
}
function addBookingless(req,res,onSuccess, onFail){
  //console.log("in model");

  var adultshow = req.body["adultshow"];
   var childshow = req.body["childshow"];
   var cost_a_agent_all = req.body["cost_a_agent_all"];
   var cost_b_agent_all = req.body["cost_b_agent_all"];
    var id = req.body["id"];
    var price = req.body["price"];
    var topic_en = req.body["topic_en"];
    var type = req.body["type"];
    var depetime = req.body["depetime"];
    var departure = req.body["departure"];
    var fname = req.body["fname"];
    var lname = req.body["lname"];
    var address = req.body["address"];
    var phone = req.body["phone"];
    var email = req.body["email"];
    var province_to = req.body["province_to"];
    var listcar = req.body["listcar"];
    var profrom = req.body["from"];
    var proto = req.body["to"];
    
    //var lname = req.body["lname"];
    //var address = req.body["address"];
    //var phone = req.body["phone"];
    //var email = req.body["email"];
    //console.log("dfvgdfgjdfkgdfkgdjfgjfdkgfdgkjdfkgdfkgjfdkgjdfgjdfkgjdfkgjfdkgjdfkgjfdkgjdfkgjfdgkjdfgkdfjgkdfjk"+depetime);
    //console.log(id);
    //console.log(topic_en);
    //console.log(adultshow);
    //console.log(childshow);
    //console.log(cost_a_agent_all);
    //console.log(cost_b_agent_all);

    //console.log(price);


    //console.log(type);
    console.log(profrom);
    console.log(proto);

  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('insert into web_booking(tour_id,tour_name,adult,child,cost_adult,cost_child,type,booking_date,depe_date,fname,lname,address,phone, email, dape_time ,total_price, privince_to, cars, p_from, p_to,id_from, id_to,status,user_id ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) '
          , [id,topic_en,adultshow,childshow,cost_a_agent_all,cost_b_agent_all,type, new Date(),departure, fname, lname, address, phone, email, depetime ,price, province_to ,listcar, req.body["from"], req.body["to"],req.body["idfrom"], req.body["idto"], 0, req.body["account"]]
          , function(err, result) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

               console.log("sssssss"+result);

                //console.log(result);
                //onSuccess(res, result)
                var date = new Date();
                var day  = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();
                day = (day < 10 ? "0" : "") + day;
                month = (month < 10 ? "0" : "") + month;
                var booking_id = (day+month+year);
                var booking_day = (year+'-'+month+'-'+day);
                //return booking_id;

                genbookingidless(req,res,booking_id,booking_day,result.insertId ,onSuccess);
                //onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}
function genbookingidless(req, res, booking_id, booking_day, id , onSuccess ){
        var day = booking_day+' 00:00:00';
        var day1 = booking_day+' 23:59:59';
        var newBooking;

        var booking = booking_id;
        // console.log(id.booking_id);
        var j = id;
        //console.log("fjjjjjjj"+j)
        pool.getConnection(function(err, connection) {
           if (err) {
              console.error('error connecting: ' + err.stack);
              return;
            }
            else
            {

              connection.query('select count(*) as cnt from web_booking where booking_date BETWEEN ? AND ? '
                ,[day,day1]
                , function(err, result) {
                    //connection.release();
                      if (err) {
                        console.log(err);
                        onFail(res, err);
                      }
                      else {


                        //console.log(result[0].count);
                        //console.log(result);
                        var x = result[0].cnt;
                        //console.log("xxx"+x);
                        var n = x.toString();
                        var zero = 4 - n.length;
                        var newcode;
                        for ( var i = 0;i < zero;i++ )
                        {
                            if(i==0)
                            {
                                newcode = '0';
                            }
                            else
                            {
                                newcode += '0';
                            }
                        }
                        var code = newcode + n;
                        var finalcode = booking + code;
                        //console.log(finalcode);
                        var booking_id;
                        connection.query("UPDATE web_booking SET  booking_id = ? WHERE  id = ? " 
                        , [finalcode,j]
                        ,  function(err, result) {
                            connection.release();
                              if (err) {
                                console.log(err);
                                onFail(res, err);
                              }
                              else {
                                    console.log("BOOKING UPDATE SUCCESS");
                                    
                                   
                                    //console.log("booking_id"+booking_id);
                                   res.end(JSON.stringify({status:"ok", data:result, bookid:finalcode}));
                                     //return booking_id;
                                   
                                }

                        });
                        //return booking_id;


                    }

                });
            }
        });
}

function getwebgalleryprovince(res,onSuccess, onFail){ 
  console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT * FROM web_gallery_province'          
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {
                //console.log(result);
                onSuccess(res, result)
             }
        });
      }
   });
}

function getproduct_type_show_m(res,onSuccess, onFail){
 // console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT tbl_web_product.topic, tbl_web_product.detail_en, tbl_web_product.detail_cn,tbl_web_product.detail_th, tbl_web_product.cost_a_agent_all,tbl_web_product.cost_b_agent_all, tbl_web_product.type, tbl_web_product.topic_en_web as topic_en,tbl_web_product.topic_cn_web as topic_cn,tbl_web_product.topic_th_web as topic_th, tbl_web_product.onsale_front, tbl_web_product.onsale_enable, tbl_web_product.onsale_promotion, tbl_web_product.onsale_top,tbl_web_product.image_crop,tbl_web_product.id,tbl_web_product.round_en,tbl_web_product.province,tbl_web_product.open_Sun,tbl_web_product.open_Mon, tbl_web_product.open_Tue,tbl_web_product.open_Wed,tbl_web_product.open_Thu,tbl_web_product.open_Fri,tbl_web_product.open_Sat,tbl_web_admin.company  FROM web_product as tbl_web_product LEFT JOIN web_admin as tbl_web_admin ON tbl_web_product.company=tbl_web_admin.id WHERE tbl_web_product.type = "Show" '
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

                onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}
function addSubtourFromcalendar(res,date, tour_id, allotment,allotmenttotal,roundTime,onSuccess, onFail){ 
  console.log("in model add allotment")
    console.log(date)
    console.log(tour_id)
    console.log(allotment)
    console.log(allotmenttotal)
    console.log(roundTime)
    var dateAllot = 'web_product_limit_';
    var x = date.toISOString().replace(/T/, ' ').   // replace T with a space
    replace(/\..+/, '');
    console.log(x);
    var a = x.split(" ");
    console.log(a);
    var b = a[0].split("-");
    console.log(b);
  //var datenew =  x[0].split("-");
  //console.log(datenew);
    var tabledb = dateAllot+b[0]+"_"+b[1];
    console.log(tabledb)
  //var b = datenew[2]+ '-' + datenew[1] +'-' + datenew[0];
    var ondate  = b[0]+ '-' + b[1] +'-' + b[2];
    console.log(ondate)
   console.log('INSERT INTO' + ' ' + tabledb + '(allday, pro_id, round_id, pro_total, pro_allot, pro_allot_balance)')
   console.log('SELECT  pro_total,pro_allot FROM' + ' ' + tabledb + ' ' + 'WHERE allday = ? AND pro_id = ?')
    pool2.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('SELECT  * FROM' + ' ' +  tabledb + ' ' + 'WHERE allday = ? AND round_id = ?'
            , [ondate,roundTime]
            , function(err ,result){
               //connection.release();
                if (err) {
                console.log(err);
                onFail(err);
                }
                else{

                    console.log(result);
                    if(result == "")
                    {

                               connection.query('INSERT INTO' + ' ' + tabledb +'(allday, pro_id, round_id, pro_total, pro_allot, pro_allot_balance) VALUES(?, ?, ?, ?, ?, ?)'
                                    , [ondate, tour_id,roundTime,allotmenttotal, allotment , allotment]
                                    , function(err ,result){
                                      connection.release();
                                        if (err) {
                                        console.log(err);
                                        onFail(res, err);
                                        }else{
                                            
                                             onSuccess(res,result)
                                        }
                                    });

                    }
                    else
                    {
                       
                        onSuccess("notok");
                    }

                }
            });
      }
      
        //db.detach();
    });
    
}
function getproductallotmentseting(res,onSuccess, onFail){
  //console.log("in model");
  pool.getConnection(function(err, connection) {
     if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      else{
        connection.query('select id,  type, topic_en from web_product ORDER BY id ASC'
          , function(err, result, fields) {
            connection.release();
              if (err) {
                console.log(err);
                onFail(res, err);
              }
              else {

                onSuccess(res, result)
             }
              //connection.end();
        });
      }
   });
}
function getallotment(res,req,month,year, onSuccess, onFail){
    var idround = req.body["idround"];
    var tour_id = req.body["tour_id"];
    var datesend = req.body["datesend"];
    console.log("in model")
    console.log(idround)
    console.log(tour_id)
    console.log(month)
    var monthless;
    var year;
    var dateAllot = 'web_product_limit_';
   
    if (month < 10) {
        monthless = '0'+ month;
    }
    else{
        monthless = month;
    }
    console.log(monthless)
   var table = dateAllot + year+'_'+monthless;   
   console.log(table)

    pool2.getConnection(function(err, connection) {
       if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
        else{
          connection.query('select * from'+ ' ' +table +' '+ 'WHERE pro_id = ? AND round_id = ? ORDER BY allday ASC'
            ,[tour_id,idround]
            , function(err, result, fields) {
              connection.release();
                if (err) {
                  console.log(err);
                  onFail(err);
                }
                else {
                  console.log(result);
                  onSuccess(res,result);

               }
                //connection.end();
          });
        }
     });
}
module.exports = {
    Getgallery_m : getgallery_m,
    Getproduct_m : getproduct_m,
    Getproduct_m2 : getproduct_m2,
    Getproduct_m3 : getproduct_m3,
    Getselect_product_m : getselect_product_m,
    Getproduct_tyle_spa_m : getproduct_tyle_spa_m,
    Getproduct_tyle_diving_m : getproduct_tyle_diving_m,
    Getproduct_tyle_golf_m : getproduct_tyle_golf_m,
    Getproduct_tyle_wedding_m : getproduct_tyle_wedding_m,
    Getproduct_tyle_boat_m : getproduct_tyle_boat_m,
    Getproduct_tyle_package_m : getproduct_tyle_package_m,
    AddBooking_m : addBooking_m,
    Gettime_m : gettime_m,
    Getproduct_onfront_m : getproduct_onfront_m,
    Getproduct_hotel_m : getproduct_hotel_m,
    Getgallery_hotel_m : getgallery_hotel_m,
    Getselect_hotel_m : getselect_hotel_m,
    Gettransferchange_hotel_m : gettransferchange_hotel_m,
    Gettransferplace_hotel_m : gettransferplace_hotel_m,
    Getprovince_m : getprovince_m,
    Gettransfer_product_m : gettransfer_product_m,
    Getcar_product_m : getcar_product_m,
    Gettransfer_product_m_all : gettransfer_product_m_all,
    Getbooking_m : getbooking_m,
    Get_web_car_capacity_m : get_web_car_capacity_m,
    Gettransferplace : gettransferplace,
    Gettransfer_product_byid : gettransfer_product_byid,
    AddBookingless : addBookingless,
    Getwebgalleryprovince : getwebgalleryprovince,
    Getproduct_type_show_m : getproduct_type_show_m,
    AddSubtourFromcalendar : addSubtourFromcalendar,
    Getproductallotmentseting : getproductallotmentseting,
    Getallotment : getallotment


};
