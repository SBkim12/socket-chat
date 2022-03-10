// mariaDB연결
const maria = require('mysql');
const conn = maria.createConnection({ 
  host :'localhost', //db ip address 
  port : 3306, //db port number 
  user : 'root', //db id 
  password : '1234', //db password 
  database:'TEST_DB' //db schema name 
});

module.exports = conn;