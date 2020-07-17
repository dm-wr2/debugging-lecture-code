import React, {Component} from 'react';

class Console extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
    }

    componenetDidMount(){
        this.setState({username: 'Matt'})
    }

    render(){
        return (
            <div className='console'>
                <h1>CONSOLE TAB</h1>
                <p>Welcome, {this.state.username}</p>
            </div>
        )
    }
}

export default Console;