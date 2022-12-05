import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'redux/operations';
import css from './UserMenu.module.css';

export function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(state => state.authorization.user.email);

  return (
    <div className={css.user}>
      <span className={css.userName}>
        <i>{email} </i>
      </span>
      <button
        type="button"
        onClick={() => dispatch(logoutUser())}
        className={css.userButton}
      >
        Logout
      </button>
    </div>
  );
}
