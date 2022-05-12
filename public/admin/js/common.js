function serializeToJson(form) {
    // 空对象准备存放表单信息，方便后续验证
    var result = {};
    // jQuery提供的方法：获取到表单中用户输入的内容，用对象接收
    //例子：[{name: 'email',value: '用户输入的内容'}]
    //this是当前登录表单
    var f = form.serializeArray();
    f.forEach(function (item) {
        // result {email: 'xxx'}
        result[item.name] = item.value;
    });
    return result;
}