import { useDrag } from "react-dnd";

export const PokemonImage = ({ id, name, url }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <li
      className="pokemonImage"
      ref={drag}
      style={{ border: isDragging ? "4px solid var(--red)" : "0px" }}
    >
      <img src={url} alt={name} />
    </li>
  );
};
