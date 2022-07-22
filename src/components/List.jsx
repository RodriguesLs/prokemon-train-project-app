import React, { useState } from 'react'

import { SearchForm } from './SearchForm'

export const List = () => {
  const [pokemons, setPokemons] = useState([])

  return (
    <div>
      <h1>Pokemon searched</h1>
      <SearchForm />
    </div>
  )
}
