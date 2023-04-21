//导入express
const express = require('express');

//创建路由
const router = express.Router();

//挂载具体路由

router.get('/user/list', (req, res) => {
    res.send('Get user list');
});

router.get('/user/create', (req, res) => {
    res.send('Add new user');
})

//导出路由对象
module.exports = router;

