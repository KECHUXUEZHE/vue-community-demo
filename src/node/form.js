var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.use(bodyParser.json())
var mysql = require("mysql")
var cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({
    extended:false
}));
var client = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'061626',
    database:'community'
});
client.connect(function(err){
    if(err) throw err;
    console.log("连接数据库成功");
})

app.listen(3001,function(){
    console.log('服务器运行在http://127.0.0.1:3001');
});

// 连接登录页面
app.post('/login',function(req,res){
        res.send(data.toString())
})

// 连接注册页面
// 增加操作
app.post('/register',function(req,res){
    var body = req.body;
    // console.log(body);
    var addSe1 = 'insert into manager values(?,?,?,?,?,?,?,?,?,?)';
    var addDa1 = [body.userNumber,body.userName,body.userPassword,body.surePassword,body.userProfession,body.userSex,body.userData,body.userArea,body.userPerson,body.userPhone];
    client.query(addSe1,addDa1,function(err,results){
        // console.log(results);
        // res.redirect('/login'); // 返回登录页面
    })
})

// 业主登录
// app.get('/',function(req,res){
//     let body = req.body;
//     console.log(body);
//     client.query('select * from manager where userName=? and userPassword=?',[body.userName,body.userPassword],function(err,results){
//         console.log(results[0]);
//         if(body.userPassword == results[0].userPassword)
//             res.redirect('/person')
//     })
// })
// app.get('/person',function(req,res){
//     var userName = req.query.userName;
//     client.query("select * from manager where userName=?",[userName],function(err,results){
//         fs.readFile('person.html',function(err,file){
//             res.send(ejs.render(file.toString(),{data:results}))
//         })
//     })
// })
// app.post('/person',function(req,res){
//     fs.readFile('person.html',"utf-8",function(err,data){
//         res.send(data);
//     })
// })

// 连接管理员页面
// 查询操作
// app.post('/manager',function(req,res){
//     console.log(req.body);
//     client.query('select * from manager',function(err,results){
//         res.send(results)
//     })
// });

// // 修改操作
// app.get('/updatebyuserNumber/:myuserNumber',function(req,res){
//     var userNumber = req.params.myuserNumber;
//     client.query("select * from manager where userNumber=?",[userNumber],function(err,results){
//         // console.log(results);
//         fs.readFile('managerupdate.html',function(err,file){
//             res.send(ejs.render(file.toString(),{data:results[0]}))
//         })
//     })
// })

// app.post('/update',function(req,res){
//     var body = req.body;
//     // console.log(body);
//     var upSe1 = 'update manager set userName=?,userProfession=?,userSex=?,userData=?,userArea=?,userPerson=?,userPhone=? where userNumber=?';
//     var upSe2 = [body.userName,body.userProfession,body.userSex,body.userData,body.userArea,body.userPerson,body.userPhone,body.userNumber];
//     client.query(upSe1,upSe2,function(err,results){
//         // console.log(results);
//         res.redirect('/manager') // 返回管理员页面
//     })
// })

// // 删除操作
// app.get('/deletebyuserNumber',function(req,res){
//     var userNumber = req.query.myuserNumber;
//     // console.log(userNumber);
//     client.query('delete from manager where userNumber=?',[userNumber],function(err,results){
//         res.redirect('/manager') // 返回管理员页面
//     })
// })



// // 连接个人中心页面
// app.get('/person',function(req,res){
//     fs.readFile('person.html','utf-8',function(err,data){
//         res.send(data);
//     })
// })

// // 连接个人信息管理
// app.get('/owner/:myuserNumber',function(req,res){
//     var userNumber = req.params.myuserNumber;
//     client.query("select * from manager where userNumber=?",[userNumber],function(err,results){
//         fs.readFile('owner.html',function(err,file){
//             res.send(ejs.render(file.toString()),{data:results[0]})
//         })
//     })
// })

// app.post('/owner',function(req,res){
//     var body = req.body;
//     var upSe1 = 'update manager set userName=?,userProfession=?,userSex=?,userData=?,userArea=?,userPerson=?,userPhone=? where userNumber=?';
//     var upSe2 = [body.userName,body.userProfession,body.userSex,body.userData,body.userArea,body.userPerson,body.userPhone,body.userNumber];
//     client.query(upSe1,upSe2,function(err,results){
//         res.redirect('/owner') 
//     })
// })

// // 查询物业管理费
// app.get('/mangercheck',function(req,res){
//     fs.readFile('check.html','utf-8',function(err,data){
//         client.query('select * from propertys',function(err,results){
//             res.send(ejs.render(data,{
//                 data: results
//             }))
//         })
//     })
// });