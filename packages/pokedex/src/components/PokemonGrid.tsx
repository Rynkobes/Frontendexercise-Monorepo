
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux'
import { DataGrid, GridRowParams } from '@mui/x-data-grid';
import { fetchPokemon, setSelectedPokemon, selectPokemon } from 'store/PokemonSlice'

const PokemonGrid = () => {
        
    const dispatch = useDispatch();
    const pokemons = useSelector(selectPokemon);
    const router = useRouter();
  
    useEffect(() => {
      dispatch(fetchPokemon() as any);
    }, [dispatch]);
  
    const handleRowClick = (params: GridRowParams) => {
        dispatch(setSelectedPokemon(params.row));
        router.push("/pokemon/[name]", `/pokemon/${params.row.name}`);
      };
    
      return (
        <div style={{ height: "500px", width: "100%" }}>
          <DataGrid rows={pokemons} columns={columns} pageSize={10} onRowClick={handleRowClick} />
        </div>
      );
    }
    
    const columns = [
      { field: "name", headerName: "Name", width: 200 },
      { field: "url", headerName: "URL", width: 300 },
    ];

export default PokemonGrid;
