import { useState } from 'react';

import Container from '../components/Container/Container';

export default function HomeView() {
  const [changed, setChanged] = useState(false);

  const handleClick = () => {
    setChanged(true);
  };
  return (
    <Container>
      <h1>Welcome Home!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vel velit
        nihil illo est! Quos cum rerum dolores voluptates odio iste est nam
        excepturi placeat eligendi voluptatibus a illo eos ipsam, necessitatibus
        quo at quae pariatur et asperiores odit! Quasi sunt odit omnis at
        deserunt placeat ipsa earum dignissimos magni voluptatum quisquam veniam
        libero qui fugit accusantium cum ratione, facilis tempore in!
        Voluptates, minus nesciunt sed optio voluptate et quae accusamus est
        eos, dolorum quibusdam dolorem debitis perferendis voluptas rem quos
        eius ab, commodi cumque dolor. Repellendus porro impedit, enim
        temporibus quibusdam eum natus corporis id? Ducimus fugit consequatur
        consequuntur.
      </p>
      <img
        src='https://cdn.pixabay.com/photo/2020/09/02/18/33/portland-head-light-5539153_960_720.jpg'
        width='1100'
        alt='home'
      />
      {changed ? (
        <p>Hey there! :)</p>
      ) : (
        <button onClick={handleClick}>Say Hi!</button>
      )}
    </Container>
  );
}
