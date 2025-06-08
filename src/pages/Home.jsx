import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
const Home = () => {
    const[movies, setMovies] = useState([])
    const [error,setError] = useState(false)
    
    

    const fetchMovies = async () => {
        try{
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&page=1`)
        const data = await res.json()
        
        if(data?.results){
            setMovies(data.results)
            setError(false)
        }else{
            setError(true)
        }
        }catch(err){
            console.error('API Fetch Error: ', err)
            setError(true)
        }
        
    }

    useEffect(() => {
        fetchMovies()
    },[])

    
  return (
    <div className='p-6 mt-6 bg-gray-900 min-h-screen'>
        {error && (<div className='bg-yellow-100 text-yellow-800 p-4 rounded mb-6 text-sm'>
            ⚠️ Disclaimer: Movies Data might not load if you're in India due to TMDB API DNS restrictions.
            <br/>
            To Temporarily fix this, please change your DNS to <strong>Cloudflare (1.1.1.1)</strong> or <strong> Google DNS (8.8.8.8)</strong>
            I am aware of this issue and currently working on a permanent solution. Thank you for your patience!
        </div>)}
    <div className='p-6 mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-900 '>
        {movies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}/>
        ))}
    </div>
    </div>
  )
}

export default Home