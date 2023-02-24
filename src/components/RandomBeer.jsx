import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

function RandomBeer() {
  const [randomBeer,setRandomBeer] = useState([])

  const fetchRandom = async () => {
    const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
    
    setRandomBeer(response.data);
  }
    
  useEffect( () => {
    fetchRandom();
  }, [] );

  useEffect( () => {
    console.log(randomBeer);
  }, [randomBeer] );

  return (
    <>
      <NavBar />
      <div>
        <h1> RandomBeer: </h1>

        <img src={randomBeer.image_url} alt={randomBeer.name}  style={{width:70}}  />
        <h3>Name: {randomBeer.name}</h3>
        <h4>Tagline: {randomBeer.tagline}</h4>
        <h5>First brewed: {randomBeer.first_brewed}</h5>
        <h5>Attenuation level: {randomBeer.attenuation_level}</h5>
        <h5>Description: {randomBeer.description}</h5>
        <h5>Contributed by: {randomBeer.contributed_by}</h5>
      
      </div>
    </>

  )
}

export default RandomBeer