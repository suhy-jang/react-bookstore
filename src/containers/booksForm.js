import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import options from '../assets/manifest.json';
import generateId from '../assets/utils';

const BooksForm = ({ createBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [blank, setBlank] = useState(false);

  useEffect(() => {
    if (title && category) {
      setBlank(false);
    }
  }, [title, category]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'title') setTitle(value);
    if (name === 'category') setCategory(value);
  };

  const checkBlank = () => {
    if (!title || !category) {
      setBlank(true);
      return true;
    }
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkBlank()) return;

    const newBook = { bookId: generateId(), title, category };
    createBook(newBook);
    setTitle('');
    setCategory('');
  };

  const renderOption = (data) => {
    const { id, value } = data;
    return (
      <option key={id} value={value}>
        {value}
      </option>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="add-book">
      <input
        name="title"
        placeholder="Book title"
        onChange={handleChange}
        value={title}
        className="title"
      />
      <select name="category" value={category} onChange={handleChange} className="category">
        <option value="">__Choose_Category__</option>
        {options.category.map(data => renderOption(data))}
      </select>
      <button>Add book</button>
      <div>{blank ? 'It needs to be filled with title and category' : ''}</div>
    </form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(
  null,
  { createBook },
)(BooksForm);
