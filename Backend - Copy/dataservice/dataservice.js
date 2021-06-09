let mysql = require('mysql');

function GetUser(aResFunction, pUser, pComment){
    let connection = mysql.createConnection({  
        host: 'localhost',
        user: 'warren',
        password: '3224',
        database: 'warren',
    });

    connection.connect(function(err) {
        if (err) {
          return console.error('error: ' + err.message);
        }
      
        console.log('Connected to the MySQL server.');
      });

      let sql = `CALL GetUsers(?,?)`;
      console.log([pUser, pComment]);

      connection.query(sql, [pUser,pComment], (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
        aResFunction(JSON.stringify(results[0]));
      });
      connection.end();
}

exports.GetUsers = GetUsers;
exports.CheckPassword = CheckPassword; 
exports.StoreComment = StoreComment; 
