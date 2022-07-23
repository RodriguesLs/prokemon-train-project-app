import React, { useState } from 'react';
import { SearchForm } from './SearchForm';
import { getPokemon } from '../services/pokemon';

export const List = () => {
  const [abilities, setAbilities] = useState([])

  const handleSearch = async name => {
    getPokemon(name)
      .then(res => {
        setAbilities(res.data)
      }).catch(err => {
        console.log('err', err)
      });
  }

  return (
    <div>
      <h1>Pokemon searched</h1>
      <SearchForm handleSearch={handleSearch} />
      <div>
        {abilities}
      </div>
    </div>
  )
}
