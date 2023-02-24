import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import axios from 'axios'

function AllBeers({ beers, setBeers }) {

  const handleSearch = async (e) => {
    const searchKey = e.target.value
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchKey}`)
    setBeers(response.data)
  }
  return (
    <>
      <NavBar />
      <h3>All Beers List</h3>
      <label>Search for Beers:  </label>
      <input onChange={(event) => handleSearch(event)} ></input>

      {beers.map((beer) => {
        return (
          <div key={beer._id} style={{ border: "1px solid black", margin: "30px", padding: "20px" }}  >
            <img src={beer.image_url} alt={beer.name} style={{ width: 70 }} />
            <h2>{beer.name}</h2>
            <h4>{beer.tagline}</h4>
            <h6>{beer.contributed_by}</h6>
            <Link to={`/beers/${beer._id}`}>View Beer Details</Link>
          </div>
        )
      })}
    </>
  )
}

export default AllBeers