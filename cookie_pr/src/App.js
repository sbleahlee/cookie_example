import React from 'react';
import logo from './logo.svg';
import LGN from './component/LGN';
import './App.css';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username:null
        };
    }

    // componentDidMount() {
    //     fetch('api')
    //     .then(res=>res.json())
    //     .then(data=>this.setState({username:data.username}));
    // }

    render() {
        const {username} = this.state;
        return (
            <div className="App">
                <header className="custom_header">
                    {/* {username ? `Hello ${username}` : 'Hello World'} */}
                </header>
                <p>여기</p>
                <LGN></LGN>
            </div>
        );
        ;
    }
}

export default App;