//链接数据库
// 引入mongoose模块
const mongoose = require('mongoose');
//引入全局配置信息
const config = require('config');

//链接数据库
// mongoose.connect(`mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`)
//     .then(() => console.log('<数据库链接成功>'))
//     .catch(() => console.log('数据库链接失败'))

mongoose.connect(`mongodb://localhost/blog`)
    .then(() => console.log('<数据库链接成功>'))
    .catch(() => console.log('数据库链接失败'))

