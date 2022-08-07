import { PokemonImage } from "./PokemonImage";

export const PokemonHolder = ({randomPokemons}) => {

  return (
    <div className="pokemonHolder">
      <ul>
        {randomPokemons.map(pokemon => {
          return <PokemonImage key={pokemon.name} url={pokemon.sprites.front_default} />
        })}
      </ul>
    </div>
  );
};

