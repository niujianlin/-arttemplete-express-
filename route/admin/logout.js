module.exports = (req, res) => {
    req.session.destroy(function () {
        //删除cookie
        res.clearCookie('connect.sid');
        //重定向到登录界面
        res.redirect('/admin/login');
    })
}