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
      return await response.json();
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
            state.status = 'loading';
        })
        .addCase(fetchPokemon.fulfilled, (state, action) => {
            state.status = 'idle';
            state.pokemons = action.payload.results;
        })
  },
});

console.log(pokemonSlice);

export default pokemonSlice.reducer;
