import { PokemonImage } from "./PokemonImage";
import { useSelector } from "react-redux";

export const PokemonHolder = () => {
const { pokemons } = useSelector(store => store.pokemon);

  return (
    <div className="pokemonHolder">
      <ul>
        {pokemons.map(pokemon => {
          return <PokemonImage key={pokemon.name} name={pokemon.name} />
        })}
      </ul>
    </div>
  );
};
