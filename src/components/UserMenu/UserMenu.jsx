import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'redux/operations';
import css from './UserMenu.module.css';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.authorization.user.name);

  return (
    <div className={css.user}>
      <span className={css.userName}>
        <i>{name} </i>
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
