import React from 'react';

const BooksList = () => {
  return (
    <table className="books-list">
      <tr>
        <th>Book ID</th>
        <th>title</th>
        <th>category</th>
      </tr>
      <tr>
        <td>1</td>
        <td>code in react</td>
        <td>programming</td>
      </tr>
    </table>
  );
};

export default BooksList;
