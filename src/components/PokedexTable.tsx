import React from 'react'
import PokemonRow from './PokemonRow'

const PokedexTable: React.FC<{ pokemonArray: any[] }> = ({ pokemonArray }) => {
  return (
    <div>
      {pokemonArray.map((pokemon) => (
        <PokemonRow key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokedexTable
