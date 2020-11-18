import express from 'express';
const app = express();
// const cors = require('cors');
import { json } from 'body-parser';
const port =process.env.PORT || 3001;
//서버쪽에 더많은 api를 만들기위해 server.js 에 route 를 적용
import route from './routes/index';

// app.use(cors());

app.use(json());
////서버단에서 Username 받아오기
// app.use('/api', (req, res)=> res.json({username:'bryan'}));

// /api 로 오는것은 route 에서 처리하도록 하고 /api/ 다음으로 뒤에 오는것을 index.js router.get('/',...)에서 정의
//https://hello-bryan.tistory.com/122
app.use('/api', route); 

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})