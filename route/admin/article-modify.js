const {Article} = require('../../model/article');

module.exports = async (req, res) => {
    const body = req.body;
    const id = req.query.id;

    let article = await Article.findOne({_id: id});
    res.send(article);
}