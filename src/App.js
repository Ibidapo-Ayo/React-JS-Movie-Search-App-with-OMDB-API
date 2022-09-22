import React, { useState } from "react";
import axios from "axios";
import './style.css';

function App() {
  const [text, setText] = useState("Search Movies");
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([])
  
 
  const changeText = event => {
    // console.log(event)
    setText(event.target.value);
  };
  const getMovie = e => {
    e.preventDefault();
    axios.get(`http://www.omdbapi.com/?s=${text}&apikey=e2ac4824`)
      .then(response => {
        console.log(response);
        setMovie(response.data.Search)
      });
  };
  axios.get("http://www.omdbapi.com/?s=kick&apikey=e2ac4824")
  .then((response)=>{
    console.log(response)
    setMovies(response.data.Search)
  })
 
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
           My Test App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>

      <div className="p-5 mb-4 banner">
      <div class="container py-5">
        <h3>Watch something incredible.</h3>
      </div>
     
      </div>
     <div className="search_area">
      <div className="container">
      <p>Search</p>
      <form className="d-flex" role="search" onSubmit={getMovie}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={text}
                onChange={changeText}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
      </div>
     </div>
     <div className="container pt-97">
  <div className="row">
   {
     movie.map((value, index)=>{
       return(
      <>
        <div className="col-3" style={{marginBottom: "97px"}}>
        <div className="card bg-dark text-white" style={{width: "300px", height: "300px"}}>
          <img src={value.Poster} className="card-img" style={{width: "300px", height: "300px"}} alt="..." />
          <div className="card-img-overlay">
            <h3 className="card-text">
             {value.Title}
            </h3>
          </div>
        </div>
      </div>
      </>
       )
     })
   }
  </div>
</div>
<div className="container">
  <div className="row">
   {
     movies.map((value, index)=>{
       return(
        <div className="col-3" style={{marginBottom: "97px"}}>
        <div className="card bg-dark text-white" style={{width: "300px", height: "300px"}}>
          <img src={value.Poster} className="card-img" style={{width: "300px", height: "300px"}} alt="..." />
          <div className="card-img-overlay">
            <h3 className="card-text">
             {value.Title}
            </h3>
          </div>
        </div>
      </div>
       )
     })
   }
  </div>
</div>

     
    </>
  );
}

export default App;
