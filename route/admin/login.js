//调用用户集合构造函数
const {User} = require('../../model/user');
//引入加密模块
const bcryptjs = require('bcryptjs');

module.exports = async (req, res) => {
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
        let isValid = bcryptjs.compareSync(password, user.password);
        if(isValid){
            req.session.username = user.username;
            //登录成功
            //公共属性
            req.app.locals.userInfo = user;
            //重定向到用户列表页面,前面加/，代表是localhost后面直接写admin/user
            res.redirect('/admin/user');
        }else {
            res.status(400).render('admin/error', {msg: '邮箱地址或密码错误'})
        }
    } else{
        //没查到用户
        res.status(400).render('admin/error', {msg: '邮箱地址或密码错误'})
    }

}