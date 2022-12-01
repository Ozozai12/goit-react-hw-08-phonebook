import { useSelector } from 'react-redux';

export function UserMenu() {
  const name = useSelector(state => state.user);
  console.log(name);

  return (
    <div>
      <p>{name}</p>
      <button>Logout</button>
    </div>
  );
}
