import React from 'react';
import './BookList.css';

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
            <li key={book.id}>
              "{book.title}" {book.author}
            </li>
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