import { useState } from 'react'
import axios from 'axios'
import './App.css'

import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'

function App() {
  const [movies, setMovies] = useState([])
  const [movieDetail, setMovieDetail] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [noResults, setNoResults] = useState(false)

  const apiKey = '6cd601fa'

  const searchMovies = async (title) => {
    setLoading(true)
    setError('')
    setNoResults(false)
    setMovieDetail(null)

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`
      )

      if (response.data.Response === 'True') {
        setMovies(response.data.Search)
      } else {
        setMovies([])
        setNoResults(true)
      }
    } catch {
      setError('Ocurrió un error al buscar.')
    }

    setLoading(false)
  }

  const getMovieDetail = async (id) => {
    setLoading(true)
    setError('')

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`
      )

      setMovieDetail(response.data)
    } catch {
      setError('Error al cargar detalle.')
    }

    setLoading(false)
  }

  return (
    <div className="container">
      <h1>Buscador IMDb</h1>

      <SearchBar onSearch={searchMovies} />

      {loading && <Loader />}

      {error && <ErrorMessage message={error} />}

      {noResults && <p>No se encontraron resultados.</p>}

      <MovieList movies={movies} onSelect={getMovieDetail} />

      {movieDetail && <MovieDetail movie={movieDetail} />}
    </div>
  )
}

export default App
