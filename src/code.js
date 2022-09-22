import React, { useState } from "react";
import axios from "axios";
function App() {
  const [movie, setMovie] = useState([])
  axios.get("http://www.omdbapi.com/?s=kabhi&apikey=e2ac4824")
  .then((response)=>{
    // console.log(response)
    setMovie(response.data.Search)
  })
  const fetchMovie = () => {
   
  }
  return (
    <>
    
    <button onClick={fetchMovie}>Fetch Data</button>
    {
      movie.map((value,index) =>{
        return(
        <h3 key={index}>{value.Title}</h3>
        );
      })
    }
    </>
  )
  
}

export default App;
