var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var functions    = require('./functions.js');

var chef = {
    getChefs: function(req, res, next){
        try{
            let query = "SELECT * FROM chef";
            query = mysql.format(query);
            functions.mysql_queryV2(query, function(dataSent){
                functions.sendRes(res, dataSent);
            });
        }catch(err){
            console.log(err);
            functions.sendRes(res,{ success: false, message: 'Error, please check the passed data.', status: 503, data:err});
        }
    },
    removeChef: (req, res, next) => {
        try{
            if(req.body.chef_id){
                let query = "delete from chef where chef_id=?";
                let table = req.body.chef_id;
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
    addChef: (req, res, next) => {
        try{
            if(req.body.chef_id && req.body.password){
                let query = "insert into chef SET ? ";
                let table = {
                    chef_id: req.body.chef_id,
                    password: req.body.password
                }
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

module.exports = chef;