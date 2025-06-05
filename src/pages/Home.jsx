import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
const Home = () => {
    const[movies, setMovies] = useState([])
    
    

    const fetchMovies = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&page=4`)
        const data = await res.json()
        
        setMovies(data.results)
    }

    useEffect(() => {
        fetchMovies()
    },[])

    
  return (
    <div className='p-6 mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-900 '>
        {movies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}/>
        ))}
    </div>
  )
}

export default Home