import React, { useState } from 'react';
import { SearchForm } from './SearchForm';
import { getPokemon } from '../services/pokemon';
import { AppBar, Toolbar } from '@material-ui/core';

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
    <>
      <AppBar>
        <Toolbar className='toolbar'>
          <h1>Search a pokemon abilities by name</h1>
        </Toolbar>
      </AppBar>
      <SearchForm handleSearch={handleSearch} />
      <div>
        {abilities}
      </div>
    </>
  )
}
