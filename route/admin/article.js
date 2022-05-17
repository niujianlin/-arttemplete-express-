const {Article} = require('../../model/article')

module.exports = async (req, res) => {
    req.app.locals.currentLink = 'article'
    //查询所有文章数据
    let articles = await Article.find().populate('author');
    // 查找到author对象，但是格式有问题
    let articles1 = JSON.stringify(articles);
    let articles2 = JSON.parse(articles1);

    // res.send(articles);
    res.render('admin/article', {
        articles2: articles2
    })
}