import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Box } from './components/Box';
import { Holder } from './components/Holder';
import { fetchPokemon } from './features/pokemon/pokemonSlice';
import { useDispatch, useSelector } from 'react-redux';
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
      <Box />
      <Box />
    </div>
    </DndProvider>
  );
}

export default App;
