import { useState } from 'react';
import { trpc } from '@/utils/trpc';
import PokemonRow from '@/components/PokemonRow';
import PokedexTable from '@/components/PokedexTable';
import FilterablePokedexTable from '@/components/FilterablePokedexTable';

const IndexPage: React.FC = () => {
  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const [names, setNames] = useState('');
  const [pokemonArray, setPokemonArray] = useState([]);

  const getPokemon = trpc.getPokemon.useMutation();
  const getPokemonArray = trpc.getPokemonArray.useMutation();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const result = await getPokemon.mutateAsync(name);
    setPokemon(result);
  };

  const handleSubmitMultiple = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const result = await getPokemonArray.mutateAsync(names.split(','));
    setPokemonArray(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Get Pokemon</button>
      </form>
      {pokemon && <PokemonRow pokemon={pokemon} />}
      
      <form onSubmit={handleSubmitMultiple}>
        <input value={names} onChange={(e) => setNames(e.target.value)} />
        <button type="submit">Get Multiple Pokemon</button>
      </form>
      {pokemonArray.length > 0 && <PokedexTable pokemonArray={pokemonArray} />}
      
      <FilterablePokedexTable />
    </div>
  );
};

export default IndexPage;

// import { useState } from 'react'
// import { trpc } from '@/utils/trpc'
// import PokemonRow from '@/components/PokemonRow'
// import PokedexTable from '@/components/PokedexTable'
// import FilterablePokedexTable from '@/components/FilterablePokedexTable'

// const IndexPage: React.FC = () => {
//   const [name, setName] = useState('')
//   const [pokemon, setPokemon] = useState(null)

//   const [names, setNames] = useState('')
//   const [pokemonArray, setPokemonArray] = useState([])

//   const getPokemon = trpc.getPokemon.useMutation()
//   const getPokemonArray = trpc.getPokemonArray.useMutation()

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault()
//     const result = await getPokemon.mutateAsync(name)
//     setPokemon(result)
//   }

//   const handleSubmitMultiple = async (e: { preventDefault: () => void }) => {
//     e.preventDefault()
//     const result = await getPokemonArray.mutateAsync(names.split(','))
//     setPokemonArray(result)
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input value={name} onChange={(e) => setName(e.target.value)} />
//         <button type="submit">Get Pokemon</button>
//       </form>
//       {pokemon && <PokemonRow pokemon={pokemon} />}
//       <form onSubmit={handleSubmitMultiple}>
//         <input value={names} onChange={(e) => setNames(e.target.value)} />
//         <button type="submit">Get Multiple Pokemon</button>
//       </form>
//       {pokemonArray.length > 0 && <PokedexTable pokemonArray={pokemonArray} />}
//       <FilterablePokedexTable />
//     </div>
//   )
// }

// export default IndexPage
