import React, {useState, useEffect} from 'react'
import loadingIcon from '../images/loading-icon.gif'

const PokemonContext = React.createContext()

const PokemonProvider = (props) => {
    const [pokemonList, setPokemonList] = useState([])
    const [playerTeam, setPlayerTeam] = useState(['testing'])
    const testFunction = () => {
        setPlayerTeam('changed')
    }
    useEffect(() => {
    (async () => {
        const result = [];
        // for(let i=1; i<10; i++)
        // {
        //     let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        //     let data = await res.json()
        //     result.push(data)
        // }
        let res = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
        let data = await res.json()
        result.push(data)
        setPokemonList(result[0].results)
    })()
  }, []) //Empty array as a second parameter prevents fetching an infinite amount of times because of the re-rendering of useEffect() 

  return (
<>
    {
    pokemonList.length < 1 ? <img src={loadingIcon}></img> : 
      <PokemonContext.Provider value={{
          pokemonList,
          playerTeam,
          testFunction
      }}>
          {props.children}
      </PokemonContext.Provider>
    }
</>
  )
}

export { PokemonProvider, PokemonContext }

    // <div>
    //     {pokemonList.length < 1 ? console.log('Loading...') : <img src={pokemonList[0].sprites.front_default}></img> }

    // </div>