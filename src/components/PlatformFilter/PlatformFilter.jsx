import clsx from 'clsx';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchGames, fetchPlatforms } from '../../store/actions';
import './PlatformFilter.scss';

const PlatformFilter = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    orderList,
    activeOrder,
    platforms,
    currentPlatformId,
    currentSearchString,
  } = state;

  useEffect(() => dispatch(fetchPlatforms()), [dispatch]);

  const handleClickPlatform = (platform) => {
    dispatch(
      fetchGames(1, orderList[activeOrder].value, platform, currentSearchString)
    );
  };
  return (
    <ul className='platform-filter'>
      {platforms.map((item, i) => (
        <li
          onClick={() => handleClickPlatform(item.id)}
          className={clsx(
            'platform-filter__item',
            item.id === currentPlatformId && 'active'
          )}
          key={`${item}_${i}`}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default PlatformFilter;
