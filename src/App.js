import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Movie from './pages/Movie'
import Imdb from './pages/Imdb'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path='/Home' element={<Home/>}>Home</Route>
      <Route path='/About' element={<About/>}>About</Route>
      <Route path='/Contact' element={<Contact/>}>About</Route>
      <Route path='/Movie' element={<Movie/>}>Movie</Route>
      <Route path='/Imdb/:id' element={<Imdb/>}>Imdb</Route>
      
      
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
