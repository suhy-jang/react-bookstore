import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ bookId, title, category, remove }) => {
  return (
    <tr className="book">
      <td className="book-id">{bookId}</td>
      <td className="title">{title}</td>
      <td className="category">{category}</td>
      <td><button onClick={remove}>remove</button></td>
    </tr>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
