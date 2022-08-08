import { useDrop } from "react-dnd";
import { useState, useCallback } from "react";
import { PokemonImage } from "./PokemonImage";

export const ImageBox = ({randomPokemons}) => {
  const [imageBox, setImageBox] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => (addImageToBox(item.id)),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBox = useCallback((id) => {
    console.log(randomPokemons);
    const imageToAdd = randomPokemons.filter((pokemon) => pokemon.id === id);
    console.log(imageToAdd);
    setImageBox(prev => [...prev, imageToAdd[0]]);
    console.log(imageBox);
  }, [imageBox, randomPokemons]);

  return (
    <div
      className="box"
      ref={drop}
      style={{ background: isOver ? "var(--yellow)" : "var(--background)" }}
    >
      {imageBox !== []
        ? imageBox.map((pokemon) => {
            return (
              <PokemonImage
                key={pokemon.id}
                url={pokemon.sprites.front_default}
                name={pokemon.name}
                id={pokemon.id}
              />
            );
          })
        : null}
    </div>
  );
};
