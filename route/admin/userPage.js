//导入用户集合构造函数
const {User} = require('../../model/user');


module.exports = async (req, res) =>{
    req.app.locals.currentLink = 'user'
    //接收客户端传递过来的当前页参数
    let page = req.query.page || 1;
    //每一页显示的数据条数
    let pagesize = 10;
    //查询用户数据总数
    let count = await User.countDocuments({})
    // res.send(page);
    // res.send('用户的总数' + count);
    //总页数（向上取整）
    let total = Math.ceil(count/pagesize);
    // res.send('总页数' + total);

    //页码对应的数据查询开始位置
    let start = (page - 1) * pagesize;
    // 将用户信息从数据库中查询出来
    let users = await User.find({}).limit(pagesize).skip(start);

    res.render('admin/user', {
        msg: req.session.username,
        users: users,
        page: page,
        total: total
    });
}