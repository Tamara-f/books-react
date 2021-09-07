import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import { Context } from '../../context';

import s from './BookDetails.module.css';

const findBooks = (book, books) => {
  if (book) {
    const newstr = book.author.replace(/^(Mr.|Ms.|Mrs.|Dr.|Prof.)\.?\s/i, '');
    return books.filter(b => b.author.includes(newstr) && b.id !== book.id);
  }
};

export default function BookDetailsView() {
  const [book, setBook] = useState('');
  const [filteredBooks, setFilteredBooks] = useState('');

  const { bookId } = useParams();
  const books = useContext(Context);

  let history = useHistory();

  useEffect(() => {
    const currentBook = books.find(book => book.id === bookId);
    setBook(currentBook);
    const authorsBooks = findBooks(book, books);
    setFilteredBooks(authorsBooks);
  }, [book, books, bookId]);

  return (
    <Container>
      {book && (
        <>
          <h2> {book.title} </h2>

          <div className={s.details}>
            <img src={book.cover} alt={book.title} />

            <div className={s.detailsText}>
              <p>
                <span>Author:</span> {book.author}
              </p>

              <p>
                <span>ISBN:</span> {book.isbn}
              </p>

              <h2>More authors books:</h2>
              <ul className={s.list}>
                {filteredBooks ? (
                  filteredBooks.map(b => (
                    <li key={b.id}>
                      <Link to={`${b.id}`}>{b.title}</Link>
                    </li>
                  ))
                ) : (
                  <p>loading...</p>
                )}
              </ul>
              <button
                onClick={() => {
                  history.goBack();
                }}
              >
                Back
              </button>
              <button
                onClick={() => {
                  history.push('/books');
                }}
              >
                Back to list
              </button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
}
