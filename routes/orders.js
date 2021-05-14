var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var functions    = require('./functions.js');

var orders = { 
    placeOrders: (req, res, next) => {
        try{
            if(req.body.order_id && req.body.name && req.body.portions){
                let order = {
                    order_id: req.body.order_id,
                    name: req.body.name,
                    portions: req.body.portions
                };
                let query = "insert into orders SET ?";
                let table = [order];
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
    deleteOrder: (req, res, next) => {
        try{
            if(req.body.order_id){
                let query = "delete from orders where order_id=?";
                let table = req.body.order_id;
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
    getOrders: (req,res,next) => {
        try{
            let query = "SELECT * FROM orders";
            functions.mysql_queryV2(query, function(dataSent){
                functions.sendRes(res, dataSent);
            });
            
        }catch(err){
            console.log(err);
            functions.sendRes(res,{ success: false, message: 'Error, please check the passed data.', status: 503, data:err});
        }
    },
    getOrder: (req,res,next) => {
        try{
            if(req.body.order_id){
                let query = "select * from orders where order_id=?";
                let table = [req.body.order_id];
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

module.exports = orders;