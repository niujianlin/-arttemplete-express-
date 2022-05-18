const guard = (req, res, next) => {
    if(req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login');
    }else {
        //用户是登录状态,判断role
        if(req.session.role == 'normal'){
            return res.redirect('/home/')
        }
        next();
    }
}

module.exports = guard;