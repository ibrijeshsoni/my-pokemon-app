import React from 'react'

type PokemonTypeSelectionProps = {
  selectedType: string | undefined
  selectType: (type: string | undefined) => void
}

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
}) => {
  const types = [
    'grass', 'fire', 'water', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'
  ]

  return (
    <select value={selectedType} onChange={(e) => selectType(e.target.value)}>
      <option value="">All</option>
      {types.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  )
}

export default PokemonTypeSelection
