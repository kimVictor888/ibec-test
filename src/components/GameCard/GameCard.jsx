import './GameCard.scss';

const GameCard = ({ game }) => {
  return (
    <div className='game-card'>
      <img
        className='game-card__poster'
        src={game.background_image}
        alt='poster'
      />
      <div className='game-card__info'>
        <h3 className='game-card__title'>{game.name}</h3>
        <p className='game-card__rating'>
          <span className='semi-bold'>Rating: </span>
          {game.rating}
        </p>
        <p className='game-card__release'>
          <span className='semi-bold'>Released: </span>
          {game.released}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
