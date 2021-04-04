import {
  CHANGE_ACTIVE_ORDER_SUCCESS,
  FETCH_GAMES_SUCCESS,
  UPDATE_GAMES_SUCCESS,
} from './actionTypes';
import gamesAxios from '../gamesAxios';

const API_KEY = '9ef18d95d97544dcb440f306bc725c13';

const fetchGamesSuccess = (games, totalHits, currentPage) => ({
  type: FETCH_GAMES_SUCCESS,
  payload: {
    games,
    totalHits,
    currentPage,
  },
});

const updateGamesSuccess = (games, totalHits, currentPage) => ({
  type: UPDATE_GAMES_SUCCESS,
  payload: {
    games,
    totalHits,
    currentPage,
  },
});

const changeActiveOrderSuccess = (i) => ({
  type: CHANGE_ACTIVE_ORDER_SUCCESS,
  payload: i,
});

export const fetchGames = (page, order) => async (dispatch) => {
  try {
    const response = await gamesAxios.get(
      `/games?ordering=${order}&page=${page}&key=${API_KEY}`
    );
    dispatch(
      fetchGamesSuccess(response.data.results, response.data.count, ++page)
    );
  } catch (e) {
    console.log(e);
  }
};

export const updateGames = (page, order) => async (dispatch) => {
  try {
    const response = await gamesAxios.get(
      `/games?ordering=${order}&page=${page}&key=${API_KEY}`
    );
    console.log(response.data);
    dispatch(
      updateGamesSuccess(response.data.results, response.data.count, ++page)
    );
  } catch (e) {
    console.log(e);
  }
};

export const changeActiveOrder = (i, order) => async (dispatch) => {
  await dispatch(changeActiveOrderSuccess(i));
  dispatch(fetchGames(1, order));
};
