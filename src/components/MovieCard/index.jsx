import './MovieCard.css'

function MovieCard(props) {
  const movie = props.movie

  const poster =
    movie.Poster !== 'N/A'
      ? movie.Poster
      : 'https://via.placeholder.com/300x450?text=Sin+Imagen'

  return (
    <div
      className="card"
      onClick={() => props.onSelect(movie.imdbID)}
    >
      <img src={poster} alt="" />

      <h3>{movie.Title}</h3>

      <p>{movie.Year}</p>

      <p>{movie.Type}</p>
    </div>
  )
}

export default MovieCard