import React from 'react';
import style from './star.module.scss';

const Star = ({ value, onClick, onMouseEnter, onMouseLeave, active, disabled }) => {
  const cls = active
    ? [style.button, style[`button--active`]].join(` `)
    : style.button;

  return (
    <button
      type="button"
      value={value}
      onClick={() => onClick(value)}
      className={cls}
      disabled={disabled}
      onMouseEnter={() => onMouseEnter(value)}
      onMouseLeave={() => onMouseLeave()}
    >
      <svg height="25" width="23" viewBox="0 0 20 19" className={style.star}>
        <polygon
          points="9.9, 0, 3.3, 20.7, 19.8, 7.5, 0, 7.5, 16.5, 20.7"
          style={{ fillRule: `nonzero` }}
        />
      </svg>
    </button>
  );
};

export default Star;
