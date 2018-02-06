var mysql = require('mysql');
var bodyParser = require('body-parser')
var pool  = mysql.createPool({
  host     : '223.223.218.85',
  user     : 'admin_webfront',
  password : 'web@t-booking',
  database : 'admin_limit'
  


});
var dateAlot = 'web_product_limit_';
var date = new Date().toISOString().replace(/T/, ' ').   // replace T with a space
  	replace(/\..+/, '');
  	console.log(date);
 	var datenew =  date.split("-");
	console.log(datenew);
 	//var nameTable = dateAlot+datenew[0]+'_'+datenew[1];
 	
	//var x = 'SELECT * FROM'+' ' +  nameTable +' '+ 'WHERE pro_id = ? OR allday = ? OR round_id = ?';
	//console.log(x)




function getAllotmantByIdProduct(res,req,error,success){
  console.log("in model get allotment")
  var idproduct = req.body["idproduct"];
  var x = req.body["ondate"];
  var idround = req.body["idround"];
  //var amount = req.body["idround"];
  	var a = x.split("-")
  	var b = a[2]+ '-' + a[0] +'-' + a[1];
    var ondate = b;
    nameTable = dateAlot + a[2]+ '_' + a[0];
    console.log(nameTable)
  console.log(idproduct);
  console.log(ondate+"=====");
  console.log(idround);
  pool.getConnection(function(err, connection) {
    if(err){
      console.log('Error connecting to Db:\n'+err.stack);
      return;
    }

    connection.query('SELECT * FROM'+' ' +  nameTable +' '+ 'WHERE pro_id = ? AND allday = ? AND round_id = ?'
       , [idproduct,ondate,idround]
       ,  function(err, result){
        connection.release();
        if(err){
            error(res, err);
          }
          else{
            //console.log(result);
            success(res, result)
          }
     });
    //connection.end();
  });

}
function updateAllotmant(res,req,error,success){
  var allotid = req.body["allotid"];
  var allotused = req.body["allotused"];
  var x = req.body["ondate"];
  var allotbalance = req.body["allotbalance"];
  //var amount = req.body["idround"];
    var a = x.split("-")    
    var nameTableup = dateAlot + a[2]+ '_' + a[0];
  console.log(allotid);
  console.log(nameTableup+"=====");
  console.log(allotbalance);
  console.log(allotused)
  
  
  pool.getConnection(function(err, connection) {
    if(err){
      console.log('Error connecting to Db:\n'+err.stack);
      return;
    }

    connection.query('UPDATE'+ ' ' + nameTableup + ' ' +  'SET  pro_allot_balance = ?, pro_used = ?  WHERE id = ?'
       , [allotbalance,allotused,allotid]
       ,  function(err, result){
        connection.release();
        if(err){
            error(res, err);
          }
          else{
            //console.log(result);
            success(res, result)
          }
     });
    //connection.end();
  });

}
function updateAllotmantless(res,req,error,success){
  var allotid = req.body["allotid"];
  var allotused = req.body["allotused"];
  var x = req.body["ondate"];
  var allotbalance = req.body["allotbalance"];
  var allotplus = req.body["allotplus"];
  //var amount = req.body["idround"];
    var a = x.split("-")    
    var nameTableup = dateAlot + a[2]+ '_' + a[1];
    //var allotdate = a[2]+ '-' + a[1] + '-' a[0];
  console.log(allotid);
  console.log(nameTableup+"=====");
  console.log(allotbalance);
  console.log(allotused)
  console.log(allotplus)
  
  
  pool.getConnection(function(err, connection) {
    if(err){
      console.log('Error connecting to Db:\n'+err.stack);
      return;
    }

    connection.query('UPDATE'+ ' ' + nameTableup + ' ' +  'SET  pro_allot_balance = ?, pro_used = ?, pro_allot_plus = ?  WHERE id = ?'
       , [allotbalance,allotused,allotplus,allotid]
       ,  function(err, result){
        connection.release();
        if(err){
            error(res, err);
          }
          else{
            //console.log(result);
            success(res, result)
          }
     });
    //connection.end();
  });

}

module.exports = {
	GetAllotmantByIdProduct : getAllotmantByIdProduct,
  UpdateAllotmant : updateAllotmant,
  UpdateAllotmantless : updateAllotmantless
};


