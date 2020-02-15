import React from 'react';
import './BookList.css';
import Book from './Book';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
    this.getAllBooks = this.getAllBooks.bind(this);
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks() {
    fetch("/books")
    .then(res => res.json())
    .then(json => this.setState({ books: json }))
  }

  render() {
    const { books } = this.state;
    
    if(books) {
      return (
        <div className="ui container">
          <div className="ui cards centered">
            { books.map(book => (
              <Book book={ book } key={ book.id } />
            )) }
          </div>
        </div>
      )
    } else {
      return (
        <div>Ładowanie...</div>
      )
    }
  }
}

export default BookList;