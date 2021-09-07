import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact to='/' className={s.link} activeClassName={s.activeLink}>
      Home
    </NavLink>

    <NavLink to='/books' className={s.link} activeClassName={s.activeLink}>
      Books
    </NavLink>
  </nav>
);

export default Navigation;
