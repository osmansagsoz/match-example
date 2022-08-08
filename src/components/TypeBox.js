import { useDrop } from "react-dnd";
import { useState } from "react";
import { TypeEl } from "./TypeEl";

export const TypeBox = ({randomPokemons}) => {
  const [typeBox, setTypeBox] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "type",
    drop: (item) => addTypeToBox(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addTypeToBox = (id) => {
    const typeToAdd = randomPokemons.filter((pokemon) => pokemon.id === id);
    setTypeBox(prev => [...prev, typeToAdd[0]]);
  }

  return (
    <div
      className="box"
      ref={drop}
      style={{ background: isOver ? "var(--yellow)" : "var(--background)" }}
    >
      {typeBox !== []
        ? typeBox.map((pokemon) => {
            return (
              <TypeEl
                key={pokemon.id}
                types={pokemon.types}
                id={pokemon.id}
              />
            );
          })
        : null}
    </div>
  );
};
