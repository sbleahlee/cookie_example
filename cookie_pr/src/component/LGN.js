import React, { Component } from 'react';


class LGN extends Component {
    constructor () {
        super();
        this.state = {
            uname : '',
            upw : '',
            checkPassword : 'Insert Password'
            };
    }

    //input onChange 이벤트
    handleChange = (e) => {
        this.setState({
            [e.target.uname] : e.target.value,
        });

        //파라미터로 받은 event.target.uname이 uname이 아닐 경우에만 handleCheck함수 실행
        //setTimeout으로 딜레이를 준 이유는 딜레이 없는 경우 setState변경값이 handleCheck에 바로 반영X
        if(e.target.uname !== 'uname'){
            setTimeout(this.handleCheck, 100);
        }
    };


    //비밀번호 Check
    handleCheck = () => {
        const {upw} = this.state;
        
        //비밀번호 미입력
        if(upw.length < 1) {
            this.setState({
                checkPassword : 'Insert Password'
            });
        } else {
            //구현?  
            this.setState({
                checkPassword : 'Password'
            }); 
        }
    }
    
    render(){
        //const {uname, upw, checkPassword} = this.state;
        return (
            <div className="LGN">                    
                    <div className="form-group">
                    <form className = "loginForm" action="/userinfo">
                        <label form="uname">Name:</label>
                        <input  
                            className="form-control" 
                            type="text" 
                            id="uname" 
                            name="uname" 
                            onChange = {this.handleChange} 
                            value = {this.state.uname} 
                            placeholder = "Username"
                        />
                        <label form="upw">Password:</label>
                        <input 
                            className="form-control"
                            type="text" 
                            id="upw" 
                            name="upw"
                            onChange = {this.handleChange}
                            value = {this.state.upw}
                            placeholder = "Password"
                        />
                        <input  className="btn btn-default" type="submit" value="Submit" />
                    </form>
                </div>
 
                <div className = "showResult">
                    <span>{this.state.checkPassword}</span>
                </div>
            </div>
        );
    }
}

export default LGN;
