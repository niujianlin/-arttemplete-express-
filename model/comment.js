const mongoose = require('mongoose');

//创建规则
const commentSchema = new mongoose.Schema({
    //文章id
    aid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    },
    // 用户id
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // 评论日期
    time: {
        type: Date
    },
    //评论内容
    content: {
        type: String
    }
})

//创建集合
const Comment = mongoose.model('Comment', commentSchema);

//导出
module.exports = {
    Comment
}