import { TypeEl } from "./TypeEl";

export const TypeHolder = ({ randomPokemons }) => {
  const shuffledPokemons2 = randomPokemons.sort(() => 0.5 - Math.random());

  return (
    <div className="typeHolder">
      <ul>
        {shuffledPokemons2.map((pokemon) => {
          return (
            <TypeEl key={pokemon.id} types={pokemon.types} id={pokemon.id} />
          );
        })}
      </ul>
    </div>
  );
};
