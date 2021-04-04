import Aside from '../../components/Aside/Aside';
import GamesList from '../../components/GamesList/GamesList';
import './Gallery.scss';

const Gallery = () => {
  return (
    <section className='gallery'>
      <Aside />
      <GamesList />
    </section>
  );
};

export default Gallery;
