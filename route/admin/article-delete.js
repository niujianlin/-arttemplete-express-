const {Article} = require('../../model/article');

module.exports = async (req, res) => {
    //为啥能取到？？？？
    //  res.send(req.query.id);

     //根据id删除用户
    await Article.findOneAndDelete({_id:req.query.id});
    res.redirect('/admin/article');
}