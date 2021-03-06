import { Link } from 'react-router-dom';
import './GameCard.scss';

const GameCard = ({ game }) => {
  return (
    <Link to={`/game/${game.slug}`} className='game-card__link'>
      <div className='game-card'>
        <img
          className='game-card__poster'
          src={
            game.background_image
              ? game.background_image
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU'
          }
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
    </Link>
  );
};

export default GameCard;
