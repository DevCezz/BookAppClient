import React from 'react';
import './BookList.css';
import Book from './Book';

class BookList extends React.Component {
  render() {
    return (
      <div>
        <div>
          Add
        </div>
        <div>
          <Book title="Harry" />
          <Book title="Wiedźmin" />
          <Book title="Gra o tron" />
        </div>
      </div>
    );
  }
}

export default BookList;