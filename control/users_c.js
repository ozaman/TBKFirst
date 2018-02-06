var user = require('../model/users_m.js');
var fs = require('fs');

function register(req, res){

	var text = JSON.stringify(req.body["password"]);
	//console.log(text);
    buf1 = new Buffer(text);
    var key1 = buf1.toString('hex');
    buf2 = new Buffer(key1);
    var key2 = buf2.toString('hex');
    buf3 = new Buffer(key2);
    var key3 = buf3.toString('BASE64');
    //console.log(key3);
    user.Register(key3, req, res);
}
function login(req, res){
	//console.log("in controll login ")

	var text = JSON.stringify(req.body["password"]);
	//console.log(text);
    buf1 = new Buffer(text);
    var key1 = buf1.toString('hex');
    buf2 = new Buffer(key1);
    var key2 = buf2.toString('hex');
    buf3 = new Buffer(key2);
    var key3 = buf3.toString('BASE64');
    //console.log(key3)
    user.Login(key3, req, res);
}

function getuserbyid(req, res){
    user.Getuserbyid(req.body['id'],
        function (err){
            console.log(err);
        },
        function (result){
            res.end(JSON.stringify(result));
        });
}
function getuserbyregis(req, res){
    user.Getuserbyregis(req,res
        ,function (err){
            console.log(err);
        },
        function (result){
            res.end(JSON.stringify(result));
        });
}
function getfulluserbyid(req,res){
    user.Getfulluserbyid(req.body['id'],
        function (err){
            console.log(err);
        },
        function (result){            
            res.end(JSON.stringify(result));
        });
}
function editpass(req, res){
    var text = JSON.stringify(req.body["newpass"]);
    var isuserid = req.body["id"];
    //console.log(isuserid)
    buf1 = new Buffer(text);
    var key1 = buf1.toString('hex');
    buf2 = new Buffer(key1);
    var key2 = buf2.toString('hex');
    buf3 = new Buffer(key2);
    var key3 = buf3.toString('BASE64');
    //console.log(key3)
    
    user.Editpass(key3, isuserid, req,
        function (err){
            console.log(err);
        },
        function (result){
            res.redirect('http://localhost:8080');
        });
}
function edituser(req, res){
    user.Edituser(req,
        function (err){
            console.log(err);
        },
        function (result){
            res.redirect('/profile');
        });
}
function addProfile (req, res , input){    
    var path = req.file.filename;
    //console.log(path);
    //console.log("Company is "+req.body["company"]);   
    user.AddProfile(req, res, path,
        function (err){
            console.log(err);
        },
        function (result){
            res.redirect('/profile');
        });
}


function addProfile(req, res, folder){
    
    console.log("Check in addprofile");
    var cat = req.body["cat"];
    var token = req.body["token"];
    if(!token){
        res.end("invalid");
        return;
    }
    //console.log(cat+"is cat")
    //console.log(token+"is token")
    
   
        
            
            var newPathFile = "./uploads/profile/" ;
            var oldPathFile = './uploads/profile/';

            if(!fs.existsSync(newPathFile)){
              console.log("don't have floder");
                fs.mkdirSync(newPathFile);
            }
            else {
              console.log("Have floder");
            }
            //console.log(req.file+"req-file");
            //console.log(req.file.filename+"filename-name")
            fs.createReadStream(oldPathFile + req.file.filename);
            user.AddProfile([req.file.filename,token]
                 ,function (err){
                    console.log("Error 2");
                    res.redirect("/profile#?id=" + token + "&err=['"+err+"']");
                },
                function (result){
                    console.log("ggggggg");

                            //res.redirect("/profile#?id=" + token);
                });
                        
           
   
           

    
}
function getCountry(req,res){
    user.GetCountry(res,
        function (err){
            console.log(err);
        },
        function (result){            
            res.end(JSON.stringify(result));
        });
}

function getBookingbyid(req, res){
    //console.log("in getBookingbyid controller")
    user.GetBookingbyid(req,
        function (err){
            console.log(err);
        },
        function (result){
           res.end(JSON.stringify(result));
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
    GetCountry : getCountry,
    GetBookingbyid : getBookingbyid,
    Getuserbyregis : getuserbyregis
    
}