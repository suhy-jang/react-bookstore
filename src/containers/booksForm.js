import React from 'react';
import { category } from '../assets/manifest.json';

const BooksForm = () => {
  const renderOption = (data) => {
    const { id, value } = data;
    return (
      <option key={id} value={value}>
        {value}
      </option>
    );
  };

  return (
    <form>
      <input placeholder="Book title" />
      <select>{category.map(data => renderOption(data))}</select>
      <button>Submit</button>
    </form>
  );
};

export default BooksForm;
