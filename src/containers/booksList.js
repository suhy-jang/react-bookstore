import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../actions';
import Book from '../components/book';

const BooksList = ({ books }) => {
  const renderBooks = () => {
    return books.map(book => <Book key={book.bookId} {...book} />);
  };
  return (
    <table className="books-list">
      <thead>
        <tr>
          <th>Book ID</th>
          <th>title</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>{renderBooks()}</tbody>
    </table>
  );
};

BooksList.defaultProps = { books: [{}] };

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      bookId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ),
  removeBook: PropTypes.func.isRequired,
};

export default connect(
  ({ books }) => ({ books }),
  { removeBook },
)(BooksList);
