import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { clearCurrentGame, fetchGame } from '../../store/actions';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Game.scss';

const Game = ({ match }) => {
  const dispatch = useDispatch();
  const slug = match.params.id;
  const currentGame = useSelector((state) => state.currentGame);

  useEffect(() => {
    dispatch(fetchGame(slug));
    return () => dispatch(clearCurrentGame());
  }, [dispatch, slug]);

  console.log(currentGame);

  return (
    <>
      {currentGame && (
        <section className='game'>
          <img
            src={currentGame.background_image}
            alt='cover'
            className='game__cover'
          />
          <div className='game__info'>
            <h1 className='game__title'>{currentGame.name}</h1>
            <p className='game__released'>Released: {currentGame.released}</p>
            <p className='game__rating'>Rating: {currentGame.rating}</p>
            <div className='game__section'>
              <p className='game__section-title'>Developers:</p>
              <ul className='game__section-list'>
                {currentGame.developers.map((developer) => (
                  <li className='game__section-item' key={developer.id}>
                    {developer.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className='game__section '>
              <p className='game__section-title'>Genres:</p>
              <ul className='game__section-list'>
                {currentGame.genres.map((genre) => (
                  <li className='game__section-item' key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className='game__section '>
              <p className='game__section-title'>Platforms:</p>
              <ul className='game__section-list'>
                {currentGame.parent_platforms.map((platform) => (
                  <li className='game__section-item' key={platform.platform.id}>
                    {platform.platform.name}
                  </li>
                ))}
              </ul>
            </div>
            <a className='game__website' href={currentGame.website}>
              {currentGame.website}
            </a>
            <p className='game__about'>{currentGame.description_raw}</p>
          </div>
          <div className='game__screenshots'>
            <Carousel
              autoPlay
              infiniteLoop
              interval={5000}
              className='carousel'>
              {currentGame.screenshots.map((screen) => (
                <div key={screen.id}>
                  <img
                    className='game__screenshot'
                    src={screen.image}
                    alt='screenshot'
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      )}
    </>
  );
};

export default Game;
