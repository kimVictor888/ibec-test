import clsx from 'clsx';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchGames, fetchPlatforms } from '../../store/actions';
import './PlatformFilter.scss';

const PlatformFilter = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [visiblePopup, setVisiblePopup] = useState(false);
  const state = useSelector((state) => state);
  const {
    orderList,
    activeOrder,
    platforms,
    currentPlatformId,
    currentSearchString,
  } = state;

  const filterRef = useRef();

  useEffect(() => {
    dispatch(fetchPlatforms());
    document.body.addEventListener('click', handleClickOutsidePlatform);
    return () => {
      document.body.removeEventListener('click', handleClickOutsidePlatform);
    };
  }, [dispatch]);

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleClickPlatform = (platform) => {
    if (history.location.pathname === '/') {
      dispatch(
        fetchGames(
          1,
          orderList[activeOrder].value,
          platform,
          currentSearchString
        )
      );
      setVisiblePopup(false);
    }
  };

  const handleClickOutsidePlatform = (e) => {
    if (!e.path.includes(filterRef.current)) {
      setVisiblePopup(false);
    }
  };

  return (
    <div ref={filterRef} className='filter'>
      <button
        disabled={history.location.pathname !== '/'}
        className='platform-filter__btn'
        onClick={toggleVisiblePopup}>
        Фильтр по платформе
      </button>
      {visiblePopup && (
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
      )}
    </div>
  );
};

export default PlatformFilter;
