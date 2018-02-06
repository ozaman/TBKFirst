/**
 * Created by ozaclever on 11/07/2559.
 */

var mysql = require('mysql');
var bodyParser = require('body-parser')
var pool  = mysql.createPool({
  host     : '223.223.218.85',
  user     : 'admin_webfront',
  password : 'web@t-booking',
  database : 'admin_webfront'
  


});
function register(key3, req, res){
  
  pool.getConnection(function(err, connection) {
    if(err){
      console.log('Error connecting to Db:\n'+err.stack);
      return;
    }

    connection.query('INSERT INTO GO_users(email,password,fname,lname,phone,address) VALUES (?,?,?,?,?,?)'
          ,[req.body['username'],key3,req.body['fname'],req.body['lname'],req.body['phone'],req.body['address']]
       ,  function(err, result){
        connection.release();
        if(err){
             throw err;
          }
          else{
            //console.log(result);
            res.redirect('/profile');
          }
     });
    //connection.end();
  });

}
function saveOAuthUserProfile(req,providerUserProfile, done, res){
    //console.log(providerUserProfile)
    //console.log(providerUserProfile.emails[0].value);
        //console.log(providerUserProfile.id);
        //console.log(providerUserProfile.firstName);//first name
        //console.log(providerUserProfile.lastName);
        //console.log(providerUserProfile.email);
        //console.log(providerUserProfile.name.familyName); //last name
       // console.log(providerUserProfile.photos[0].value);
       var fd_id = providerUserProfile.id;
       var email = providerUserProfile.email;
       var fname = providerUserProfile.firstName;
       var lname = providerUserProfile.lastName;
  pool.getConnection(function(err, connection) {
    if(err){
      console.log('Error connecting to Db:\n'+err.stack);
      return;
    }
    connection.query("SELECT * FROM GO_users WHERE facebook_id = ?"
      , [fd_id]
      , function(err, user){
        connection.release();
        if (err){
            return done(err);
        }
        else if (user.length == 0){

            connection.query('INSERT INTO GO_users(email,fname,lname,facebook_id) VALUES (?,?,?,?)'
                ,[email,fname,lname,fd_id]
                , function(err, result){
                connection.release();
                if(err){
                     throw err;
                  }
                  else{
                    success(result);
                    //console.log(result);
                    //res.redirect('/');
                  }
             });
          }
          else{
            console.log("have user")
            return done(err, user);
          }
    
        });
     });

}
function login(key3, req, res){ 
//console.log("in model login"); 
  pool.getConnection(function(err, connection) {
    if(err){
      console.log('Error connecting to Db:\n'+err.stack);
      return;
    }

    connection.query('SELECT * FROM GO_users WHERE email = ?'
       ,  [req.body["username"]]
       ,  function(err, result){
        connection.release();
        if(err){
             throw err;
          }
          else{
            //console.log(result);
            //console.log("result = "+ result[0].password);
            //console.log("key3 = "+ key3);

            if(result=="")
              {
                //console.log("in status 1 ");
                res.end(JSON.stringify({status:1}));
              }
              else
              {
                if(key3==result[0].password)
                {
                  //console.log("in status 0 ");
                  res.end(JSON.stringify({status:0, username:result[0].id}));
                }
                else
                {
                  //console.log("in status 2 ");
                  res.end(JSON.stringify({status:2}));
                }
              }
            }
          
     });
    //connection.end();
  });

}

function getuserbyid(id,error,success){  
  pool.getConnection(function(err, connection) {
    if(err){
      console.log('Error connecting to Db:\n'+err.stack);
      return;
    }

    connection.query('SELECT * FROM GO_users WHERE id = ?'
        ,[id]          
        , function(err, result){
        connection.release();
        if(err){
             throw err;
          }
          else{
            //console.log(result);
            success(result);
          }
     });
    //connection.end();
  });

}

function getfulluserbyid(id,error,success){ 
  pool.getConnection(function(err, connection) {
    if(err){
      console.log('Error connecting to Db:\n'+err.stack);
      return;
    }

    connection.query('SELECT fname, lname, address, phone, email FROM GO_users WHERE id = ?'
        ,[id]          
        , function(err, result){
        connection.release();
        if(err){
             throw err;
          }
          else{
            //console.log(result);
            success(result);
          }
     });
    //connection.end();
  });

}
function getuserbyregis(req,res,error,success){
  var user = req.body["user"];
  console.log(user)  
  pool.getConnection(function(err, connection) {
    if(err){
      console.log('Error connecting to Db:\n'+err.stack);
      return;
    }

    connection.query('SELECT email FROM GO_users WHERE email = ?'
        ,[user]          
        , function(err, result){
        connection.release();
        if(err){
             throw err;
          }
          else{
            console.log(result);
            success(result);
          }
     });
    //connection.end();
  });

}

function editpass(key3, id ,req, error, success){ 
    pool.getConnection(function(err, connection) {
      if (err)  throw err;   
    else
        {
        connection.query('UPDATE GO_users SET password = ? WHERE id = ?'
          ,[key3,id]
          , function(err, result) {
            connection.release();
            if(err){
                error(err);
             }
        else
            {             
              success(result);
            }
        });
    }
  });
}
function edituser(req,error,success){
   pool.getConnection(function(err, connection) {
      if (err)  throw err;   
    else
        {
         connection.query('UPDATE GO_users SET fname = ?, lname = ?, address = ?, phone = ? WHERE id = ?'
          ,[req.body["fname"],req.body["lname"],req.body["address"],req.body["phone"],req.body["id"]]
          , function(err, result) {
            if (err) error(err);
            connection.release();
            if(err){
                error(err);
             }
        else
            {             
              success(result);
            }
        });
    }
  });
}
function addProfile(values, error, success){
    pool.getConnection(function(err, connection) {
      if (err)  throw err;   
    else{
          //console.log(values);
          //console.log(typeof values[0]);
          connection.query('UPDATE GO_users SET resource = ? WHERE id = ?'
           ,values
           , function(err, result) {
          connection.release();
          if(err){
               error(err);
          }
        else{ 
              //console.log(result)           
                success(result);
          }
          });
      }
  });
    
}
function getCountry(res,error,success){ 
  pool.getConnection(function(err, connection) {
    if(err){
      console.log('Error connecting to Db:\n'+err.stack);
      return;
    }

    connection.query('SELECT * FROM country ORDER BY country.phonecode*1 ASC'               
        , function(err, result){
        connection.release();
        if(err){
             throw err;
          }
          else{
            //console.log(result);
            success(result);
          }
     });
    //connection.end();
  });

}
function getBookingbyid(req, error, success){
   pool.getConnection(function(err, connection) {
      if (err)  throw err;   
    else
        {
        connection.query('SELECT * FROM web_booking WHERE user_id = ?'
          ,[req.body["account"]]
          , function(err, result) {
            connection.release();
            if(err){
                error(err);
             }
        else
            {  
            //console.log(result)           
              success(result);
            }
        });
    }
  });
}
module.exports = {
    Register : register,
    Login : login,
    Getuserbyid : getuserbyid,
    Getfulluserbyid : getfulluserbyid,
    Editpass : editpass,
    Edituser : edituser,
    AddProfile : addProfile,
    SaveOAuthUserProfile : saveOAuthUserProfile,
    GetCountry : getCountry,
    GetBookingbyid : getBookingbyid,
    Getuserbyregis : getuserbyregis
    
} 