import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'redux/operations';
import css from './UserMenu.module.css';
import { BiExit } from 'react-icons/bi';
import { IconContext } from 'react-icons';

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
        <IconContext.Provider
          value={{
            color: '#fff',
            size: 17,
            style: { verticalAlign: 'middle' },
          }}
        >
          <div>
            <BiExit />
          </div>
        </IconContext.Provider>
      </button>
    </div>
  );
}
