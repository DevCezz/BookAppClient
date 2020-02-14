import React from 'react';

class Book extends React.Component {
  render() {
    const book = this.props.book;

    return (
      <div>
        <div>{ book.title }</div>
        <div>{ book.author }</div>
        <div>{ book.publisher }</div>
        <div>{ book.publicationYear }</div>
        <div>{ book.numberOfPages }</div>
        <div>{ book.deactivated ? 'Dezaktywowana' : 'Aktywna' }</div>
      </div>
    );
  }
}

export default Book;