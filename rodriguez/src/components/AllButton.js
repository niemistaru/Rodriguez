import React, { useState } from 'react';
const PORT = process.env.PORT || 5000;

//nappuloita joka lähtöön
const AllButton = () => {
   // const [query, setQuery] = useState();
    const [results, setResults] = useState([]);
    
//NAPPI 1: Eventhandler getall-napille
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Everything happens for a reason, this one because ", event.target);
    GetAllMovies();
  };
  
  //Hae kaikki leffat
  const GetAllMovies = () => {
   
    //tossa oli porttina kovakoodattu mut saisko sen näin...
    fetch("http://localhost:" + PORT + "/api/getall")
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      console.log(data);
      const items = data;
      setResults(items)
    });
  };
    return (
        <button type="button" className='GetAll' onClick={handleClick} >Get all movies</button>
    )
}

export default AllButton;