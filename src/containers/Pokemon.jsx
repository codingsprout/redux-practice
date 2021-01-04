import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemon } from '../actions/PokemonActions';
import _ from 'lodash';
import PokemonList from './PokemonList';

const Pokemon = (props) => {
  //props is from the url
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);

  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, []);

  const showData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];

      return (
        <>
          <div>
            <h1>Sprites</h1>
            <img src={pokeData.sprites.front_default} alt='' />
            <img src={pokeData.sprites.back_default} alt='' />
            <img src={pokeData.sprites.front_shiny} alt='' />
            <img src={pokeData.sprites.back_shiny} alt='' />
          </div>

          <div>
            <h1>Stats</h1>
            {pokeData.stats.map((stat) => {
              return (
                <p>
                  {stat.stat.name} : {stat.base_stat}
                </p>
              );
            })}
          </div>
          <div>
            <h1>Abilities</h1>
            {pokeData.abilities.map((ability) => {
              return <p>{ability.ability.name}</p>;
            })}
          </div>
        </>
      );
    }

    if (pokemonState.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonState.errorMsg !== '') {
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>error getting pokemon data</p>;
  };

  return (
    <div>
      <h1>{pokemonName}</h1>
      {showData()}
    </div>
  );
};

export default Pokemon;
