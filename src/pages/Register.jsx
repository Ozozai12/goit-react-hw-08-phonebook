import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/operations';
import css from '../components/ContactForm/ContactForm.module.css';

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
    <>
      <h2>Register before using phonebook!</h2>
      <form onSubmit={handleSubmit} className={css.contactForm}>
        <label>
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
          Register
        </button>
      </form>
    </>
  );
}
