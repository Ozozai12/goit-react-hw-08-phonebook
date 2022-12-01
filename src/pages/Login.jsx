import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/operations';
import css from '../components/ContactForm/ContactForm.module.css';

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
    <>
      <h2>Login before using phonebook!</h2>
      <form onSubmit={handleSubmit} className={css.contactForm}>
        <label>
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
        <label>
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
    </>
  );
}
