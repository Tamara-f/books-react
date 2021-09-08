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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchBooks()
      .then(data => {
        setBooks(data);
      })
      .catch(error => setError(error))
      .finally(setIsLoading(false));
  }, []);

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <p>Loading...</p>}
      {books.length > 0 && (
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
                component={() => (
                  <BookDetailsView key={window.location.pathname} />
                )}
              />
              <Redirect to='/home' />
            </Switch>
          </Context.Provider>
        </>
      )}
    </>
  );
}

export default App;
