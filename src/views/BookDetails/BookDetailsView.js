import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import { Context } from '../../context';

import s from './BookDetails.module.css';

export default function BookDetailsView() {
  const [book, setBook] = useState('');
  const [filteredBooks, setFilteredBooks] = useState('');

  const { bookId } = useParams();
  const books = useContext(Context);

  let history = useHistory();

  useEffect(() => {
    const currentBook = books.find(book => book.id === bookId);
    setBook(currentBook);
    const authorsBooks = findBooks(book);
    setFilteredBooks(authorsBooks);
  }, [book, books]);

  const findBooks = book => {
    if (book) {
      const newstr = book.author.replace(/^(Mr.|Ms.|Mrs.|Dr.|Prof.)\.?\s/i, '');
      return books.filter(b => b.author.includes(newstr) && b.id !== book.id);
    }
  };
  const handleClick = () => {
    if (history.length > 1) {
      history.goBack();
    }
    history.push('/books');
  };
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
                <span>isbn:</span> {book.isbn}
              </p>
              <p>
                <span>isbn:</span> {book.isbn}
              </p>

              <button onClick={handleClick}>Back</button>

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
            </div>
          </div>
        </>
      )}
    </Container>
  );
}
