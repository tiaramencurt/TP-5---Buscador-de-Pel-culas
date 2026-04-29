import './MovieList.css'
import MovieCard from '../MovieCard'

function MovieList(props) {
  return (
    <div className="list">
      {props.movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onSelect={props.onSelect}
        />
      ))}
    </div>
  )
}

export default MovieList