import {
  CHANGE_ACTIVE_ORDER_SUCCESS,
  CLEAR_CURRENT_GAME,
  FETCH_GAMES_SUCCESS,
  FETCH_GAME_SUCCESS,
  FETCH_PLATFORMS_SUCCESS,
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
  platforms: [],
  currentPlatformId: null,
  activeOrder: 0,
  initialized: false,
  totalHits: 0,
  currentPage: 1,
  currentSearchString: '',
  currentGame: null,
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
        currentPlatformId: action.payload.currentPlatformId,
        currentSearchString: action.payload.currentSearchString,
      };
    case UPDATE_GAMES_SUCCESS:
      return {
        ...state,
        games: state.games.concat(action.payload.games),
        totalHits: action.payload.totalHits,
        currentPage: action.payload.currentPage,
      };
    case FETCH_PLATFORMS_SUCCESS:
      return {
        ...state,
        platforms: action.payload,
      };
    case CHANGE_ACTIVE_ORDER_SUCCESS:
      return { ...state, activeOrder: action.payload };
    case FETCH_GAME_SUCCESS:
      return { ...state, currentGame: action.payload };
    case CLEAR_CURRENT_GAME:
      return { ...state, currentGame: null };
    default:
      return state;
  }
};

export default reducer;
