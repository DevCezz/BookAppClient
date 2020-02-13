import React from 'react';

class Book extends React.Component {
  render() {
    return (
      <div>
          { this.props.title }
      </div>
    );
  }
}

export default Book;