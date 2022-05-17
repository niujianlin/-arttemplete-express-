//引入mongoose
const mongoose = require('mongoose')

//创建集合规则
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        maxLength: 20,
        minLength: 4,
        required: [true, '错误信息：请填写文章标题']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, '请传递作者']
    },
    publishDate: {
        type: Date,
        default: Date.now()
    },
    cover: {
        type: String,
        default: null
    },
    content: {
        type: String
    }

})

// 创建文章集合
const Article = mongoose.model('Article', articleSchema);

// 导出模块
module.exports = {
    Article
}