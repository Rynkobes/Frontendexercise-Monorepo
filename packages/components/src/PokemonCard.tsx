import React, { FC, useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import { Avatar,Card, Typography, List, ListItemText, ListItem, getAppBarUtilityClass } from '@mui/material'
import { green } from '@mui/material/colors'
import { fetchApiData } from '@marlow/utils'

type PokemonProps = {
    name: string,
    url: string
}

const PokemonDetails: FC<PokemonProps> = (props) => {
    const [details, setDetails] = useState<any>([])
    const [pokemonHeight, setPokemonHeight] = useState(null)
    const [pokemonWeight, setPokemonWeight] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const apiUrl = props.url
     
    useEffect(() => {
        setIsLoading(true)
        fetchApiData<any>(apiUrl)
            .then(res =>
            {
                setDetails(res.abilities)
                setPokemonHeight(res.height)
                setPokemonWeight(res.weight)
                setIsLoading(false)
            }
            )
        
        },[apiUrl])
        if (isLoading) {
            return <p>Loading...</p>
        }
        
     return (
         <>
            <Typography variant='h5'>Name: {props.name}</Typography>
            <Typography variant='h6' >Abilities</Typography>
                 <List>
                     {
                         details.map((item, i) => (
                             <ListItem key={i}>
                                 <ListItemText primary={item.ability.name} />
                            </ListItem>
                         ))
                     }
             </List>
             <Typography variant='body1' >Height: { pokemonHeight}</Typography>
             <Typography variant='body1' >Weight: { pokemonWeight}</Typography>
             <Typography variant='body1' >url: {apiUrl}</Typography>
             
        </>
  )
}


export default PokemonDetails