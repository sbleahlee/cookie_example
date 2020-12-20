// 라우터 코드 (https://gongbu-ing.tistory.com/40)
// 기본경로 요청시 title json 형식으로 반환
const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");  
const index_data = require("./index.js");
const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');

var userInfo = index_data.userInfo;


router.get('/userinfo', (req, res) => {
    console.log('http://localhost:3001/userinfo/');
    res.send(userInfo);
});

module.exports = router;