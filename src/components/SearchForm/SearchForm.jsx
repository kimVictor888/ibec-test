import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchGames } from '../../store/actions';
import './SearchForm.scss';

const SearchForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  const { orderList } = state;
  const [searchInput, setSearchInput] = useState('');

  const handleChangeInput = (e) => setSearchInput(e.target.value);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(fetchGames(1, orderList[0].value, null, searchInput)).then(() =>
      history.push('/')
    );
  };

  return (
    <form onSubmit={handleSubmitForm} className='search-form'>
      <input
        className='search-form__input'
        type='text'
        value={searchInput}
        placeholder='Введите название игры'
        onChange={handleChangeInput}
      />
      <button type='submit' className='search-form__btn'>
        Поиск
      </button>
    </form>
  );
};

export default SearchForm;
