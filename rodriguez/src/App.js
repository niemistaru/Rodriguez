import React, { useState } from 'react';
import rodriguez from './Rodriguez1.jpg';
import './App.css';
import './index.css';
//import AllButton from './components/AllButton';
//import Film from './components/Film';
import MovieArray from './components/MovieArray';

/*********************REACT APP******************************* */
function App() {
  const [query, setQuery] = useState();
  const [results, setResults] = useState([]);

// //NAPPI 1: Eventhandler getall-napille
   const handleClick = (event) => {
    event.preventDefault();
     console.log("Everything happens for a reason, this one because ", event.target);
     GetAllMovies();
   };
//NAPPI 2: Eventhandler id-hakunapille
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("This happended because of ", event.target);
    console.log("Search for: ", query);
    GetOneMovie(query);
  };

// //Hae kaikki leffat

   const GetAllMovies = () => {
    fetch("http://localhost:5000/api/getall")
     .then((results) => {
       return results.json();
     })
     .then((data) => {
      console.log(data);
       const items = data;
       setResults(items)
     });
    };

//Hae id:n perusteella
const GetOneMovie = (query) => {
  fetch("http://localhost:5000/api/" + query)
  .then((results) => {
    return results.json();
  })
  .then((data) => {
    console.log("You searched for ", data);
    const items = data;
    console.log("One movie: ", data);
    setResults([items])
  });
};


return (
  <div className="App">
    <header className="App-header">
      <img src={rodriguez} className="App-logo" alt="Robert Rodriguez in New York Comic con 2018." />
      <h1>Rodriguez Kingdom</h1>
    </header>    
    <div id="sivu">
      
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
        <label for="id-input">Search a movie with id</label>
            <input type="search" 
            id="id-input"
            value={query} 
            onChange={(event) => setQuery(event.target.value)}
            className='form-control'
            placeholder="Insert id"
            name="query"></input>
          
            <button type="submit" className='btn btn-dark'>Submit</button>
            
        </div> 
        </form>

        <div>
        <p>Or list all movies directed by Robert Rodriguez:</p>
        <button
        type="button"
        className="btn btn-danger"
        onClick={handleClick}>All Rodriguez Movies</button>
        
      <MovieArray data={results} />
      </div>
      <form>
          <div class="form-group">
            <p>Add a new movie to database</p>
            <label for="movietitle">Title</label>
            <input type="text" class="form-control" id="movietitle" placeholder="Insert title"></input>
          </div>
          <div class="form-group">
            <label for="movieyear">Year</label>
            <input type="text" class="form-control" id="movieyear" placeholder="Insert year"></input>
          </div>
          <div class="form-group">
            <label for="movieposter">Link to movie poster</label>
            <input type="text" class="form-control" id="movieposter" placeholder="Insert link"></input>
          </div>
          <button type='button' className='btn btn-info'>Add movie</button>
        </form>
    </div>
  </div>


);

}


export default App;
