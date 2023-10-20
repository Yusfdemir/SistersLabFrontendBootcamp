import React from 'react'

const PokemonCard = ({pokemon}) => {
  return (
    <div>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}alt="Avatar" style={{height:"200px",width:"200px"}}/>
                </div>
                <div class="flip-card-back">
                    <h1>{pokemon.name}</h1> 
                    <p>{pokemon.type}</p> 
                    <p>{pokemon.experience}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PokemonCard