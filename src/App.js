import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Holder } from './components/Holder';
import { fetchPokemon } from './features/pokemon/pokemonSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
const dispatch = useDispatch();


useEffect(() => {
  dispatch(fetchPokemon());
}, [dispatch])

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <Holder />
    </div>
    </DndProvider>
  );
}

export default App;
