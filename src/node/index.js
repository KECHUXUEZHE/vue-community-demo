var express = require("express")
var app = express()
var bodyParser = require("body-parser")
// 文件数据
app.use(bodyParser.json())
// 表单数据
app.use(bodyParser.urlencoded({
    extended: false
}));
var mysql = require("mysql")
var cors = require('cors')
app.use(cors())
// 连接数据库
var client = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '061626',
    database: 'community'
});

// 检验服务器是否连接成功
client.connect(function (err) {
    if (err) throw err;
    console.log("连接数据库成功");
})

// 后端服务器响应端
app.listen(3001, function () {
    console.log('服务器运行在http://127.0.0.1:3001');
});

// 连接主页
app.post('/home', function (req, res) {
    res.send()
})

// 连接注册页面
// 增加操作
app.post('/register', function (req, res) {
    let body = req.body;
    // console.log(body);
    let addSe1 = 'insert into manager values(?,?,?,?,?,?,?,?,?,?)';
    let addDa1 = [body.userNumber, body.userName, body.userPassword, body.surePassword, body.userProfession, body.userSex, body.userData, body.userArea, body.userPerson, body.userPhone];
    client.query(addSe1, addDa1, function (err, results) {
        // console.log(results);
        // res.redirect('/login'); // 返回登录页面
        res.send(results)
    })
})

// 连接管理员登录页面
app.post('/managerlogin', function (req, res) {
    res.send();
})
// 管理员登录
app.post('/managerlogin', function (req, res) {
    let body = req.body;
    // console.log(body);
    client.query('select * from manager where userName=? and userPassword=?', [body.userName, body.userPassword], function (err, results) {
        // res.send()
    })
})
// 进入管理员中心
app.post('/center', function (req, res) {
    let userName = req.body.userName;
    // console.log(req.body);
    client.query("select * from manager where userName=?", [userName], function (err, results) {
        // console.log(results);
        res.send()
    })
})


// 连接管理员页面
// 查询操作
app.get('/manager', function (req, res) {
    // let userName = req.body.route;
    // console.log(req.body);
    // client.query('select * from manager where userName=?',[userName],function(err,results){
    client.query('select * from manager ', function (err, results) {
        // console.log(resutls)
        res.send(results)
    })
});
// 修改操作
app.post('/managerupdate', function (req, res) {
    let body = req.body;
    // console.log(body,'87----');
    // console.log(body.obj.userNumber)
    client.query('update manager set userNumber=?,userName=?,userProfession=?,userSex=?,userData=?,userArea=?,userPerson=?,userPhone=? where userNumber=?',
        [body.userNumber,body.userName,body.userProfession,body.userSex,body.userData,body.userArea,body.userPerson,body.userPhone,body.userNumber],
        function (err, results) {
            // console.log(err);
            // console.log(results);
            res.send(results)
        })
})
// 删除操作
app.post('/managerdelete',function(req,res){
    var userNumber = req.body.userNumber;
    console.log(userNumber);
    client.query('delete from manager where userNumber=?',
        [userNumber],
        function(err,results){
            client.query('select * from manager ',function(err,result){
                res.send(result)
            })
            // console.log(err);
            // console.log(results);
            // res.send();
    })
})

// 管理员物业费管理页面
// 物业费增加操作
app.post('/managercheckadd',function(req,res){
    let body = req.body;
    client.query('insert into propertys values(?,?,?,?,?,?,?,?,?)',
        [body.userNumber,body.userName,body.quota,body.time,body.property,body.parking,body.other,body.all1,body.paid],
        function(err,results){
            res.send(results);
        })
})
// 物业费查询操作
app.get('/managercheck', function (req, res) {
    // console.log(req.body);
    client.query('select * from propertys', function (err, results) {
        res.send(results)
    })
});
// 物业费修改操作
app.post('/managercheckupdate',function(req,res){
    let body = req.body;
    console.log(body);
    console.log(body.userNumber);
    client.query('update propertys set userNumber=?,userName=?,quota=?,time=?,property=?,parking=?,other=?,all1=?,paid=? where userNumber=?',
    [body.userNumber,body.userName,body.quota,body.time,body.property,body.parking,body.other,body.all1,body.paid,body.userNumber],
        function(err,result){
            console.log(err);
            console.log(result);
            res.send(result);
        })
})
// 物业费删除操作
app.post('/managercheckdelete',function(req,res){
    var userNumber = req.body.userNumber;
    client.query('delete from propertys where userNumber=?',
        [userNumber],
        function(err,results){
            client.query('select * from propertys ',function(err,result){
                res.send(result);
            })
        })
})

// 管理员留言板管理页面
// 查询操作
app.get('/managerboard',function(req,res){
    client.query('select * from board',function(err,results){
        res.send(results);
    })
})
// 删除操作
app.post('/managerboarddelete',function(req,res){
    var userName = req.body.userName;
    client.query('delete from board where userName=?',
        [userName],
        function(err,results){
            client.query('select * from board ',function(err,result){
                res.send(result);
            })
        })
})


// 连接登录页面
app.post('/personlogin', function (req, res) {
    res.send()
})
// 业主登录
app.post('/personlogin', function (req, res) {
    let body = req.body;
    // console.log(body);
    client.query('select * from manager where userName=? and userPassword=?', [body.userName, body.userPassword], function (err, results) {
    })
})
// 业主进入个人中心
app.post('/person', function (req, res) {
    let userName = req.body.userName;
    // console.log(req.body);
    client.query("select * from manager where userName=?", [userName], function (err, results) {
        // console.log(results);
        res.send()
    })
})
// 业主进入个人信息维护
app.post('/owner', function (req, res) {
    let userName = req.body.route;
    // console.log(req.body);
    client.query("select * from manager where userName=?", [userName], function (err, results) {
        // console.log(results);
        res.send(results[0])
    })

})
// 业主个人信息修改
app.post('/ownerupdate', function (req, res) {
    let body = req.body;
    let userName = body.route;
    // console.log(req.body);
    client.query("update manager set userNumber=?,userName=?,userProfession=?,userSex=?,userData=?,userArea=?,userPerson=?,userPhone=? where userName=?",
        [body.obj.userNumber, body.obj.userName, body.obj.userProfession, body.obj.userSex, body.obj.userData, body.obj.userArea, body.obj.userPerson, body.obj.userPhone, userName],
        function (err, results) {
            // console.log(results);
            res.send(results)
        })
})
// 业主查看物业费
app.post("/personcheck", function (req, res) {
    let userName = req.body.route;
    // console.log(req.body);
    client.query("select * from propertys where userName=?", [userName], function (err, results) {
        // console.log(results);
        res.send(results[0])
    })
})
// 业主进入社区留言板
// 查询操作
app.get('/personboard',function(req,res){
    client.query('select * from board',function(err,results){
        res.send(results);
    })
})
// 添加操作
app.post('/personboardadd',function(req,res){
    let body = req.body;
    console.log(body,'236----');
    client.query('insert into board values(null,?,?,?)',
        [body.userName,body.message,body.date],
        function(err,results){
            client.query('select * from board',function(err,result){
                console.log(err,'241---');
                console.log(result,'242----');
                res.send(result);
            })
        })
})