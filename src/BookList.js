import React from 'react';
import './BookList.css';
import Book from './Book';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }

  componentDidMount() {
    fetch("/books")
    .then(res => res.json())
    .then(json => this.setState({ books: json }))
  }

  render() {
    const { books } = this.state;
    
    if(books) {
      return (
        <ul>
          { books.map(book => (
            <Book book={ book } />
          )) }
        </ul>
      )
    } else {
      return (
        <div>Ładowanie...</div>
      )
    }
  }
}

export default BookList;