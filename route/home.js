const express =  require('express');

// 创建博客展示页面路由,返回的是路由对象
const home = express.Router();

home.get('/', (req, res) => {
    // res.writeHead(200, {
    //     'content-type': 'text/html;charset=utf8'
    // })
    res.send('欢迎来到博客首页')
});

// 将路由对象作为模块成员进行导出
module.exports = home;