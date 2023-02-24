import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
    <h2>Home</h2>

        <div className = "HomePage" >
            <Link to="/beers" className='links'> 
                    <img src="src/assets/beers.png" alt="Beers" />
                    <h3>All Beers</h3>
                    <p>Ut congue felis id tortor dapibus consectetur. Etiam interdum sollicitudin pulvinar. Nullam aliquet tincidunt bibendum.</p>
                </Link>
            <Link to="/random-beer" className='links' >
                    <img src="src/assets/random-beer.png" alt="Random-Beers" />
                    <h3>Random Beer</h3>
                    <p>Ut congue felis id tortor dapibus consectetur. Etiam interdum sollicitudin pulvinar. Nullam aliquet tincidunt bibendum.</p>
                </Link>
            <Link to="/new-beer" className='links' >
                    <img src="src/assets/new-beer.png" alt="New-Beer" />
                    <h3>New Beer</h3>
                    <p>Ut congue felis id tortor dapibus consectetur. Etiam interdum sollicitudin pulvinar. Nullam aliquet tincidunt bibendum.</p>
                </Link>
        </div>
    </div>
  )
}

export default Home