import React from 'react';
import { connect } from 'react-redux';
import { removeBook } from '../actions';
import Book from '../components/book';

const BooksList = () => {
  return (
    <table className="books-list">
      <tr>
        <th>Book ID</th>
        <th>title</th>
        <th>category</th>
      </tr>
      <Book title="code in react" category="programming" />
    </table>
  );
};

export default connect(
  ({ books }) => ({ books }),
  { removeBook },
)(BooksList);
