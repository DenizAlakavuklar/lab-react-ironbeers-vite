import React from 'react'
import axios from "axios";
import { useState } from "react";
import NavBar from "./NavBar";

function NewBeer() {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirst_brewed] = useState("");
    const [brewers_tips, setBrewers_tips] = useState("");
    const [attenuation_level, setAttenuation_level] = useState(5);
    const [contributed_by, setContributed_by] = useState("");

    const handleSubmit = (event) => {

          event.preventDefault();

          const newBeer = {
              "name": name,
              "tagline": tagline,
              "description": description,
              "first_brewed": first_brewed,
              "brewers_tips": brewers_tips,
              "attenuation_level": attenuation_level,
              "contributed_by": contributed_by
          }

          axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
              .then((res) => {
                  console.log(res.data);
              })
              .catch((err) => {
                  console.log("Error creating beer to API", err);
              })

          setName("");
          setTagline("");
          setDescription("");
          setFirst_brewed("");
          setBrewers_tips("");
          setAttenuation_level(5);
          setContributed_by("")

    }

    return (
        <>
            <NavBar />

            <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
                <label>Name:
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}/>
                </label>

                <label>Tagline:
                    <input 
                        type="text"
                        name="tagline"
                        value={tagline}
                        onChange={(e) => {setTagline(e.target.value)}}/>
                </label>

                <label>Description:
                    <input 
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => {setDescription(e.target.value)}}/>
                </label>

                <label>First brewed:
                    <input 
                        type="text"
                        name="first_brewed"
                        value={first_brewed}
                        onChange={(e) => {setFirst_brewed(e.target.value)}}/>
                </label>

                <label>Brewers tips:
                    <input 
                        type="text"
                        name="brewers_tips"
                        value={brewers_tips}
                        onChange={(e) => {setBrewers_tips(e.target.value)}}/>
                </label>

                <label>Attenuation level:
                    <input 
                        type="number"
                        name="attenuation_level"
                        value={attenuation_level}
                        onChange={(e) => {setAttenuation_level(e.target.value)}}/>
                </label>

                <label>Contributed by:
                    <input 
                        type="text"
                        name="contributed_by"
                        value={contributed_by}
                        onChange={(e) => {setContributed_by(e.target.value)}}/>
                </label>

                <button type='submit'>Create</button>
            </form>
        </>

    )
}

export default NewBeer
