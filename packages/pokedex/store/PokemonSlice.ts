import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "store";
// import fetchApi utility frunction from utils package
import { fetchApiData } from '@marlow/utils';

interface Pokemon {
  id: number;
  name: string;
  imageUrl?: string;
  height?: number;
  weight?: number;
}

interface PokemonState {
  data: Pokemon[];
  selected: string | null;
}

const initialState: PokemonState = {
  data: [],
  selected: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<Pokemon[]>) => {
      state.data = action.payload;
    },
    setSelectedPokemon: (state, action: PayloadAction<string>) => {
      state.selected = action.payload;
    },
  },
});

export const { setPokemon, setSelectedPokemon } = pokemonSlice.actions;

export const fetchPokemon = (): AppThunk => async (dispatch) => {

    // use fetchApiData from utils package to make API call
    const apiUrl = `https://pokeapi.co/api/v2/pokemon`
    const response = await fetchApiData<Pokemon[]>(apiUrl)
    const pokemonList: Pokemon[] = response.results.map((pokemon: any, index: number) => ({
        id: index + 1,
            name: pokemon.name,
        url: pokemon.url
        }));
        dispatch(setPokemon(pokemonList));
        
    };


export const selectPokemon = (state: RootState) => state.pokemon.data;
export const selectSelectedPokemon = (state: RootState) => state.pokemon.selected;

export default pokemonSlice.reducer;