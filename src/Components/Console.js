import React, {Component} from 'react';

class Console extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
    }

    componentDidMount(){
        console.log('hit')
        this.setState({username: 'Matt'})
    }

    render(){
        console.log(this.state.username)
        return (
            <div className='console'>
                <h1>CONSOLE TAB</h1>
                <p>Welcome, {this.state.username}</p>
            </div>
        )
    }
}

export default Console;