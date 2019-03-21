import React, { useContext } from 'react';
import BookList from '../components/book-list';
import BookContext from '../context/book-context';

const Main = (props) => {
  const context = useContext(BookContext);
  return (
    <div>
      <BookList books={context.books} />
    </div>
  );
};

export default Main;