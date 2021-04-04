import {
  CHANGE_ACTIVE_ORDER_SUCCESS,
  FETCH_GAMES_SUCCESS,
  FETCH_PLATFORMS_SUCCESS,
  UPDATE_GAMES_SUCCESS,
} from './actionTypes';
import gamesAxios from '../gamesAxios';

const API_KEY = '9ef18d95d97544dcb440f306bc725c13';

const fetchGamesSuccess = (
  games,
  totalHits,
  currentPage,
  currentPlatformId,
  currentSearchString
) => ({
  type: FETCH_GAMES_SUCCESS,
  payload: {
    games,
    totalHits,
    currentPage,
    currentPlatformId,
    currentSearchString,
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

const fetchPlatformsSuccess = (platforms) => ({
  type: FETCH_PLATFORMS_SUCCESS,
  payload: platforms,
});

export const fetchGames = (page, order, platform = null, search = '') => async (
  dispatch
) => {
  try {
    const queries = {
      params: {
        ordering: order,
        page,
        key: API_KEY,
      },
    };

    if (platform) queries.params.parent_platforms = platform;

    if (search) queries.params.search = search;

    const response = await gamesAxios.get('/games', queries);

    dispatch(
      fetchGamesSuccess(
        response.data.results,
        response.data.count,
        ++page,
        platform ? platform : null,
        search ? search : ''
      )
    );
  } catch (e) {
    console.log(e);
  }
};

export const updateGames = (
  page,
  order,
  platform = null,
  search = ''
) => async (dispatch) => {
  try {
    const queries = {
      params: {
        ordering: order,
        page,
        key: API_KEY,
      },
    };

    if (platform) queries.params.parent_platforms = platform;

    if (search) queries.params.search = search;

    const response = await gamesAxios.get('/games', queries);

    dispatch(
      updateGamesSuccess(response.data.results, response.data.count, ++page)
    );
  } catch (e) {
    console.log(e);
  }
};

export const changeActiveOrder = (i, order, platform, search) => async (
  dispatch
) => {
  await dispatch(changeActiveOrderSuccess(i));
  dispatch(fetchGames(1, order, platform, search));
};

export const fetchPlatforms = () => async (dispatch) => {
  try {
    const response = await gamesAxios.get(
      `/platforms/lists/parents?key=${API_KEY}`
    );
    console.log(response);
    dispatch(fetchPlatformsSuccess(response.data.results));
  } catch (e) {
    console.log(e);
  }
};
