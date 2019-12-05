import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ bookId, title, category }) => {
  return (
    <tr className="book">
      <td className="book-id">{bookId}</td>
      <td className="title">{title}</td>
      <td className="category">{category}</td>
    </tr>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
