import React from 'react'

const BookContext = React.createContext({
  books: [
    {
      "title": "",
      "description": "",
      "author": "",
      "ISBN": "",
      "year": 2000,
      "rating": 3,
      "cover": "localhost:3000/img/1.jpg"
    },
    {
      "title": "",
      "description": "",
      "author": "",
      "ISBN": "",
      "year": 2000
    }
  ],
  updateBook: () => {},
  addBook: () => {}
})

export default BookContext;