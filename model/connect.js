//链接数据库
// 引入mongoose模块
const mongoose = require('mongoose');
//链接数据库
mongoose.connect('mongodb://localhost/blog')
    .then(() => console.log('<数据库链接成功>'))
    .catch(() => console.log('数据库链接失败'))

