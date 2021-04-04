import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames, updateGames } from '../../store/actions';
import GameCard from '../GameCard/GameCard';
import InfiniteScroll from 'react-infinite-scroller';
import './GamesList.scss';

const GamesList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    games,
    currentPage,
    totalHits,
    initialized,
    orderList,
    activeOrder,
    currentPlatformId,
    currentSearchString,
  } = state;

  useEffect(() => {
    if (!initialized) {
      dispatch(fetchGames(1, orderList[activeOrder].value));
    }
  }, [dispatch, currentPage, initialized, orderList, activeOrder]);

  return (
    <InfiniteScroll
      className='games-list'
      pageStart={currentPage}
      loadMore={() =>
        dispatch(
          updateGames(
            currentPage,
            orderList[activeOrder].value,
            currentPlatformId,
            currentSearchString
          )
        )
      }
      hasMore={totalHits > games.length}
      threshold={100}
      loader={
        <div className='loader' key='loading'>
          Loading ...
        </div>
      }>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </InfiniteScroll>
  );
};

export default GamesList;
