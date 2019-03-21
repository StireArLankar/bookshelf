import React from 'react';
import BookForm from '../components/book-form';

const AddBook = (props) => {
  return (
    <BookForm creating={true} history={props.history} />
  );
};

export default AddBook;