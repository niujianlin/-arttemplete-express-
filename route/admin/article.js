// 将文章集合的构造函数导入
const {Article} = require('../../model/article')
//引入分页模块
const pagination = require('mongoose-sex-page')

module.exports = async (req, res) => {
    //接受客户端发送的页码
    const page = req.query.page;

    req.app.locals.currentLink = 'article'
    //查询所有文章数据,
    //page当前页  size每页显示的数据  display显示页码数量  exec向数据库中发送请求
    let articles = await pagination(Article).find().page(page).size(2).display(3).populate('author').exec();
    // 查找到author对象，但是格式有问题
    let articles1 = JSON.stringify(articles);
    let articles2 = JSON.parse(articles1);

    // res.send(articles);
    res.render('admin/article', {
        articles2: articles2
    })
}