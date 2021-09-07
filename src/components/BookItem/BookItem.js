import { Link, useRouteMatch } from 'react-router-dom';
import s from './BookItem.module.css';

const BookItem = ({ book }) => {
  const { url } = useRouteMatch();

  return (
    <div className={s.bookItem}>
      <img src={book.cover} alt={book.title} />
      <div className={s.descr}>
        <p>
          <span>title:</span> {book.title}
        </p>
        <p>
          <span>author:</span> {book.author}
        </p>
      </div>
      <Link to={`${url}/${book.id}`}>More information</Link>
    </div>
  );
};

export default BookItem;
