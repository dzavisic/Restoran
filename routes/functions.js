var pool     = require('../connection');

var functions = {

sendRes: function(res, data){
    res.json({ success: data.success, message: data.message, status: data.status, data:data.data});
    return 1;
},

mysql_queryV2:function(_query, callback){
    function function1(a, callback){
        
        pool.getConnection(function(err, connection){
            if(err) {
                callback(500, err, 'Connection error!');
            }else{
                connection.query(a,function(err, rows) {
                    connection.release();
                    if(err){
                        callback(501, err, 'Query error');
                    }else{
                        try {
                            if(typeof(rows) == "object"){
                                if(rows.length > 0){
                                    if(rows[0][0]){
                                        //PROCEDURE
                                        callback(true, rows[0], 'Data exists!');
                                    }else{
                                        callback(true, rows, 'Data exists!');
                                    }  
                                }else{
                                    if(rows.insertId >= 0){
                                        //PROCEDURE bez returna i UPDATE, DELETE, INSERT
                                        callback(true, rows,'Successful');
                                    }else{
                                        callback(false, rows,'Data does not exist!');
                                    }
                                }
                            }else{
                                callback(false, rows,'Data does not exist!');
                            }
                        } catch (error) {
                            callback(false, error,'Error while fetching data!');
                        }
                    }                          
                });
            }
        });
    }

    try{
        if(typeof(_query)==='string'){
            function1(_query, function(success, data, message){
                if(success == true){
                    callback({ success: true, message: message, status: success, data:data });
                }else{
                    callback({ success: false, message: message, status: success, data:data });
                }
            });
        }else{
            callback({ success: false, message: 'Query is not sent in good form!', status: 502, data:[] });
        }
    }catch(err){
        console.log(err);
        callback({ success: false, message: 'Error, check the data passed data!', status: 503, data:err });
    }
}
};

module.exports = functions;