import React from 'react';
import { category } from '../assets/manifest.json';

const BooksForm = () => {
  const renderOption = (data) => {
    const { value } = data;
    return <option value={value.toLowerCase()}>{value}</option>;
  };

  const title = 'some title';
  const categoryValue = 'some category';

  return (
    <form>
      <input placeholder="Book title" value={title} />
      <select value={categoryValue}>
        {category.map(data => renderOption(data))}
      </select>
      <button>Submit</button>
    </form>
  );
};

export default BooksForm;
