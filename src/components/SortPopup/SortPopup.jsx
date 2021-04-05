import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { changeActiveOrder } from '../../store/actions';
import './SortPopup.scss';

const SortPopup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [visiblePopup, setVisiblePopup] = useState(false);
  const state = useSelector((state) => state);
  const {
    orderList,
    activeOrder,
    currentPlatformId,
    currentSearchString,
  } = state;

  const sortRef = useRef();

  const activeLabel = orderList[activeOrder].label;

  useEffect(() => {
    document.body.addEventListener('click', handleClickOutsideSort);
    return () => {
      document.body.removeEventListener('click', handleClickOutsideSort);
    };
  }, []);

  const toggleVisiblePopup = () => setVisiblePopup(!visiblePopup);

  const handleClickOnType = async (i, item) => {
    dispatch(
      changeActiveOrder(i, item.value, currentPlatformId, currentSearchString)
    );
    setVisiblePopup(false);
  };

  const handleClickOutsideSort = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  return (
    <div ref={sortRef} className='sort'>
      <button
        disabled={history.location.pathname !== '/'}
        className='sort__btn'
        onClick={toggleVisiblePopup}>
        Сортировка по: <span className='capitalize'>{activeLabel}</span>
      </button>
      {visiblePopup && (
        <ul className='sort__popup'>
          {orderList.map((item, i) => (
            <li
              key={`${item.value}_${i}`}
              onClick={() => handleClickOnType(i, item)}
              className='sort__popup-item capitalize'>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortPopup;
