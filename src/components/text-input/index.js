import React, { useState, useEffect } from 'react';
import style from './text-input.module.scss';

const TextInput = ({ name, data, editing, onDataChange, valid, placeholder }) => {
  const [isValid, setIsValid] = useState(true);
  const onValueChange = evt => {
    onDataChange(name, evt.target.value);
    if (!isValid) {
      setIsValid(true);
    }
  };

  useEffect(() => {
    setIsValid(valid[name]);
  }, [valid]);

  const constructInputClass = (isValid, isEditing) => {
    const arr = [style.input];
    if (!isValid) {
      arr.push(style[`input--invalid`]);
    }
    if (isEditing) {
      arr.push(style[`input--active`]);
    }
    return arr.join(` `);
  };

  return (
    <label className={style.label}>
      <span className={style.name}>{name}</span>
      <input
        className={constructInputClass(isValid, editing)}
        type="text"
        name={name}
        defaultValue={data}
        disabled={!editing}
        onChange={onValueChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default TextInput;
