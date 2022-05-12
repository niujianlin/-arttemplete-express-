const express =  require('express');

// 创建博客展示页面路由,返回的是路由对象
const admin = express.Router();

//二级路由：匹配/login（先匹配/admin，后匹配/login）
admin.get('/login', (req, res) => {
    // res.writeHead(200, {
    //     'content-type': 'text/html;charset=utf8'
    // })
    res.render('admin/login');
});
admin.get('/user', (req, res) =>{
    res.render('admin/user');
})

// 将路由对象作为模块成员进行导出
module.exports = admin;