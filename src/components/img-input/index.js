import React from 'react';
import style from './img-input.module.scss';

const ImgInput = ({name, editing, onDataChange, img}) => {
  const onImgUpload = (evt) => {
    const input = evt.target;
    const reader = new FileReader();

    reader.onload = () => {
      const url = reader.result;
      onDataChange(name, url);
    }

    reader.readAsDataURL(input.files[0]);
  };

  const noImage = process.env.PUBLIC_URL + '/no-img.svg'
  const cls = editing ? [style.label, style[`label--active`]].join(` `) : style.label;

  return (
    <div className={style.wrapper}>
      <label className={cls}>
        <input type="file" name="img" id="img-input" className={style.input} onChange={onImgUpload} disabled={!editing}/>
      </label>
      <img src={img ? img : noImage} alt={name} className={style.img}/>
    </div>
  );
};

export default ImgInput;