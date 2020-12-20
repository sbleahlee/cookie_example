const express = require("express");  
const bodyParser = require("body-parser");  
const fs = require("fs");
const cookieParser = require('cookie-parser');
const app = express();  
const sha256 = require('js-sha256');

  
app.use(bodyParser.urlencoded({ extended:  false  }));  
app.use(bodyParser.json()); 
app.use(cookieParser()); 
  

var userInfo = {
    "user1" : {
        upw : 'pw1',
        ytaddr : 'FWC0kMnZ0EA'
    }
}

var sessions = {}


function checkData(name, pw, url){
    console.log('checkData');
    console.log(name, '/', pw, '/', url );
    console.log(Boolean(name), '/', Boolean(pw), '/', Boolean(url) );
    var msg ;

    if(!name|name===''|!pw|pw===''){
        msg = '유저명과 비밀번호는 필수';
        return msg; //유저명과 비밀번호는 필수
    }
    
    //암호화를 시켜보자
    var npw = sha256(pw);


    if (userInfo.hasOwnProperty(name)){             
        if(npw !== userInfo[name].pw){
            msg = '비밀번호 틀림';
            return msg; // 비밀번호 틀렸음
        } 

        if(!url||url[0]===''){
            if(userInfo[name].ytaddr===''||!userInfo[name].ytaddr){
                msg = '저장된 URL도 없고 신규저장도 없고';
            return msg;
            }


        }else if(url[url.length-1] === userInfo[name].ytaddr){
            msg = '저장된 URL이나 이거나 똑같스';
            return msg; // 저장된 값이나 이거나 똑같
        }else{
            userInfo[name].ytaddr = url[url.length-1]; //기존url업데이트
        }
    }    else{ 
            if(!url||url[0]===''){
                msg = '유저명 입력했는데 URL이 없네요';
                return msg; //유저명입력했는데 URL은 없어..
            }
            //신규저장
            userInfo[name]= {
            "ytaddr" : url[url.length-1],
            "pw" : npw
            }    
        }
}

app.get('/',function (req,res) {      

    var name = 'guest';
    var youtubeAddr = 'https://www.youtube.com/embed/v64KOxKVLVg';
    var pw = '';

    if(req.cookies.uname){
        name = req.cookies.uname;
        //pw = req.cookies.upw;

        const targetsession = req.cookies.loginInfo;

        if (sessions[name] == targetsession){
            console.log('session');
            userInfo.forEach(el => {
                youtubeAddr = el.youtubeAddr;
            })
        }
        
        if(userInfo[name])
            youtubeAddr = 'https://www.youtu.be'+userInfo[name];

    }       

    fs.readFile(__dirname + '/view/index.html', 'UTF-8',
         (err, data) => {
            var conv_data = data.replace(/#name#/g, name).replace(/#youtubeAddr#/g, youtubeAddr).replace(/#pw#/g, pw);
            //console.log(data);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(conv_data);
            res.end();
        }
    )
 
});  

app.get('/userinfo',function (req,res) {  

    var inname = req.query.uname;
    var inpw = req.query.upw;
    var inurl = req.query.youtube_addr.split('/');

    var checkMsg = checkData(inname, inpw, inurl);

    // if(!userInfo[inname]){
    //     console.log('입력값에 대한 userInfo가 없다는 뜻');
    //     res.redirect('/');
    //     return;
    // }

    if(checkMsg){
        console.log(checkMsg);
        const session = sha256(inname,inurl);
        sessions[inname] = session;

        res.redirect('/');
        return;
    }
    
    res.cookie('uname', inname,{
        maxAge:1000000
     });

    res.cookie('loginInfo', sessions,{
        maxAge:1000000
     });

    // res.cookie('upw', req.query.upw,{
    //     maxAge:1000000
    //  });     
   
   
    res.redirect('/');  
    console.log('userInfo : ', userInfo);
});



//removecookie
app.get('/removecookie',function (req,res) {  
    console.log('removecookie')
    res.clearCookie('uname');
    //res.clearCookie('upw');
    res.clearCookie('loginInfo');
    res.redirect('/');  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});