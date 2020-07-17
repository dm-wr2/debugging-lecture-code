import React, {Component} from 'react';

class Sources extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: 0,
            num1: '',
            num2: ''
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleAdd = () => {
        const {num1, num2} = this.state;
        this.setState({result: +num1 + +num2})
    }

    render(){
        const {result, num1, num2} = this.state;
        return (
            <div className='sources'>
                <h1>SOURCES TAB</h1>
                <input value={num1} name='num1' onChange={e => this.handleInput(e)}/>
                <input value={num2} name='num2' onChange={e => this.handleInput(e)}/>
                <button onClick={this.handleAdd}>Add</button>
                <p>Result: {result}</p>
            </div>
        )
    }
}

export default Sources;