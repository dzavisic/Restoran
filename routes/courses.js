var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var functions    = require('./functions.js');

var courses = {
    getCourses: function(req, res, next){
        try{
            let query = "SELECT * FROM courses";
            query = mysql.format(query);
            functions.mysql_queryV2(query, function(dataSent){
                functions.sendRes(res, dataSent);
            });
        }catch(err){
            console.log(err);
            functions.sendRes(res,{ success: false, message: 'Error, please check the passed data.', status: 503, data:err});
        }
    },
    removeCourse: (req, res, next) => {
        try{
            if(req.body.id){
                let query = "delete from courses where id=?";
                let table = req.body.id;
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
    addCourse: (req, res, next) => {
        try{
            if(req.body.id && req.body.name){
                let query = "insert into courses SET ? ";
                let table = {
                    id: req.body.id,
                    name: req.body.name
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

module.exports = courses;