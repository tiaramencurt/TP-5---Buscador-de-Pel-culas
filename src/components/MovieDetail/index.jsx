import './MovieDetail.css'

function MovieDetail(props) {
  const movie = props.movie

  const poster =
    movie.Poster !== 'N/A'
      ? movie.Poster
      : 'https://via.placeholder.com/300x450?text=Sin+Imagen'

  return (
    <div className="detail">
      <h2>{movie.Title}</h2>

      <img src={poster} alt="" />

      <p><b>Año:</b> {movie.Year}</p>
      <p><b>Género:</b> {movie.Genre}</p>
      <p><b>Director:</b> {movie.Director}</p>
      <p><b>Actores:</b> {movie.Actors}</p>
      <p><b>Duración:</b> {movie.Runtime}</p>
      <p><b>Idioma:</b> {movie.Language}</p>
      <p><b>País:</b> {movie.Country}</p>
      <p><b>IMDb:</b> {movie.imdbRating}</p>
      <p><b>Sinopsis:</b> {movie.Plot}</p>
    </div>
  )
}

export default MovieDetail