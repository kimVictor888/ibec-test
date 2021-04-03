import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameCard from '../GameCard/GameCard';
import { fetchGames } from '../../store/actions';
import './GamesList.scss';
import InfiniteScroll from 'react-infinite-scroller';

const GamesList = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(fetchGames(1));
  }, [dispatch]);

  return (
    <InfiniteScroll
      className='games-list'
      pageStart={0}
      loadMore={() => dispatch(fetchGames(games.length / 40 + 1))}
      hasMore={true || false}
      initialLoad={false}
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
