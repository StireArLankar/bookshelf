import React, { useState, useContext, useEffect } from 'react';
import BookForm from '../components/book-form';
import BookContext from '../context/book-context';

const Book = (props) => {
  const [book, setBook] = useState({});
  const context = useContext(BookContext);
  const id = props.match.params.id;
  
  useEffect(() => {
    const temp = context.books.find((book) => Number(book.id) === Number(id));
    setBook(temp);
  }, [context.books]);

  return (
    <BookForm data={book} history={props.history} />
  );
};

export default Book;