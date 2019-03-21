import React, { useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import BookContext from '../context/book-context';
import Nav from '../components/nav';
import Main from '../pages/main';
import AddBook from '../pages/add-book';
import Book from '../pages/book';
import style from './app.module.scss';

const App = (props) =>  {
  const [books, setBooks] = useState([]);
  const [currentId, setCurrentId] = useState(0);

  const fetchBooks = async () => {
    const url = process.env.PUBLIC_URL + '/books.json';
    const {books} = await fetch(url).then(res => res.json())
    return books;
  }

  const getLocalBooks = () => {
    const cachedHits = localStorage.getItem(`books`);
    const temp = JSON.parse(cachedHits)
    return temp;
  }

  const getBooks = async () => {
    let books = getLocalBooks();
    if (!books) {
      books = await fetchBooks();
    }

    setBooks(books);
    const idx = books[books.length - 1].id + 1;
    setCurrentId(idx);
  };

  const addBook = (data) => {
    const temp = [...books];
    temp.push({...data, id: currentId});
    setCurrentId(currentId + 1);
    setBooks(temp);
    localStorage.setItem(`books`, JSON.stringify(temp));
    console.log(getLocalBooks());
  };

  const updateBook = (data, id) => {
    const index = books.findIndex((book) => book.id === id);
    const temp = [
      ...books.slice(0, index),
      data,
      ...books.slice(index + 1)
    ];
    setBooks(temp);
    localStorage.setItem(`books`, JSON.stringify(temp));
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <BookContext.Provider value={{
      books,
      updateBook,
      addBook
    }}>
      <div className={style.wrapper}>
        <header className={style.header}>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/add-book' component={AddBook} />
            <Route path='/:id' component={Book} />
          </Switch>
        </main>
      </div>
    </BookContext.Provider>
  );
};

export default App;
