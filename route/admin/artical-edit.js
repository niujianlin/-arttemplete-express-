const {Article} = require('../../model/article')

module.exports = async (req, res) => {
    //获取到id参数，判断是添加还是修改
    const{message, id} = req.query;
    if(id){
        //修改文章操作
        //查找
        let article = await Article.findOne({_id: id});
        // res.send(article);
        res.render('admin/article-edit', {
            message: message,
            article: article,
            link: '/admin/article-modify?id=' + id,
            button: '修改'
        })

    }else {
        //添加文章操作
        res.render('admin/article-edit', {
            message: message,
            link: '/admin/article-edit',
            button: '提交'
        });
    }

    req.app.locals.currentLink = 'article'

}