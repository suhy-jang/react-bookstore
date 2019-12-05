import React from 'react';

const Book = ({ title, category }) => {
  return (
    <div className="book">
      <div className="title">{title}</div>
      <diiv className="category">{category}</diiv>
    </div>
  );
};

export default Book;
