import { FETCH_GAMES_SUCCESS } from './actionTypes';
import gamesAxios from '../gamesAxios';

const API_KEY = '9ef18d95d97544dcb440f306bc725c13';

const fetchGamesSuccess = (games) => ({
  type: FETCH_GAMES_SUCCESS,
  payload: games,
});

export const fetchGames = (page) => async (dispatch) => {
  try {
    const response = await gamesAxios.get(
      `/games?page=${page}&page_size=40&key=${API_KEY}`
    );
    console.log(response);
    dispatch(fetchGamesSuccess(response.data.results));
  } catch (e) {
    console.log(e);
  }
};
