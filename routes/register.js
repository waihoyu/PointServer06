var express = require('express');
var router = express.Router();
var db = require('../model/db')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log(req.query)
  let inform = req.query;
  // let inform2 = req.body.params
  let username = inform.newusername
  let password = inform.newpassword
  let newuserSQL = "insert into users(user_id,user_name,user_password) VALUES (" + '"'+ "1001" + '"' + ","+ '"' + username + '"'+ ","+ '"'+password+'"'+")";
  // console.log(newuserSQL)
  let conn = db.connection();
  db.insert(conn,newuserSQL,"",function(resx){
    console.log(resx.affectedRows)
    if(resx.affectedRows> 0){
      res.send({
        state:"success",
        message:"注册成功"
      });
    }
  });
  db.close(conn)


  
});

module.exports = router;










