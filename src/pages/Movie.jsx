import {React,useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './Movie.css'
import { useNavigate } from 'react-router-dom'
const Movie = () => {
const navigate= useNavigate() // Which is a hook used to navigate from one page to another page  
const [mov,setmov]=useState([])
const [drop,setdrop]=useState("animation")

function dropdown(e){
  setdrop(e.target.value)
  // console.log(e.target.value)
}

useEffect(() =>{
  
  axios.get(`https://api.sampleapis.com/movies/${drop}`)
  // .then((response) =>console.log(response))
  .then((res) =>setmov(res.data))
  console.log("useeffect executed")
},[dropdown])



  
  return (
    <div >
      <div className='dropdown1'>
      <select onChange={dropdown} className='dropdown2'>
        <option value="animation">animation</option>
        <option value="horror">horror</option>
        <option value="drama">drama</option>
      </select>
      <p>{console.log(mov)}</p>
      <p>{console.log(drop)}</p>
      </div>
      
      
      
    {
    mov && mov.map((i)=>(
      <div className='Movie'>
         
        <img src={i.posterURL} alt={i.title} ></img>
        <br></br>
        <br></br>
        <button id="moviebutton" onClick={()=>navigate(`/Imdb/${i.imdbId}`)}><p id="title">{i.title}</p></button>
          
          
          
        </div> 
      ))
      }
      
      
    </div>
  ) 
}

export default Movie
