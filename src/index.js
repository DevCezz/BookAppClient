import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BookList from './BookList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BookList />, 
    document.getElementById('root')
);

serviceWorker.unregister();