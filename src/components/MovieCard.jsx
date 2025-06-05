import React from 'react'
import {useState} from 'react'

const MovieCard = ({movie}) => {
    const [isHovered, setIsHovered] = useState(false)
    const imageURL = "https://image.tmdb.org/t/p/w500"
    
    const truncateOverview = (text, wordLimit) => {
        if(!text) return ""
        const words = text.split(" ")
        if(words.lenght <= wordLimit){
          return text
        }
        return words.slice(0,wordLimit).join(" ") + "..."
    }

    

  return (
    <div className='relative bg-white rounded-lg shadow hover:shadow-lg transition duration-500'
    onMouseEnter = {()=> setIsHovered(true)}
    onMouseLeave = {() => setIsHovered(false)}>
        <img 
        className='w-full h-72 object-cover rounded-t'
        
        src={`${imageURL}${movie.poster_path}`}
        alt={movie.title}
        />
        <div
        className='p-4'>
            <h2 className='text-lg font-bold'>{movie.title}</h2>
            <p className='text-sm text-gray-600'>Rating: {movie.vote_average}</p>
            {isHovered && (<div className="relative bottom-0 left-0 right-0 bg-yellow-400 font-medium bg-opacity-70 text-slate-800  text-justify text-sm p-3 rounded-lg transition-opacity duration-300">
              {truncateOverview(movie.overview,20)}
            </div>)}
        </div>
        </div>
  )
}

export default MovieCard