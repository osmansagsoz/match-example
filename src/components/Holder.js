import { useMemo } from "react";
import { useSelector } from "react-redux";
import { PokemonHolder } from "./PokemonHolder";
import { TypeHolder } from "./TypeHolder";
import { ImageBox } from "./ImageBox";
import { TypeBox } from "./TypeBox";

export const Holder = () => {
  const { pokemons } = useSelector((store) => store.pokemon);

  const randomPokemons = useMemo(
    () => pokemons.slice().sort(() => 0.5 - Math.random()).slice(0, 5),
    [pokemons]
  );

  return (
    <div className="holder">
      <PokemonHolder randomPokemons={randomPokemons} />
      <ImageBox randomPokemons={randomPokemons} />
      <TypeBox randomPokemons={randomPokemons} />
      <TypeHolder randomPokemons={randomPokemons} />
    </div>
  );
};
