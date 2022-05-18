const {Comment} = require('../../model/comment')
module.exports = async (req, res) => {
    //uid用户号  aid文章号
    const {content, uid, aid} = req.body;
    //接受评论信息
    // res.send(req.body);
    await Comment.create({
        content: content,
        uid: uid,
        aid: aid,
        time: new Date()
    })
    res.redirect('/home/article?id=' + aid)
}