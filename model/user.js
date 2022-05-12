//创建用户集合
const mongoose = require('mongoose');

//创建用户集合规则
const userSchema =  new mongoose.Schema({
    username: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        //保证邮箱地址不重复
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    state: {
        type: Number,
        // 如果字段是0，是启用状态
        default: 0
    }
})
//创建集合
const User = mongoose.model('User', userSchema);
//创建一些数据，第一次导入初始化数据用的
// User.create({
//     username: 'niujl',
//     email: '123@qq.com',
//     password: '123456',
//     role: 'admin',
//     state: 0
// }).then(() => console.log('用户创建成功！')).catch(() => console.log('用户创建失败！'));

module.exports = {
    // User: User;与下面一样
    User
}

