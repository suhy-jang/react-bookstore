import React from 'react';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions';
import Book from '../components/book';

const BooksList = () => {
  return (
    <table className="books-list">
      <tr>
        <th>Book ID</th>
        <th>title</th>
        <th>category</th>
      </tr>
      <tr>
        <td><Book title="code in react" category="programming" /></td>
      </tr>
    </table>
  );
};

export default connect(
  ({ books, filter }) => ({ books, filter }),
  { removeBook, changeFilter },
)(BooksList);
