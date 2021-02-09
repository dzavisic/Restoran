var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection.js');
var functions   = require('./functions.js');
var passwordHash = require('password-hash');

var users = {
    
userLogin: (req, res, next)=>{
    var user_login = req.body.username;
    var password_login = req.body.password;
    pool.getConnection(function(err, connection) {
    if (err) throw err;
    connection.query('SELECT * FROM users WHERE username = ?', [user_login], function(err, results) {
        if(results[0] && passwordHash.verify(password_login, results[0].password)) {
            data = {
                success: true,
                message: "Valid credentials",
                status: 200,
                data: results[0]
            }
            functions.sendRes(res, data);
        } else {
            data = {
                success: false,
                message: "Invalid credentials",
                status: 500,
                data: results[0]
            }
            functions.sendRes(res, data);
        }
        });
    })
},

userRegister: async (req, res, next) => {
    try{
        if(req.body.username && req.body.password && req.body.name && req.body.surname && req.body.street_adress && req.body.city && req.body.email && req.body.tel_num){
            const hashedPassowrd = passwordHash.generate(req.body.password);
            let users1 = {
                username: req.body.username,
                password: hashedPassowrd,
                name: req.body.name,
                surname: req.body.surname,
                street_adress: req.body.street_adress,
                city: req.body.city,
                email: req.body.email,
                tel_num: req.body.tel_num
                
            };
            let query = "insert into users SET ?";
            let table = [users1];
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


module.exports = users;