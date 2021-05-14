var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var functions    = require('./functions.js');

var client = { 
    placeClient: (req, res, next) => {
        try{
            if(req.body.order_id && req.body.name && req.body.surname && req.body.address && req.body.ad_number && req.body.place && req.body.tel_numb && req.body.datetime){
                let client = {
                    order_id: req.body.order_id,
                    name: req.body.name,
                    surname: req.body.surname,
                    address: req.body.address,
                    ad_number: req.body.ad_number,
                    place: req.body.place,
                    tel_numb: req.body.tel_numb,
                    datetime: req.body.datetime
                };
                let query = "insert into client SET ?";
                let table = [client];
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
    deleteClient: (req, res, next) => {
        try{
            if(req.body.order_id){
                let query = "delete from client where order_id=?";
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
    getClients: (req,res,next) => {
        try{
            let query = "SELECT * FROM client";
            functions.mysql_queryV2(query, function(dataSent){
                functions.sendRes(res, dataSent);
            });
            
        }catch(err){
            console.log(err);
            functions.sendRes(res,{ success: false, message: 'Error, please check the passed data.', status: 503, data:err});
        }
    }
}

module.exports = client;