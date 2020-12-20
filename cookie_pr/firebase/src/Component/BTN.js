import React, { Component } from 'react';
import fire from '../config/fire_config';
import TBL from './TBL';

//일반변수는 렌더링 x
var showTable = '';

//나중에 function으로 
class BTN extends Component {

    constructor(props){
        super(props);

        //state값 초기화
        this.state={
         user : [],
         showTableFlag : false
        }

        this.clickBtn = this.clickBtn.bind(this)
    }

    clickBtn(){

        fire.firestore()
        .collection('users')
        .onSnapshot(snap => {
            const cons = snap.docs.map(doc =>({
                id : doc.id,
                ...doc.data()
            }));

            if(cons){
                //this.state.user.push(cons);
                // }

                //신규저장

                this.setState({showTableFlag:true, user:cons});
                showTable = <TBL user = {this.state.user} ></TBL>
                
                console.log('showTable: ' , showTable);
                console.log('this.state.user: ' , this.state.user); 
        }});
            
        }

    render(){
        
        console.log('props : ', this.props); // {}
        console.log('state: ', this.state); // {user:Array}        

        return ( 
            <div id = 'button'>                
                <button id = 'test' onClick = {(event)=>this.clickBtn()}>TEST</button>
                {this.state.showTableFlag?<TBL user = {this.state.user} ></TBL>:null}
            </div>
        );
        //온클릭이벤트 ()=> 관련
        //자바스크립트 포맷 형식 & then의 방식 - Promise
        //자바스크립트 es6 ... : 기존데이터를 살리고 변경한다
    }

}
export default BTN;