import { PokemonImage } from "./PokemonImage";

export const PokemonHolder = ({ randomPokemons }) => {
  return (
    <div className="pokemonHolder">
      <ul>
        {randomPokemons.map((pokemon) => {
          return (
            <PokemonImage
              key={pokemon.id}
              url={pokemon.sprites.front_default}
              name={pokemon.name}
              id={pokemon.id}
            />
          );
        })}
      </ul>
    </div>
  );
};
