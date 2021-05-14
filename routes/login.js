var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var functions    = require('./functions.js');

var login = {
    kitchen: function(req, res, next){
        try{
            if(req.body.chef_id && req.body.password){
                let query = "SELECT * FROM chef WHERE chef_id = ? and password=?";
                let table = [req.body.chef_id, req.body.password];
                query = mysql.format(query, table);
                functions.mysql_queryV2(query, function(dataSent){
                    functions.sendRes(res, dataSent);
                });
            }else{
                functions.sendRes(res,{ success: false, message: 'Error, please check the passed data.', status: 502, data:[]});
            }
        }catch(err){
            console.log(err);
            functions.sendRes(res,{ success: false, message: 'Error, please check the passed data.', status: 503, data:err});
        }
    },
    cms: function(req, res, next){
        try{
            if(req.body.admin_id && req.body.password){
                let query = "SELECT * FROM admin WHERE admin_id = ? and password=?";
                let table = [req.body.admin_id, req.body.password];
                query = mysql.format(query, table);
                functions.mysql_queryV2(query, function(dataSent){
                    functions.sendRes(res, dataSent);
                });
            }else{
                functions.sendRes(res,{ success: false, message: 'Error, please check the passed data.', status: 502, data:[]});
            }
        }catch(err){
            console.log(err);
            functions.sendRes(res,{ success: false, message: 'Error, please check the passed data.', status: 503, data:err});
        }
    }
}

module.exports = login;