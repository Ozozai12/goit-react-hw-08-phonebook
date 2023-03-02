import React from 'react';
import css from './Filter.module.css';

const Filter = ({ query, onChange }) => {
  return (
    <label>
      Find contacts by name <br />
      <input
        type="text"
        value={query}
        onChange={onChange}
        className={css.input}
      />
    </label>
  );
};

export default Filter;
