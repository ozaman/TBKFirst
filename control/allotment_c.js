var allotment = require('../model/allotment_m.js');
var fs = require('fs');



function getAllotmantByIdProduct(req,res){
    console.log("in controlor getallot by id")
    allotment.GetAllotmantByIdProduct(res,req
        ,function (res, err){
            res.end(JSON.stringify({status:"err", data:err}));
        },
        function (res, result){            
            res.end(JSON.stringify({status:"ok", data:result}));
        });
}
function updateAllotmant(req,res){

    allotment.UpdateAllotmant(res,req
        ,function (res, err){
            res.end(JSON.stringify({status:"err", data:err}));
        },
        function (res, result){            
            res.end(JSON.stringify({status:"ok", data:result}));
        });
}
function updateAllotmantless(req,res){

    allotment.UpdateAllotmantless(res,req
        ,function (res, err){
            res.end(JSON.stringify({status:"err", data:err}));
        },
        function (res, result){            
            res.end(JSON.stringify({status:"ok", data:result}));
        });
}

module.exports = {
	GetAllotmantByIdProduct : getAllotmantByIdProduct,
	UpdateAllotmant : updateAllotmant,
	UpdateAllotmantless : updateAllotmantless
};