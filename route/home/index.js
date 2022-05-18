const  {Article} = require('../../model/article')
//导入分页模块
const pagination = require('mongoose-sex-page');


module.exports = async (req, res) => {
    //接收传递过来的页码
    let page = req.query.page;

    //从数据库中查询数据
    let result = await pagination(Article).page(page).size(4).display(5).find().populate('author').exec();
    let result1 = JSON.stringify(result);
    let result2 = JSON.parse(result1);
    // res.send(result);

    res.render('home/default', {
        result2: result2
    })

}