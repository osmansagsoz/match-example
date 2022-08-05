import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { PokemonHolder } from './components/PokemonHolder';
import { fetchPokemon } from './features/pokemon/pokemonSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
const { pokemons } = useSelector(state => state.pokemon);
const dispatch = useDispatch();
console.log(pokemons);

useEffect(() => {
  dispatch(fetchPokemon());
}, [dispatch])

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <PokemonHolder />
    </div>
    </DndProvider>
  );
}

export default App;
