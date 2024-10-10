import { useState } from 'react'
import { useCustomersStore } from '../../../store/customersStore';

import styles from './SearchBar.module.scss'

import SearchIcon from '../../../assets/icons/search.svg?react'

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const filterCustomersByQuery = useCustomersStore(state => state.filterCustomers);

  const searchInputHandler = (e) => {
    const trimedValue = e.target.value.trim();

    setSearchInput(trimedValue);
    filterCustomersByQuery(trimedValue);
  };

  return (
    <form className={styles.search}>
      <input
        className={styles.search__input}
        type="text"
        placeholder='Search'
        value={searchInput}
        onChange={searchInputHandler}
      />

      <SearchIcon className={styles.search__icon} />
    </form>
  )
}
