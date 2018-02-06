var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');



router.post('/',function(req, res){

  console.log("IN Encryption ");

	text = JSON.stringify(req.body);
	console.log(typeof text);
//--------------Encryption----------------
	buf1 = new Buffer(text);
	var key1 = buf1.toString('hex');
	console.log("Key 1 is ");
	console.log(key1);

	buf2 = new Buffer(key1);
	var key2 = buf2.toString('hex');
	console.log("Key 2 is ");
	console.log(key2);

	buf3 = new Buffer(key2);
	var key3 = buf3.toString('BASE64');
	console.log("Key 3 is ");
	console.log(key3);

	res.end(JSON.stringify({"data":key3}));


});




module.exports = router;
