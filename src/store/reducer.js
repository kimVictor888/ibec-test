import {
  CHANGE_ACTIVE_ORDER_SUCCESS,
  FETCH_GAMES_SUCCESS,
  UPDATE_GAMES_SUCCESS,
} from './actionTypes';

const initialState = {
  games: [],
  orderList: [
    { label: 'по убыванию рейтинга', value: '-rating' },
    { label: 'по возрастанию рейтинга ', value: 'rating' },
    { label: 'по убыванию даты релиза', value: '-released' },
    { label: 'по возрастанию даты релиза', value: 'released' },
  ],
  activeOrder: 0,
  initialized: false,
  totalHits: 0,
  currentPage: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        games: action.payload.games,
        totalHits: action.payload.totalHits,
        currentPage: action.payload.currentPage,
        initialized: true,
      };
    case UPDATE_GAMES_SUCCESS:
      return {
        ...state,
        games: state.games.concat(action.payload.games),
        totalHits: action.payload.totalHits,
        currentPage: action.payload.currentPage,
      };
    case CHANGE_ACTIVE_ORDER_SUCCESS:
      return { ...state, activeOrder: action.payload };
    default:
      return state;
  }
};

export default reducer;
