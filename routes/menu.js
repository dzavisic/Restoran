var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var functions    = require('./functions.js');

var menu = {

menuSingle: (req, res, next) => {
    try{
        if(req.body.name){
            let query = "SELECT courses_id as 'Vrsta jela', name as 'Jelo', price as 'Cijena', currency as 'Valuta' FROM menu WHERE name = ?";
            let table = [req.body.name];
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
menuFull: (req, res, next) => {
    try{
        let query = "SELECT m.courses_id as 'Vrsta jela', m.name as 'Jelo', m.price as 'Cijena', m.currency as 'Valuta', c.id as 'Courseid', c.name as 'Naziv' FROM menu AS m INNER JOIN courses AS c ON c.id = m.courses_id;";            
        functions.mysql_queryV2(query,(dataSent)=>{
            functions.sendRes(res, dataSent);
        });
    }catch(err){
        console.log(err);
        functions.sendRes(res,{ success: false, message: 'Error, please check the passed data.', status: 503, data:err});
    }
},
menuAddDish: (req, res, next) => {
    try{
        if(req.body.courses_id && req.body.name && req.body.price && req.body.currency){
            let dish = {
                courses_id: req.body.courses_id,
                name: req.body.name,
                price: req.body.price,
                currency: req.body.currency
            };
            let query = "insert into menu SET ?";
            let table = [dish];
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
menuUpdateSingle: (req, res, next) => {
    try{
        if(req.body.name){
            let dish = {
                name: req.body.name
            };
            let query = "update menu set ? where name = ?";
            let table = [dish];
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
menuDeleteSingle: (req, res, next) => {
    try{
        if(req.body.name){
            let query = "delete from menu where name=?" ;
            let table =  [req.body.name];
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
getAllMenu: (req, res, next) => {
    try{
        let query = "SELECT * FROM menu";            
        functions.mysql_queryV2(query,(dataSent)=>{
            functions.sendRes(res, dataSent);
        });
    }catch(err){
        console.log(err);
        functions.sendRes(res,{ success: false, message: 'Error, please check the passed data.', status: 503, data:err});
    }
}
};

module.exports = menu;