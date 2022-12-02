import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from 'redux/operations';
import css from './Contacts.module.css';

export function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(loginUser({ email, password }));

    setEmail('');
    setPassword('');
  };
  return (
    <div className={css.section}>
      <h2>Login before using phonebook!</h2>
      <p>
        Don't have account yet? <Link to="/register">Register</Link> then
      </p>
      <form onSubmit={handleSubmit} className={css.contactForm}>
        <label className={css.input}>
          Enter your email <br />
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <label className={css.input}>
          Enter your password <br />
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit" className={css.addButton}>
          Login
        </button>
      </form>
    </div>
  );
}
