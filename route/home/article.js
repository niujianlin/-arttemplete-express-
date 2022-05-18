const {Article} = require('../../model/article')

module.exports = async (req, res) => {
    //获取id
    const id = req.query.id;
    //根据id查询文章详细信息
    let article = await Article.findOne({_id: id}).populate('author')
    let article1 = JSON.stringify(article);
    let article2 = JSON.parse(article1);

    // res.send(article)
    res.render('home/article', {
        article2: article2
    })

}