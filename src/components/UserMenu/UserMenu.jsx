import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'redux/operations';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.authorization.user.name);

  return (
    <div>
      <span>
        <i>{name} </i>
      </span>
      <button type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </button>
    </div>
  );
}
