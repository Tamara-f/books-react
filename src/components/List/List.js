import React from 'react';
import s from '../Container/Container.module.css';

export default function List(props) {
  if (!props.items) return null;
  return <div className={s.container}>{props.items.map(props.renderItem)}</div>;
}
