import { useSelector } from 'react-redux';

export function UserMenu() {
  const name = useSelector(state => state.authorization.user.name);

  return (
    <div>
      <span>
        <i>{name} </i>
      </span>
      <button>Logout</button>
    </div>
  );
}
