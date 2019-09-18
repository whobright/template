const mysql  = require('mysql');
let connection = mysql.createConnection({
    host     : '104.225.154.189',
    user     : 'root',
    password : 'Hl=123456',
    port: '3306',
    database: 'template'
});


//connection.connect();

let  sql = 'SELECT * FROM user';
connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});
connection.end();
//export default result;


// //查
//  function getUser(){
//     connection.query(sql,function (err, result) {
//         if(err){
//             console.log('[SELECT ERROR] - ',err.message);
//             return;
//         }
    
//         console.log('--------------------------SELECT----------------------------');
//         console.log(result);
//         console.log('------------------------------------------------------------\n\n');
//     });
//     connection.end();

  
// }


