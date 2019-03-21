import React from 'react';
import style from './book-form.module.scss';

const Controls = ({ editing, creating, setEditing, onAdd, onUpdate }) => {
  if (creating) {
    return (
      <button type="button" onClick={onAdd} className={style.btn}>
        Добавить книгу
      </button>
    );
  } else if (editing) {
    return (
      <button type="button" onClick={onUpdate} className={style.btn}>
        Сохранить изменения
      </button>
    );
  } else {
    return (
      <button type="button" onClick={() => setEditing(true)} className={style.btn}>
        Редактировать книгу
      </button>
    );
  }
};

export default Controls;
