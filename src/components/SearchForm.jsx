import React, { useState } from 'react'

export const SearchForm = props => {
  const [input, setInput] = useState('');
  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      text: input
    })
  }

  const handleChange = e => {
    setInput(e.value);
  }

  return (
    <form className='pokemon-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='search pokemon'
        value={input}
        name='text'
        className='pokemon-input'
        onChange={handleChange}
      />
      <button className='pokemon-button'>Search</button>
    </form>
  )
}
