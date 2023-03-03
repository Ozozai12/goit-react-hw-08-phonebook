import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser } from 'redux/operations';
import { Link } from 'react-router-dom';
import css from './Contacts.module.css';
import { Oval } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Register() {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.authorization.isLoading);

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

  const handleSubmit = async event => {
    event.preventDefault();
    const newUser = { name, email, password };

    const data = await dispatch(registerUser(newUser));
    if (data.type === 'auth/register/fulfilled') {
      await dispatch(
        loginUser({ email: newUser.email, password: newUser.password })
      );
    }

    toast.error('User with this email already exists!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <div className={css.section}>
      <h2>Register before using phonebook!</h2>
      <p>
        Already have an account? <Link to="/login">Login</Link> then
      </p>
      <form onSubmit={handleSubmit} className={css.contactForm}>
        <label className={css.formField}>
          Enter your name <br />
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={handleNameChange}
            className={css.input}
          />
        </label>
        <br />
        <label className={css.formField}>
          Enter your email <br />
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleEmailChange}
            className={css.input}
          />
        </label>
        <br />
        <label className={css.formField}>
          Enter your password <br />
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={handlePasswordChange}
            className={css.input}
          />
        </label>
        <br />
        <button type="submit" className={css.signButton}>
          {isLoading && (
            <Oval
              height={20}
              width={20}
              color="#fff"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#bebebe"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          )}
          Register
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
