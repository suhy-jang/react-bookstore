import React from 'react';

const Book = ({ title, category }) => {
  return (
    <tr className="book">
      <td className="title">{title}</td>
      <td className="category">{category}</td>
    </tr>
  );
};

export default Book;
