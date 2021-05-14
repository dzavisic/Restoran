var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var functions    = require('./functions.js');

var reservation = { 
    sendReservation: (req, res, next) => {
        try{
            if(req.body.fullname && req.body.num_people && req.body.datetime && req.body.tel_numb){
                let reservation = {
                    fullname: req.body.fullname,
                    num_people: req.body.num_people,
                    datetime: req.body.datetime,
                    tel_numb: req.body.tel_numb,
                };
                let query = "insert into reservation SET ?";
                let table = [reservation];
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
    deleteReservation: (req, res, next) => {
        try{
            if(req.body.fullname){
                let query = "delete from reservation where fullname=?";
                let table = req.body.fullname;
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
    getReservations: (req,res,next) => {
        try{
            let query = "SELECT * FROM reservation";
            functions.mysql_queryV2(query, function(dataSent){
                functions.sendRes(res, dataSent);
            });
            
        }catch(err){
            console.log(err);
            functions.sendRes(res,{ success: false, message: 'Error, please check the passed data.', status: 503, data:err});
        }
    }
}

module.exports = reservation;