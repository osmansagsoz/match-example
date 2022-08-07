import { useDrag } from "react-dnd";

export const PokemonImage = ({id, name, url}) => {
    return (
        <li className="pokemonImage">
            <img src={url} alt={name} />
        </li>
    );
}