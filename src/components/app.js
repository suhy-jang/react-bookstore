import React from 'react';
import BooksList from '../containers/booksList';
import BooksForm from '../containers/booksForm';

function App() {
  return (
    <div className="app">
      <BooksForm />
      <BooksList />
    </div>
  );
}

export default App;
