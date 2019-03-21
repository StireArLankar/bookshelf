import React from 'react';
import BookPrewiew from '../book-preview';

const BookList = (props) => {
  const renderList = (books) => {
    return books.map((book) => {
      return <li key={book.id}><BookPrewiew book={book}/></li>
    })
  };


  return (
    <ul className='list'>
      {renderList(props.books)}
    </ul>
  );
};

export default BookList;