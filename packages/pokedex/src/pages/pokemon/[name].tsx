import React from 'react'
import { useSelector } from "react-redux";
import { selectSelectedPokemon } from "../../../store/PokemonSlice";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import { ErrorComponent, PokemonDetails } from '@marlow/components';

export default function PokemonDetail() {
  const router = useRouter();
  const { name } = router.query;
  const pokemon = useSelector(selectSelectedPokemon);

  if (!pokemon || pokemon.name !== name) {
    return <ErrorComponent errorMessage='Pokemon not found'/>

  }

  return (
    <>
      <PokemonDetails
        name={pokemon.name}
        url={pokemon.url}
      />
    </>
  );
}
