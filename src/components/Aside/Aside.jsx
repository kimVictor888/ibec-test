import PlatformFilter from '../PlatformFilter/PlatformFilter';
import SearchForm from '../SearchForm/SearchForm';
import SortPopup from '../SortPopup/SortPopup';
import './Aside.scss';

const Aside = () => {
  return (
    <aside className='aside'>
      <SearchForm />
      <SortPopup />
      <PlatformFilter />
    </aside>
  );
};

export default Aside;
