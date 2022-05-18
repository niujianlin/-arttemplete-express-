const express =  require('express');

// 创建博客展示页面路由,返回的是路由对象
const home = express.Router();

//博客前台首页
home.get('/', require('./home/index'));
//博客文章详情
home.get('/article', require('./home/article'));
//创建评论路由
home.post('/comment', require('./home/comment'))

// 将路由对象作为模块成员进行导出
module.exports = home;