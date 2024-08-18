import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  return (
    <header className={css.header}>
      <NavLink
        className={({ isActive }) =>
          clsx(css.navLink, { [css.navLinkActive]: isActive })
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          clsx(css.navLink, { [css.navLinkActive]: isActive })
        }
        to="/catalog"
      >
        Catalog
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          clsx(css.navLink, { [css.navLinkActive]: isActive })
        }
        to="/favorites"
      >
        Favorites
      </NavLink>
    </header>
  );
};

export default Navigation;
