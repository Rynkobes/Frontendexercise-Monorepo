import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import pokemonReducer from './PokemonSlice'

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
