import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./Imbd.css"
const Imdb = () => {
  const {id} = useParams() // used to read the url
  const [moviedata, setmoviedata]=useState({})

  useEffect(()=>{
    console.log(id)
    axios.get(`https://www.omdbapi.com/?i=${id}&apikey=4827adaa`)
    .then((res)=>setmoviedata(res.data))
  },[])

  function imdb(){
    window.location.assign(`https://www.imdb.com/title/${id}`)
    // window.location.href=`https://www.imdb.com/title/${id}`
  }

  

    
  
  return (
    <div>
      {
      moviedata && (
        <div className='imbd'>
          <img src={moviedata.Poster} alt={moviedata.Title}/>
          
          <h5>{moviedata.Year}</h5>
          <h5>{moviedata.Plot}</h5>  
          <button onClick={imdb}>Imdb </button>
          
          
        </div>
          
          
      )
       
      }
       
      
      
   
    </div>
  )
}

export default Imdb
