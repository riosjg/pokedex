import React, {useContext} from 'react';
import { PokemonContext } from '../context/index'

export default function(){
    const appContext = useContext(PokemonContext)
    const { pokemonList, playerTeam, testFunction } = appContext
    return(
        <>
        <p onClick={testFunction}>{playerTeam}</p>
        {/* {pokemonList.map(e => <img src={e.sprites.back_default}></img>)} */}
        {console.log(pokemonList)}
        {pokemonList.map((e,index) => <div> <b>{index+1} {e.name}</b> <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} ></img> </div>)}
        </>
    )
}