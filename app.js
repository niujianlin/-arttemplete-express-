// 导入express框架
const express =  require('express');
//创建网站服务器
const app = express();
//PATH
const path = require('path');
//引入模块，用于处理post请求参数
const bodyParser = require('body-parser');
//数据库链接(require在导入模块的时候会执行文件)
require('./model/connect');
// require('./model/user');引入是为了得到初始化的用户数据
// require('./model/user');
//引入express-session模块
const session = require('express-session');

// 拦截所有请求处理post请求参数，extended：false用系统模块处理，TRUE用第三方
app.use(bodyParser.urlencoded({extended: false}))

//配置session
app.use(session({
            secret: 'secret key',
            resave: false, //true: 每次请求都要重新设置session
            saveUninitialized: false, //true: 每次请求默认设置session Cookie，不管有没有保存session
        })
)

//告诉express模板位置在哪里
app.set('views', path.join(__dirname, 'views'));
//告诉express默认模板后缀是什么
app.set('view engine', 'art');
//当渲染后缀为art的模板时，所使用的模板引擎是什么
app.engine('art', require('express-art-template'));
//框架系统开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')));

//导入路由对象
const home = require('./route/home')
const admin = require('./route/admin')

//拦截请求，判断用户登录状态
app.use('/admin', require('./middleware/loginGuard'));

//一级路由
app.use('/home', home);
app.use('/admin', admin);

//触发错误处理中间件
app.use((err, req, res, next) => {
    //将字符串对象转换成对象类型
    //JSON.parse()
    const result = JSON.parse(err);
    res.redirect(`${result.path}?message=${result.message}`);
})

//监听80端口
app.listen(80);
console.log('<网站服务器启动成功>');