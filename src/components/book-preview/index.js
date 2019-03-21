import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../rating';
import style from './book-preview.module.scss';

const BookPreview = ({book: {id, rating, title}}) => {
  return (
    <Link to={`/${id}`} className={style.link}>
      <h3 className={style.title}>{title}</h3>
      <Rating value={rating} />
    </Link>
  );
};

export default BookPreview;