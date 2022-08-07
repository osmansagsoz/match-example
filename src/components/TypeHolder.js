

export const TypeHolder = ({randomPokemons}) => {
    return (<div className="typeHolder">
        <ul>
            {randomPokemons.map(pokemon => {
                return <li key={pokemon.id}>{pokemon.types[0].type.name}</li>
            })}
        </ul>
    </div>);
}