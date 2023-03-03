import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from 'redux/operations';
import css from './Contacts.module.css';
import { Oval } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(state => state.authorization.isLoading);

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const data = await dispatch(loginUser({ email, password }));

    if (data.type === 'auth/login/rejected') {
      toast.error('There is no user with this email', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };
  return (
    <div className={css.section}>
      <h2>Login before using phonebook!</h2>
      <p>
        Don't have account yet? <Link to="/register">Register</Link> then
      </p>
      <form onSubmit={handleSubmit} className={css.contactForm}>
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
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
