import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemonList } from '../actions/PokemonActions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const PokemonList = (props) => {
  //remember the state.PokemonList is from the root reducer
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const showData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return pokemonList.data.map((file) => {
        return (
          <div>
            <p>{file.name}</p>
            <Link to={`/pokemon/${file.name}`}>View Pokemon</Link>
          </div>
        );
      });
    }

    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonList.errorMsg !== '') {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };
  return (
    <>
      <div>
        <p>Search: </p>
        <input type='text' onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => props.history.push(`/pokemon/${search}`)}>
          Search
        </button>
      </div>
      {showData()}
    </>
  );
};

export default PokemonList;
