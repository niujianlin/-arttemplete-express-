const {Article} = require('../../model/article')
const {Comment} = require('../../model/comment')

module.exports = async (req, res) => {
    //获取id
    const id = req.query.id;
    //根据id查询文章详细信息
    let article = await Article.findOne({_id: id}).populate('author')
    let article1 = JSON.stringify(article);
    let article2 = JSON.parse(article1);

    //查询评论信息
    let comments = await Comment.find({aid: id}).populate('uid')
    let comments1 = JSON.stringify(comments);
    let comments2 = JSON.parse(comments1);

    // res.send(comments)
    res.render('home/article', {
        article2: article2,
        comments2: comments2
    })

}