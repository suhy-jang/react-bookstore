import React from 'react';

const Book = ({ bookId, title, category }) => {
  return (
    <tr className="book">
      <td className="book-id">{bookId}</td>
      <td className="title">{title}</td>
      <td className="category">{category}</td>
    </tr>
  );
};

export default Book;
