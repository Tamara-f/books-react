import List from '../components/List';
import BookItem from '../components/BookItem/BookItem';

const BooksView = ({ books }) => {
  return (
    <List
      items={books}
      renderItem={book => <BookItem book={book} key={book.id} />}
    />
  );
};

export default BooksView;
