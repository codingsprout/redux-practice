const initialState = {
  loading: false,
  data: {},
  errorMsg: '',
};

const PokemonMulipleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POKEMON_MULTIPLE_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };

    case 'POKEMON_MULTIPLE_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to find pokemon',
      };

    case 'POKEMON_MULTIPLE_SUCCESS':
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: {
          //make sure to create copy of initial state first, since you have to first
          //access the initial data and then go into further data, data within data
          ...state.data,

          // const test = {
          // 	pikachu: {abilities: [name of abilities]},
          // 	bulbasaur: {abilities: [name of abilities]},
          // }
          [action.pokemonName]: action.payload,
        },
      };

    default:
      return state;
  }
};

export default PokemonMulipleReducer;
