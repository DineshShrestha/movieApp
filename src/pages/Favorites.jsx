import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'
import "../css/Favorite.css"
function Favorites() {
    const {favorites} = useMovieContext()

    if(favorites) 
    {
        return  (
        <div className='favorites'>
            <h2>Your Favorites</h2>
        <div className="movies-grid">
        {favorites.map(movie=><MovieCard movie={movie} key={movie.id}/>)}
            </div>
        </div>
    )
    } 

  return (
    <div className='favorites-empty'>
        <h2>No Favrite Movies yet</h2>
        <p>Start adding movies to your favorites and they will appera here</p>
    </div>
  )
}

export default Favorites