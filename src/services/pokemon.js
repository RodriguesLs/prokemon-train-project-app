import axios from 'axios';

export const getPokemon = async (name) => await axios.get(`http://localhost:3030/api/pokemons/${name}`);
