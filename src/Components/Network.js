import React, {Component} from 'react';
import axios from 'axios';

class Network extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: {}
        }
    }

    successfulRequest = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/1')
        .then(res => this.setState({pokemon: res.data}))
        .catch(err => console.log(err))
    }

    unsuccessfulRequest = () => {
        axios.get('https://pokeapi.co/api/v2/pokmon/2')
        .then(res => this.setState({pokemon: res.data}))
        .catch(err => console.log(err))
    }

    render(){
        const {pokemon} = this.state;
        return (
            <div className='network'>
                <h1>NETWORK TAB</h1>
                {pokemon.name
                ? (
                    <>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                        <p>{pokemon.name}</p>
                    </>
                )
                : null}
                <button onClick={this.successfulRequest}>Successful Request</button>
                <button onClick={this.unsuccessfulRequest}>Unsuccessful Request</button>
            </div>
        )
    }
}

export default Network;