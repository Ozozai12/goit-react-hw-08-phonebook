import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/operations';
import { Link } from 'react-router-dom';
import css from './Contacts.module.css';

export function Register() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(registerUser({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div className={css.section}>
      <h2>Register before using phonebook!</h2>
      <p>
        Already have an account? <Link to="/register">Login</Link> then
      </p>
      <form onSubmit={handleSubmit} className={css.contactForm}>
        <label className={css.input}>
          Enter your login <br />
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
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
          Register
        </button>
      </form>
    </div>
  );
}
