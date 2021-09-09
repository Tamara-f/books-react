import { useEffect, useState } from 'react';

import Container from '../components/Container/Container';
import axios from 'axios';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

async function fetchBooks() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    return response.data;
  } catch (e) {
    throw e;
  }
}

export default function HomeView() {
  const [changed, setChanged] = useState(false);
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    // clean up controller
    let isSubscribed = true;

    fetchBooks()
      .then(data => (isSubscribed ? setTodos(data) : null))
      .catch(error => {
        if (isSubscribed) {
          alert(error);
        }
      });

    // cancel subscription to useEffect
    return () => (isSubscribed = false);
  }, []);

  const handleClick = () => {
    setChanged(true);
  };

  return (
    <Container>
      <h1>Welcome Home!</h1>
      {changed ? (
        <p>Hey there! :)</p>
      ) : (
        <button onClick={handleClick}>Say Hi!</button>
      )}

      <p>
        This Page for testing. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ex vel velit nihil illo est! Quos cum rerum dolores
        voluptates odio iste est nam excepturi placeat eligendi voluptatibus a
        illo eos ipsam, necessitatibus
      </p>

      {todos ? (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title} </li>
          ))}
        </ul>
      ) : (
        <p>no todos</p>
      )}
    </Container>
  );
}
