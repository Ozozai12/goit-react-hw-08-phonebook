import { StyledLink } from './AppBar.styled';
import css from './AppBar.module.css';
import { Outlet } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.authorization.isLoggedIn);

  return (
    <>
      <div className={css.header}>
        <nav className={css.nav}>
          <StyledLink to="/" className={css.navItem}>
            Home
          </StyledLink>
          {isLoggedIn && (
            <StyledLink to="contacts" className={css.navItem}>
              Contacts
            </StyledLink>
          )}
        </nav>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <div className={css.nav}>
            <StyledLink to="register" className={css.navItem}>
              Register
            </StyledLink>
            <StyledLink to="login" className={css.navItem}>
              Login
            </StyledLink>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};
