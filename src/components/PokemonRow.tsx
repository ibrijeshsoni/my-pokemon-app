import React from 'react'

interface PokemonRowProps {
  pokemon: {
    id: number
    name: string
    types: string[]
    sprite: string
  }
}

const PokemonRow: React.FC<PokemonRowProps> = ({ pokemon }) => {
  return (
    <div>
      <img src={pokemon.sprite} alt={pokemon.name} />
      <p>{pokemon.id}</p>
      <p>{pokemon.name}</p>
      <p>{pokemon.types.join(', ')}</p>
    </div>
  )
}

export default PokemonRow
