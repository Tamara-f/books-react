import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import BookItem from './BookItem';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// let book = {
//   id: '872179f2-4de2-4cde-a259-ee470d83d515',
//   cover: 'https://lorempixel.com/640/480/?ee470d83d515',
//   title: 'Eloquent JavaScript, Second Edition',
//   author: 'Mrs. John Doe'
// };

it('renders without a book', () => {
  act(() => {
    render(<BookItem />, container);
  });
  expect(container.textContent).toBe('no info');
});

// useRouteMatch();??? Link??
