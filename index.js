import express from "express";  
import { urlencoded, json } from "body-parser";  
import { readFile } from "fs";
import cookieParser from 'cookie-parser';
const app = express();  
import sha256 from 'js-sha256';

  
app.use(urlencoded({ extended:  false  }));  
app.use(json()); 
app.use(cookieParser()); 
  

var userInfo = {}


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
            return msg;
        } 

        if(!url||url[0]===''){
            if(userInfo[name].ytaddr===''||!userInfo[name].ytaddr){
                msg = '저장된 URL도 없고 신규저장도 없고';
            return msg;
            }

        }else if(url[url.length-1] === userInfo[name].ytaddr){
            msg = '저장된 URL이나 이거나 똑같스';
            return msg;
        }else{
            userInfo[name].ytaddr = url[url.length-1]; //기존url업데이트
        }
    }    else{ 
            if(!url||url[0]===''){
                msg = '유저명 입력했는데 URL이 없네요';
                return msg; 
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
        pw = req.cookies.upw;
        if(userInfo[name])
            youtubeAddr = 'https://www.youtu.be'+userInfo[name];

    }       

    readFile(__dirname + '/view/index.html', 'UTF-8',
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

    if(checkMsg){
        console.log(checkMsg);
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


app.get('/delete',function (req,res) {  

    var inname = req.query.
    
    uname;
    var inpw = req.query.upw;
    var inurl = req.query.url;

    console.log(inname, inpw, inurl);

    // if(checkMsg){
    //     console.log(checkMsg);
    //     res.redirect('/');
    //     return;
    // }
    
    // res.cookie('uname', inname,{
    //     maxAge:1000000
    //  });

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
    res.clearCookie('upw');
    res.redirect('/');  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});