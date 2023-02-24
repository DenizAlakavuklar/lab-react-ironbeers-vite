import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';

function SingleBeer( {beers} ) {
  const [singleBeer, setSingleBeer] = useState(null);
  const { beerId } = useParams();
  console.log(beerId);

 

  useEffect(()=>{

   const beer = beers.find( (beer) => {
    return beer._id === beerId;
 

  } );

  setSingleBeer(beer)
},[beerId])

  console.log(singleBeer);

if(!singleBeer){
return <p>Loading</p> 
}

  return (
    <>
      <NavBar />

      <img src={singleBeer.image_url} alt={singleBeer.name}  style={{width:70}}  />
      <h3>Name: {singleBeer.name}</h3>
      <h4>Tagline: {singleBeer.tagline}</h4>
      <h5>First brewed: {singleBeer.first_brewed}</h5>
      <h5>Attenuation level: {singleBeer.attenuation_level}</h5>
      <h5>Description: {singleBeer.description}</h5>
      <h5>Contributed by: {singleBeer.contributed_by}</h5>

    </>
  )
}

export default SingleBeer