import React from 'react'
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../store";
// import error & pokemon details component from components package
import { ErrorComponent, PokemonDetails } from '@marlow/components';


const PokemonPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const pokemon = useSelector((state: RootState) => state.pokemon.find(p => p.name === name));

  if (!pokemon) {
    return <ErrorComponent errorMessage='Pokemon not found'/>
  }

  return (
    <>
      <PokemonDetails
        name={pokemon.name}
        url={pokemon.imageUrl}
      />
    </>
  );
};

export default PokemonPage;
