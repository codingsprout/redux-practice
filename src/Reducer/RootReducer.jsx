import { combineReducers } from 'redux';
import PokemonListReducer from './PokemonListReducer';
import PokemonMulipleReducer from './PokemonMultipleReducer';

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMulipleReducer,
});

export default RootReducer;
