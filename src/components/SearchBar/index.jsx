import { useState } from 'react'
import './SearchBar.css'

function SearchBar(props) {
  const [text, setText] = useState('')

  const buscar = () => {
    if (text.trim() !== '') {
      props.onSearch(text)
    }
  }

  const enter = (e) => {
    if (e.key === 'Enter') {
      buscar()
    }
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Buscar película..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={enter}
      />

      <button onClick={buscar}>Buscar</button>
    </div>
  )
}

export default SearchBar