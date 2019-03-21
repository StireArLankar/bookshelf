import React, { useState, useEffect } from 'react';
import Star from '../star';
import style from './rating.module.scss';

const Rating = ({ value, editing, onDataChange }) => {
  const [hoverRating, setHoverRating] = useState(value);

  useEffect(() => {
    setHoverRating(value)
  }, [value]);

  const onClick = value => {
    onDataChange && onDataChange(`rating`, value);
  };

  const onMouseEnter = value => {
    if (!editing) {
      return;
    }
    setHoverRating(value);
  }

  const onMouseLeave = () => {
    if (!editing) {
      return;
    }
    setHoverRating(value);
  }

  const renderStars = value => {
    const arr = [1, 2, 3, 4, 5];
    return arr.map(number => {
      return (
        <Star
          key={number}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          value={number}
          active={value >= number}
          disabled={!editing}
        />
      );
    });
  };

  return (
    <div className={style.wrapper}>
      {renderStars(hoverRating)}
    </div>
  );
};

export default Rating;
