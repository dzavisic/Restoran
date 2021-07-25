var mysql = require('mysql');

function Connection() {
  this.pool = null;

  // 0 - localhost baza
  // 1 (ili bilo koja vrijednost) - baza 115
  //var online = 1;
  var online=1;
  if(online){
    this.init = function() {
      this.pool = mysql.createPool({
        connectionLimit: 250, // privremeno jer blokira slanje zahtjeva na APi nakon toliko puta (mozda je problem u proceduri)
        host: 'us-cdbr-east-04.cleardb.com',
        user: 'b9093c227cdee3',
        password: '80377429',
        database: 'heroku_69a648c47ac2ee7'
      });
    };
  }else{
    this.init = function() {
      this.pool = mysql.createPool({
        connectionLimit: 250, // privremeno jer blokira slanje zahtjeva na APi nakon toliko puta (mozda je problem u proceduri)
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'restoran'
      });
    };
    console.log('Database connection successfull.');
  }

  this.getConnection = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
    });
  };
  
  let query = ( sql, values ) => {

    return new Promise(( resolve, reject ) => {
     pool.getConnection( (err, connection) => {
      if (err) {
       reject( err )
      } else {
       connection.query(sql, values, ( err, rows) => {
        if ( err ) {
         reject( err )
        } else {
         resolve( rows )
        }
        connection.release()
       })
      }
     })
    })
   
   }
}

module.exports = new Connection();