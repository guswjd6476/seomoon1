const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  port : '3306',
  database : 'seomoon',
  dateStrings : 'date'
});
 //리스트 전체 불러오기
function getAllMemos(callback){
    connection.query('select * from seomoon ORDER BY id DESC',(err, rows, fields) =>{
    if(err) throw err;
    callback(rows);
    })
}

 //리스트에 새로운 내용 추가하는 함수
function insertMemo(content,title,writer,callback){
    connection.query(`INSERT INTO seomoon(content,created,updated,title,writer) VALUES("${content}",NOW(),NOW(),"${title}","${writer}")`,
    (err,result) =>{
      if(err) throw err;
    callback();
    })
}

 //리스트중 아이디값이 일치하는 row만 불러오는 함수
function getMemoById(id,callback){
  connection.query(`select * from seomoon WHERE id = ${id}`,(err, row, fields) =>{
    if(err) throw err;
    callback(row);
    })
}

 //리스트중 타이틀값이 일치하는 row만 불러오는 함수
 function showMemoById(title,callback){
  connection.query(`select * from seomoon WHERE id = ${title}`,(err, row, fields) =>{
    if(err) throw err;
    callback(ti);
    })
}

//리스트를 수정하고 싶을 때 id값이 일치하는 부분을 수정하는 함수 
function updateMemoById(id,content,title,writer, callback){
  connection.query(`UPDATE seomoon SET CONTENT='${content}', title = '${title}', writer = '${writer}', updated=NOW() WHERE ID=${id}`, (err, result) => {
    if(err) throw err;
    callback();
  })
}


//리스트중 id값이 일치하는 부분을 삭제하는 함수
function deleteMemoById(id, callback){
  
  connection.query(`DELETE FROM seomoon WHERE id = ${id}`,(err, result) =>{
    if(err) throw err;
    callback();
    })
}



    module.exports = {
    getAllMemos,
    insertMemo,
    getMemoById,
    updateMemoById,
    deleteMemoById,
    showMemoById
}

