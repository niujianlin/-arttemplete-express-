//引入转换二进制文件
const formidable = require('formidable');
//path
const path = require('path');
//插入数据库数据，构造函数
const {Article} = require('../../model/article');

module.exports = (req, res) => {
    //创建表单解析对象
    const form = new formidable.IncomingForm()
    //上传到服务器那个文件夹
    form.uploadDir = path.join(__dirname, '../', '../', 'public','upload');
    //保留后缀
    // form.keepExtensions = true;
    //解析表单
    form.parse(req, async (err, fields, files) => {
        //1、err是错误信息 2、fields是保存普通表单数据 3、保存上传文件相关数据
        // res.send(files.cover.filepath.split('public')[1]);
        await Article.create({
            title: fields.title,
            author: fields.author,
            publishDate: fields.publishDate,
            cover: files.cover.filepath.split('public')[1],
            content: fields.content
        });
        //将页面重定向到文章列表
        res.redirect('/admin/article');
    })
    // res.send('ok');
}