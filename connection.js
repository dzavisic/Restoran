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
        host: 'ec2-54-197-100-79.compute-1.amazonaws.com',
        user: 'rwxddavdkccaps',
        password: '80fe225b246b145a51a290c90a7f15509b4cd8b8d0b43512425059f98636e3b3',
        database: 'd6of9dhpvq06f8'
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