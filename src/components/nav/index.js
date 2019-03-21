import React from 'react';
import { Link } from 'react-router-dom';
import style from './nav.module.scss';

const Nav = (props) => {
  return (
    <ul className={style.list}>
      <li className={style.item}><Link to='/' className={style.link}>Главная страница</Link></li>
      <li className={style.item}><Link to='/add-book' className={style.link}>Добавить книгу</Link></li>
    </ul>
  );
};

export default Nav;