// 라우터 코드 (https://gongbu-ing.tistory.com/40)
// 기본경로 요청시 title json 형식으로 반환
const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");  
const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');

var userInfo = {
    'user1' : {
        ytaddr : 'rERUxENLcfl',
        pw : '4fa210a06f9faa90aadca1a977d784d5d4e95ed4c993a60b2d6c5f0bf5956633'
    }
}


router.get('/', (req, res) => {
    console.log('http://localhost:3001/api/');
    res.send(userInfo);
    //res.send({title: 'hello react!'});
});

// router.get('/userinfo', (req, res) => {
//     console.log('http://localhost:3001/userinfo/');
//     res.send(userInfo);
// });

module.exports = router;