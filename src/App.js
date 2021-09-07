import { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BooksView from './views/BooksView';
import HomeView from './views/HomeView';
import BookDetailsView from './views/BookDetails/BookDetailsView';
import Navigation from './components/Navigation/Navigation';
import { Context } from './context';
import fetchBooks from './api/fetch';

import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(data => {
      setBooks(data);
    });
  }, []);

  return (
    <>
      <Navigation />
      <Context.Provider value={books}>
        <Switch>
          <Route path='/home' exact>
            <HomeView />
          </Route>
          <Route path='/books' exact>
            <BooksView books={books} />
          </Route>

          <Route
            path='/books/:bookId'
            component={() => <BookDetailsView key={window.location.pathname} />}
          />
          <Redirect to='/home' />
        </Switch>
      </Context.Provider>
    </>
  );
}

export default App;
