const express = require("express");  
const bodyParser = require("body-parser");  
const fs = require("fs");
const cookieParser = require('cookie-parser');
const app = express();  

  
app.use(bodyParser.urlencoded({ extended:  false  }));  
app.use(bodyParser.json()); 
app.use(cookieParser()); 
  

var userInfo = {}


function checkData(name, pw, url){
    console.log('checkData');
    console.log(name, '/', pw, '/', url );
    console.log(Boolean(name), '/', Boolean(pw), '/', Boolean(url) );

    if(!name|name===''|!pw|pw===''){
        console.log('유저명과 비밀번호는 필수');
        return; //유저명과 비밀번호는 필수
    }

    if (userInfo.hasOwnProperty(name)){             
        if(pw !== userInfo[name].pw){
            return; // 비밀번호 틀렸음
        } 

        if(!url||url[0]===''){
            // if(userInfo[name].ytaddr===''||!userInfo[name].ytaddr){
            //     return; // 저장된 URL도 없는데 새로 저장도 안 하다니!
            // }
            return;

        }else if(url[url.length-1] === userInfo[name].ytaddr){
            return; // 저장된 값이나 이거나 똑같
        }else{
            userInfo[name].ytaddr = url[url.length-1]; //기존url업데이트
        }
    }    else{ 
            if(!url||url[0]===''){
                return; //유저명입력했는데 URL은 없어..
            }
            //신규저장
            userInfo[name]= {
            "ytaddr" : url[url.length-1],
            "pw" : pw
            }    
        }
}

app.get('/',function (req,res) {      

    var name = 'guest';
    var youtubeAddr = 'https://www.youtube.com/embed/v64KOxKVLVg';
    var pw = '';

    if(req.cookies.uname){
        name = req.cookies.uname;
        pw = req.cookies.upw;
        if(userInfo[name])
            youtubeAddr = 'https://www.youtube.com/embed/'+userInfo[name];

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

    checkData(inname, inpw, inurl);

    if(!userInfo[inname]){
        console.log('입력값에 대한 userInfo가 없다는 뜻');
        res.redirect('/');
        return;
    }
    
    res.cookie('uname', inname,{
        maxAge:1000000
     });

    res.cookie('upw', req.query.upw,{
        maxAge:1000000
     });     
   
   
    res.redirect('/');  
    console.log('userInfo : ', userInfo);
});



//removecookie
app.get('/removecookie',function (req,res) {  
    console.log('removecookie')
    res.clearCookie('uname');
    res.clearCookie('upw');
    res.redirect('/');  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});