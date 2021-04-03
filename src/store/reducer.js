import { FETCH_GAMES_SUCCESS } from './actionTypes';

const initialState = {
  games: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES_SUCCESS:
      return { ...state, games: [...state.games, ...action.payload] };
    default:
      return state;
  }
};

export default reducer;
