let mysql = require('mysql');

function StoreComment(aResFunction, pUser, pComment){
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Warren',
    database:'puppy_love'
  });

  connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
  });

  let sql = `Call StoreComment(?,?)`;
  console.log([pUser,pComment]);
  connection.query(sql, [pUser,pComment], (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results[0]);
    aResFunction(JSON.stringify(results[0]));
  });
  connection.end();
}

function CheckPassword(aResFunction, pUser, pPassword){
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Warren',
    database: 'puppy_love'
  });

  connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
  });

  let sql = `Call CheckPassword(?,?)`;
  console.log([pUser,pPassword]);
  connection.query(sql, [pUser,pPassword], (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results[0]);
    aResFunction(JSON.stringify(results[0]));
  });
  connection.end();
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@TEST  FUNCTION@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function DeletePlayer(aResFunction, pUser){
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Warren',
    database: 'puppy_love'
  });

  let sql = `Call DeletePlayer(?)`;
  connection.query(sql, [pUser], ( results) => {
   
    console.log(results[0]);
    aResFunction(JSON.stringify(results[0]));
  });
  connection.end();
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@TEST  FUNCTION ENDS@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function GetUsers(aResFunction){
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Warren',
        database: 'puppy_love'
    });

    connection.connect(function(err) {
        if (err) {
          return console.error('error: ' + err.message);
        }

        console.log('Connected to the MySQL server.');
      });

      let sql = `CALL GetUsers()`;

      connection.query(sql, true, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
        aResFunction(JSON.stringify(results[0]));
      });
      connection.end();
}
exports.DeletePlayer=DeletePlayer;// Test function for deleting a user
exports.GetUsers = GetUsers;
exports.CheckPassword = CheckPassword;
exports.StoreComment = StoreComment;
