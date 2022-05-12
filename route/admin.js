const express =  require('express');
//调用用户集合构造函数
const {User} = require('../model/user');
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
admin.post('/login', async (req, res) => {
    // 接收请求参数
    // res.send(req.body);
    //解构出用户email和密码（req.body是通过第三方包badyparser形成的）
    const {email, password} = req.body;
    if (email.trim().length == 0 || password.trim().length == 0){
        //修改状态码
        // return res.status(400).send('<h4>邮件地址或者密码错误</h4>>');
        return res.status(400).render('admin/error', {msg: '邮件地址或密码错误'});
    }
    //如果查询到了用户，user变量的值是对象类型，若没查到则为空
    let user = await User.findOne({email: email});
    if(user){
        if(password == user.password){
            //登录成功
            res.send('登录成功')
        }else {
            res.status(400).render('admin/error', {msg: '邮箱地址或密码错误'})
        }
    } else{
        //没查到用户
        res.status(400).render('admin/error', {msg: '邮箱地址或密码错误'})
    }

})

// 将路由对象作为模块成员进行导出
module.exports = admin;