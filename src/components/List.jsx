import React, { useState } from 'react';
import { SearchForm } from './SearchForm';
import { getPokemon } from '../services/pokemon';
import { AppBar, Toolbar, Card, Divider, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export const List = () => {
  const classes = useStyles();
  const [abilities, setAbilities] = useState([])
  const [error, setError] = useState('')

  const handleSearch = async name => {
    getPokemon(name)
      .then(res => {
        setError('')
        setAbilities(res.data)
      }).catch(err => {
        setAbilities([])
        setError(err.response.data.message)
      });
  }

  return (
    <>
      <AppBar color='secondary'>
        <Toolbar className='toolbar'>
          <h1>Search a pokemon abilities by name</h1>
        </Toolbar>
      </AppBar>
      <SearchForm handleSearch={handleSearch} />
      {
        (abilities.length > 0 || error !== '') &&
        <Card className='card-abilities' variant='outlined'>
          PokemonName
          <Divider />
          {
            error === '' &&
            <>
              <h4>
                Powers:
              </h4>
              <div className={classes.root}>
                {
                  abilities.map((a, i) => {
                    return (
                      <Chip
                        className=''
                        key={i}
                        label={a}
                        clickable
                        color="secondary"
                      />
                    )
                  })
                }
              </div>
            </>
          }
          { error !== '' && <h3 style={{ color: 'red' }}>{ error }</h3> }
        </Card>
      }
    </>
  )
}
