//引入joi模块
const Joi = require('joi');
//引用用户集合
const {User, validateUser} = require('../../model/user');
//引入加密模块
const bcryptjs = require('bcryptjs');

module.exports = async (req, res, next) => {
    //接受客户端传来的post请求表单

    // 实施验证
    try{
        await validateUser(req.body)
    }catch (e) {
        //验证未通过
        // console.log(e.message);
        // res.redirect(`/admin/user-edit?message=${e.message}`);
        //JSON.stringify()将对象类型转换为字符串数据类型
        return next(JSON.stringify({path: '/admin/user-edit', message: e.message}))
    }
    //查询用户是否存在
    let user = await User.findOne({email: req.body.email})
    //如果用户已经存在，邮箱地址已经被别人占用
    if(user) {
        //重定向回用户添加页面
        // return res.redirect(`/admin/user-edit?message=邮箱地址已经被占用`);
        return next(JSON.stringify({path:'/admin/user-edit', message: '邮箱地址已经被占用'}))

    }
    // 创建新用户
    // res.send(user);
    const hashpsw = bcryptjs.hashSync(req.body.password, 10);
    req.body.password = hashpsw;
    // res.send(req.body.password);
    // 将用户信息添加到数据库中
    await User.create(req.body);
    //重定向用户列表页面
    res.redirect('/admin/user');
}