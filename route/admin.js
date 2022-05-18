const express =  require('express');
//调用用户集合构造函数
const {User} = require('../model/user');
// 创建博客展示页面路由,返回的是路由对象
const admin = express.Router();
//引入加密模块
const bcryptjs = require('bcryptjs')

//二级路由：匹配/login（先匹配/admin，后匹配/login）
// 渲染登录页面
admin.get('/login', require('./admin/loginPage'));
//渲染user页面
admin.get('/user', require('./admin/userPage'))
//提交登录表单
admin.post('/login', require('./admin/login'));
//退出登录
admin.get('/logout', require('./admin/logout'));
//创建用户编辑页面路由
admin.get('/user-edit', require('./admin/user-edit'));
//创建实现用户添加功能路由
admin.post('/user-edit', require('./admin/user-edit-fn'));
//创建用户信息修改路由
admin.post('/user-modify', require('./admin/user-modify'));
//删除用户功能路由
admin.get('/delete', require('./admin/user-delete'));
//文章列表页面路由
admin.get('/article', require('./admin/article'))
//文章编辑页面路由
admin.get('/article-edit', require('./admin/artical-edit'))
//实现文章添加功能路由
admin.post('/article-add', require('./admin/article-add'));
//实现文章修改路由
admin.post('/article-modify', require('./admin/article-modify'));
//删除文章功能路由
admin.get('/article-delete', require('./admin/article-delete'));


// 将路由对象作为模块成员进行导出
module.exports = admin;