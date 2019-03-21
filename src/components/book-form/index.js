import React, { useEffect, useState, useContext } from 'react';
import TextInput from '../text-input';
import ImgInput from '../img-input';
import BookContext from '../../context/book-context';
import Rating from '../rating';
import Controls from './controls';
import style from './book-form.module.scss';
import {
  authorValidation,
  descValidation,
  ISBNValidation,
  titleValidation,
  yearValidation
} from './validations';

const BookForm = ({ data = {}, creating, history }) => {
  const [editing, setEditing] = useState(creating);
  const [state, setState] = useState(data);
  const [valid, setValid] = useState({
    title: true,
    description: true,
    ISBN: true,
    author: true,
    year: true
  });
  const context = useContext(BookContext);

  useEffect(() => {
    setState(data);
  }, [data]);

  const onDataChange = (name, value) => {
    const temp = { ...state, [name]: value };
    setState(temp);
  };

  const validateFields = () => {
    const checkObj = {};
    checkObj.author = authorValidation(state.author);
    checkObj.description = descValidation(state.description);
    checkObj.ISBN = ISBNValidation(state.ISBN);
    checkObj.title = titleValidation(state.title);
    checkObj.year = yearValidation(state.year);
    return checkObj;
  };

  const onAdd = () => {
    const checkObj = validateFields();
    const error = Object.values(checkObj).some(check => check === false);
    if (!error) {
      context.addBook(state);
      history.push(`/`);
    } else {
      commitSudoku(checkObj);
    }
  };

  const onUpdate = () => {
    const checkObj = validateFields();
    const error = Object.values(checkObj).some(check => check === false);
    if (!error) {
      context.updateBook(state, state.id);
      history.push(`/`);
    } else {
      commitSudoku(checkObj);
    }
  };

  const commitSudoku = checkObj => {
    setValid(checkObj);
  };

  return (
    <form className={style.form}>
      <ImgInput
        img={state.cover}
        name={'cover'}
        editing={editing}
        onDataChange={onDataChange}
      />
      <TextInput
        name={'title'}
        data={state.title}
        editing={editing}
        onDataChange={onDataChange}
        valid={valid}
        placeholder={`Title`}
      />
      <TextInput
        name={'description'}
        data={state.description}
        editing={editing}
        onDataChange={onDataChange}
        valid={valid}
        placeholder={`Description`}
      />
      <TextInput
        name={'author'}
        data={state.author}
        editing={editing}
        onDataChange={onDataChange}
        valid={valid}
        placeholder={`Author`}
      />
      <TextInput
        name={'ISBN'}
        data={state.ISBN}
        editing={editing}
        onDataChange={onDataChange}
        valid={valid}
        placeholder={`1234`}
      />
      <TextInput
        name={'year'}
        data={state.year}
        editing={editing}
        onDataChange={onDataChange}
        valid={valid}
        placeholder={`2000`}
      />
      <Rating
        value={state.rating}
        editing={editing}
        onDataChange={onDataChange}
      />
      <Controls
        creating={creating}
        editing={editing}
        setEditing={setEditing}
        onAdd={onAdd}
        onUpdate={onUpdate}
      />
    </form>
  );
};

BookForm.defaultProps = {
  data: {
    title: '',
    description: '',
    author: '',
    ISBN: '',
    year: ''
  }
};

export default BookForm;
