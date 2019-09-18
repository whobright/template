import connection from "../../mysql"
 export function getUser(){
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

  
}
