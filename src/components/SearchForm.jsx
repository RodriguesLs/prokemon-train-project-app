import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

export const SearchForm = ({ handleSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    handleSearch(input);
  }

  const handleChange = e => setInput(e.target.value);

  return (
    <form className='pokemon-form' onSubmit={handleSubmit}>
      <TextField
        label="Pokemon name"
        variant="outlined"
        value={input}
        onInput={handleChange}
        size='small'
      />
      <Button type='submit' color='primary' variant="contained">Search</Button>
    </form>
  )
}
