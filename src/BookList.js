import React from 'react';
import './BookList.css';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("/books")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Błąd: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Ładowanie...</div>;
    } else {
      return (
        <ul>
          { items.map(item => (
            <li key={item.id}>
              "{item.title}" {item.author}
            </li>
          )) }
        </ul>
      );
    }
  }
}

export default BookList;