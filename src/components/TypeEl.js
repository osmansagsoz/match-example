import { useDrag } from "react-dnd";

export const TypeEl = ({ id, types }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "type",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <li
      ref={drag}
      style={{ border: isDragging ? "4px solid var(--red)" : "0px" }}
    >
      {types[0].type.name}
    </li>
  );
};
