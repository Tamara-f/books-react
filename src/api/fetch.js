import axios from 'axios';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

async function fetchBooks() {
  try {
    const response = await axios.get(
      'https://azsoft-code-server.herokuapp.com/books'
    );

    return response.data.books;
  } catch (e) {
    console.log(e);
  }
}
export default fetchBooks;
