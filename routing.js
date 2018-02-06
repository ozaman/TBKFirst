
   
var api = require('./control/api.js');
//var controllor = require('./control/product_c.js');
var page = require('./control/page.js');
var port     = process.env.PORT || 8080;
var encryption = require('./encryption');
var user = require('./control/users_c.js');
var allotment = require('./control/allotment_c.js');
var users = require('./model/users_m.js');
var fs                =     require('fs')

var express           =     require('express')
  , passport          =     require('passport')
  , util              =     require('util') 
  , FacebookStrategy  =     require('passport-facebook').Strategy 
  , session           =     require('express-session')
  , cookieParser      =     require('cookie-parser')
  , bodyParser        =     require('body-parser')
  , app               =     express() 
  , path              =     require('path')
  , https             =     require('https')
  , multer            =     require('multer')
  , flash             =     require('connect-flash')
  // Passport session setup.

var socialConfig = require('./config.js');
//Router Control =====================
var router = express.Router();
var bodyParser = require('body-parser');
var APIRouter = express.Router();
var APIRouterCon = express.Router();
var APIRouterAlot = express.Router();


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use facebook strategy
/*passport.use(new FacebookStrategy({
        clientID: socialConfig.facebookAuth.clientID,
        clientSecret: socialConfig.facebookAuth.clientSecret,
        callbackURL: socialConfig.facebookAuth.callbackURL,
        passReqToCallback: true,
        profileFields: ['email','id', 'first_name', 'gender', 'last_name', 'picture'],
        //picture: profile.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg'
    },
    function(req, accessToken, refreshToken, profile, done) {

        //console.log('facebook Strategy Started');
        // Set the provider data and include tokens
        var providerData = profile._json;
        providerData.accessToken = accessToken;
        providerData.refreshToken = refreshToken;


        
        //console.log(JSON.stringify(profile));
        console.log(profile);
        //console.log(profile.emails[0].value);
        //console.log(profile.id);
        console.log(profile.name.givenName);//first name
        console.log(profile.displayName);
        console.log(profile.username);
        console.log(profile.name.familyName); //last name
        console.log(profile.photos[0].value);


    //  console.log(JSON.stringify(profile.name.givenName));

        // Create the user OAuth profile
        var providerUserProfile = {
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,            
            email: profile.emails[0].value,
            id: profile.id
            //username: profile.username,
            //provider: 'facebook',
            //providerIdentifierField: 'id',
            //providerData: providerData
        };

        console.log('provider' + providerUserProfile);
        //return done(null, profile);
        // Save the user OAuth profile
      users.SaveOAuthUserProfile(req, providerUserProfile, done);
    }
));*/


app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

//app.use(session({ secret: 'keyboard cat', key: 'sid'}));
//app.use(passport.initialize());
//app.use(passport.session());

//app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
//app.use(passport.initialize());
//app.use(passport.session()); // persistent login sessions

app.use(flash());
app.use(express.static('resource'));
//app.use(express.static('uploads/profile'));
app.use(express.static('resource/images'));
app.use(express.static('views'));
app.use(express.static('views/tour'));
app.get('/resource/js/:cssfile',function (req, res){
	res.sendFile(path.join(__dirname,'/resource/js',req.params.cssfile));
});
app.get('/resource/css/:cssfile',function (req, res){
	res.sendFile(path.join(__dirname,'/resource/css',req.params.cssfile));
});
app.use('/api', APIRouter);
app.use('/user', APIRouterCon);
app.use('/allotment', APIRouterAlot);
app.get('/', function (req, res) {
  	res.sendFile(path.join(__dirname,'views/index.html'));
}); 
app.get('/images:imgfile',function (req, res){
	//console.log("dsfsdfsdfsdfsd"+req.params.imgfile);
	res.sendFile(path.join(__dirname,'/images/',req.params.imgfile));
});
//routes path ==================================================================
app.get('/:htmlfile',function(req, res){    
    res.sendfile(path.join(__dirname + '/views/' + req.params.htmlfile+'.html'));
});
app.get('/uploads/profile/:filename',function(req, res){
 // console.log(req.params.filename);
  
  res.sendfile(path.join(__dirname,'/uploads/profile/',req.params.filename));
});
//--------------upload event---------------

/*app.route('/auth/facebook').get(passport.authenticate('facebook', {

    scope: ['email']
}));
//app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { 
       successRedirect : '/', 
       failureRedirect: '/login' 
  }),
  function(req, res) {
    res.redirect('/');
  });
  
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
app.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
});

// Passport session setup.
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});*/


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/profile/')
  },
  filename: function (req, file,cb) {
    
    var x = 'profile_' + req.body["token"] + '.png';
    cb(null, x)
  }
})
var upload = multer({ storage: storage })




//-----------------------------------------
app.use('/', APIRouterAlot);

APIRouterAlot.post("/getAllotmantByIdProduct", allotment.GetAllotmantByIdProduct);
APIRouterAlot.post("/updateAllotmant", allotment.UpdateAllotmant);
APIRouterAlot.post("/UpdateAllotmantless", allotment.UpdateAllotmantless);

app.use('/', APIRouterCon);

APIRouterCon.post("/register", user.Register);
APIRouterCon.post("/login", user.Login);
APIRouterCon.post("/getuserbyid",user.Getuserbyid);
APIRouterCon.post("/getfulluserbyid",user.Getfulluserbyid);
APIRouterCon.post("/editpass",user.Editpass);
APIRouterCon.post("/edituser",user.Edituser);
APIRouterCon.post("/addProfile", upload.single('pic'),user.AddProfile);
APIRouterCon.post("/getCountry",user.GetCountry);
APIRouterCon.post("/getBookingbyid",user.GetBookingbyid);
APIRouterCon.post("/getuserbyregis",user.Getuserbyregis);

app.use('/', APIRouter);

APIRouter.post("/Getdatagallery/:id", api.Getdatagallery);
APIRouter.post("/Getdataproduct", api.Getdataproduct);
APIRouter.post("/Getdataproduct2", api.Getdataproduct2);
APIRouter.post("/Getdataproduct3", api.Getdataproduct3);
APIRouter.post("/Getselectdataproduct/:id", api.Getselectdataproduct);
APIRouter.post("/Getselectdata_type_spa", api.Getselectdata_type_spa);
APIRouter.post("/Getselectdata_type_boat", api.Getselectdata_type_boat);
APIRouter.post("/Getselectdata_type_wedding", api.Getselectdata_type_wedding);
APIRouter.post("/Getselectdata_type_diving", api.Getselectdata_type_diving);
APIRouter.post("/Getselectdata_type_goft", api.Getselectdata_type_goft);
APIRouter.post("/Getselectdata_type_package", api.Getselectdata_type_package);
APIRouter.post("/AddBooking" , api.AddBooking);
APIRouter.post("/AddBookingless" , api.AddBookingless);
APIRouter.post("/Gettime/:id", api.Gettime);
APIRouter.post("/Getproduct_onfront" , api.Getproduct_onfront);
APIRouter.post("/Getproduct_hotel" , api.Getproduct_hotel);
APIRouter.post("/Getgallery_hotel/:id", api.Getgallery_hotel);
APIRouter.post("/Getselect_hotel/:id", api.Getselect_hotel);
APIRouter.post("/Gettransferchange_hotel/:hotel_id/:showtime_id", api.Gettransferchange_hotel);
APIRouter.post("/Getprovince" , api.Getprovince);
APIRouter.post("/Gettransfer_product" , api.Gettransfer_product);
APIRouter.post("/Getcar_product" , api.Getcar_product);
APIRouter.post("/Gettransferplace_hotel/:id", api.Gettransferplace_hotel);
APIRouter.post("/Gettransfer_product_all" , api.Gettransfer_product_all);
APIRouter.post("/Getbooking/:bookid", api.Getbooking);
APIRouter.post("/Get_web_car_capacity/:model" , api.Get_web_car_capacity);
APIRouter.post("/SetData",api.SetData);
APIRouter.post("/SetDatamailAllot",api.SetDatamailAllot);
APIRouter.post("/Gettransferplace",api.Gettransferplace);
APIRouter.post("/Gettransfer_product_byid/:id", api.Gettransfer_product_byid);
APIRouter.post("/Getwebgalleryprovince", api.Getwebgalleryprovince);
APIRouter.post("/Getproduct_type_show", api.Getproduct_type_show);

APIRouter.post("/AddSubtour", api.AddSubtour);
APIRouter.post("/Getproductallotmentseting", api.Getproductallotmentseting);
APIRouter.post("/Getallotment", api.Getallotment);







app.listen(port);
console.log('Listen on port ' + port);
