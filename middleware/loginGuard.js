const guard = (req, res, next) => {
    if(req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login');
    }else {
        //用户是登录状态，将请求放行
        next();
    }
}

module.exports = guard;