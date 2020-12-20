//서버생성코드 (https://gongbu-ing.tistory.com/40)
//포트번호 3001 할당
//'/api' 경로 요청 라우팅
const express = require('express');
const app = express();
const api = require('./routes/index');
const userinfo = require('./routes/userinfo');
const port = process.env.PORT || 3001;

app.use('/api', api);
app.use('/userinfo', userinfo);

app.listen(port, ()=>{console.log('Node.js Server is running on port ${port}')});