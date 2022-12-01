import { StyledLink } from './AppBar.styled';
import css from './AppBar.module.css';
import { Outlet } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  return (
    <>
      <nav className={css.header}>
        <StyledLink to="/" className={css.navigation}>
          Home
        </StyledLink>
        <StyledLink to="contacts" className={css.navigation}>
          Contacts
        </StyledLink>
      </nav>
      {!isLoggedIn ? (
        <UserMenu />
      ) : (
        <div>
          <StyledLink to="register" className={css.navigation}>
            Register
          </StyledLink>
          <StyledLink to="login" className={css.navigation}>
            Login
          </StyledLink>
        </div>
      )}

      <Outlet />
    </>
  );
};
