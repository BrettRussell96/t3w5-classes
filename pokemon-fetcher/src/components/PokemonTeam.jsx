

import React from "react";
import PokemonCard from "./PokemonCard";

export default class PokemonTeam extends React.Component {
    constructor(props){
            super(props);
            
            this.state = {
                pokemonTeam: []
            }
    }

    

    // Get random pokemon number
    // function getRandomPokemonId(){
    //     return Math.floor(Math.random * 1025)
    // }

    // Make requests to POKEAPI
    // on vomponent load
    async componentDidMount() {


            function getRandomPokemonId() {
                return Math.floor(Math.random * 1025) +1;
            }

            // Get random pokemon number
            for (let index = 0; index < 6; index++){
                
                let randomNumber = getRandomPokemonId();
                console.log(randomNumber);


                let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber).catch(error => {
                    console.log(error);
                    return error;
                });
                let data = await response.json();
                console.log(data.name);



                this.setState({pokemonTeam: [...this,state.pokemonTeam, data]});
            }
        
    }

    componentDidUpdate() {
            console.log("This component has updated and re-rendered.");
    }

    // How do we render HTML in class components
    render(){
            return(
                    <div>

                            <h1>Pokemon data here</h1>

                            {this.state.pokemonTeam && this.state.pokemonTeam.map((pokemon, index) => {
                                    return <PokemonCard key={crypto.randomUUID()} name={pokemon.name} sprite={pokemon.sprite.default}/>
                            })}
                    </div>
        )
    }
}