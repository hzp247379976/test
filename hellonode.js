var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Wilddog = require("wilddog");
var ref = new Wilddog("https://jiejiegao.wilddogio.com/");
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/register', urlencodedParser, function (req, res) {

   ref.createUser({email:"Loki@asgard.com",password:"examplepassword"},
    function(err,data){
    if(err!=null){
      //not success
     错误
    } else {
      //create user success
      成功
    }
  });
   // 输出 JSON 格式
   response = {
       Name:req.body.Name,
       Pass:req.body.Pass
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
