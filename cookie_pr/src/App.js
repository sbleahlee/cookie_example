import React from 'react';
import logo from './logo.svg';
import LGN from './component/LGN';
import './App.css';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name:null
        };
    }
    

    //리액트 라이프사이클 메소드 componentDidMount() > 서버 사이드 접근 가능
    componentDidMount() {
        fetch('api')
        .then(res=>res.json())
        .then(data=>this.setState({
            name:data.name
        }));
    }

    componentDidMount() {
        fetch('userinfo')
        .then(res=>res.json())
        .then(data=>this.setState({
            name:data.name
        }));
    }
    

    render() {
        return (
            <div className="App">
                <header className="custom_header">
                    {/* {username ? `Hello ${username}` : 'Hello World'} */}
                    <div>
                        {this.state.name? <h1>{this.state.name}</h1>:<h1>...</h1>}
                    </div>
                </header>
                <p>여기</p>
                <LGN></LGN>
            </div>
        );
        ;
    }
}

export default App;