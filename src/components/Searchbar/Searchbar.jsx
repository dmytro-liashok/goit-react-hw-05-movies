import css from './SearchBar.module.css';
import PropTypes from 'prop-types';

export default function SearchBar({ onClickSubmit }) {
  return (
    <div
      className={css.bodySearchBar}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <form className={css.bar} onSubmit={onClickSubmit}>
        <input
          type="search"
          name="search"
          pattern=".*\S.*"
          required
          autoComplete="off"
        ></input>
        <button type="submit" className={css.searchBtn}>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
};
