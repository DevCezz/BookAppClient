import React from 'react';

class Book extends React.Component {
  render() {
    const book = this.props.book;

    return (
      <div className="card">
        <div className="image">
          <img alt="movie" src="https://i.pinimg.com/originals/7b/a4/88/7ba48892de8d85381fb7a66e58152a5c.png" />
        </div>
        <div className="content">
          <div className="header">
            { book.title }
          </div>
          <div className="meta">
            <span className="date">{ book.author }</span>
          </div>
          <div className="description">
            <span>Wydawnictwo: { book.publisher }</span>
            <br/>
            <span>Rok publikacji: { book.publicationYear }</span>
            <br/>
            <span>Liczba stron: { book.numberOfPages }</span>
            <br/>
          </div>
            <div className="left floated right aligned six wide column">
              <button className="ui orange basic button">Edytuj</button>
            </div>
            <div className="right floated left aligned six wide column">
              <button className="ui red basic button">Usuń</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Book;