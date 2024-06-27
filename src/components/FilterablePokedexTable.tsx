import React, { useState, useEffect } from 'react'
import PokemonTypeSelection from '@/components/PokemonTypeSelection'
import PokedexTable from '@/components/PokedexTable'
import { trpc } from '@/utils/trpc'

const FilterablePokedexTable: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined)
  const [filteredPokemon, setFilteredPokemon] = useState([])

  const getPokemonByType = trpc.getPokemonByType.useMutation()

  useEffect(() => {
    const fetchData = async () => {
      if (selectedType) {
        const result = await getPokemonByType.mutateAsync(selectedType)
        setFilteredPokemon(result)
      } else {
        setFilteredPokemon([])
      }
    }
    fetchData()
  }, [selectedType])

  return (
    <div>
      <PokemonTypeSelection selectedType={selectedType} selectType={setSelectedType} />
      <PokedexTable pokemonArray={filteredPokemon} />
    </div>
  )
}

export default FilterablePokedexTable
