import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  status: "idle",
};

const url = "https://pokeapi.co/api/v2/pokemon/";

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      const dataArr = json.results.map(async (pokemon) => {
        const resp = await fetch(pokemon.url);
        const pokeData = await resp.json();
        return pokeData;
        });
      const resolvedArr = await Promise.all(dataArr);
      console.log(resolvedArr)
      return resolvedArr;
    } catch (err) {
      console.log(err);
    }
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = "idle";
        state.pokemons = action.payload;
      });
  },
});

console.log(pokemonSlice);

export default pokemonSlice.reducer;
