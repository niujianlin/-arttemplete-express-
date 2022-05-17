const {User} = require('../../model/user')
const bcryptjs = require('bcryptjs');

module.exports = async (req, res, next) => {
    const {username, email, role, state, password} = req.body;
    const id = req.query.id;

    let user = await User.findOne({_id: id})
    // res.send(user);
    let isValid = await bcryptjs.compare(password, user.password);
    if(isValid){
        //密码比对成功
        //将用户信息更新到数据库当中，不需要更新密码
        await User.updateOne({_id: id}, {
            username: username,
            email: email,
            role: role,
            state: state
        })
        //重定向页面
        res.redirect('/admin/user');
    }else {
        // 密码比对失败
        let obj = {path:'/admin/user-edit', message:'密码比对失败，无法进行修改', id: id};
        next(JSON.stringify(obj));
    }
}