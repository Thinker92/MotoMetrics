import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER, LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [createUser, { loading: createUserLoading, error: createUserError }] = useMutation(CREATE_USER);
  const [loginUser, { loading: loginUserLoading, error: loginUserError }] = useMutation(LOGIN_USER);

  const initialFormData = isLogin
    ? { username: '', password: '' }
    : { email: '', username: '', password: '', createdOn: new Date().toISOString() };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const user = await loginUser({ variables: { username: formData.username, password: formData.password } });
        const token = user.data.login.token;
        Auth.login(token);
        console.log(user);
      } else {
        const { data } = await createUser({
          variables: { username: formData.username, email: formData.email, password: formData.password },
        });

        console.log(`Successfully Signed up: ${data}`);
        console.log(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={formContainerStyle}>
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            style={inputStyle}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        )}
        <input
          style={inputStyle}
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          style={inputStyle}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button style={buttonStyle} type="submit">
          {isLogin ? 'Login' : 'Signup'}
        </button>
      </form>
      <button style={toggleButtonStyle} onClick={() => {
        setIsLogin(!isLogin);
        setFormData(initialFormData);
      }}>
        {isLogin ? 'Need an account? Signup' : 'Have an account? Login'}
      </button>
      {createUserLoading && <p>Loading...</p>}
      {loginUserLoading && <p>Loading...</p>}
      {createUserError && <p style={errorStyle}>Error creating user: {createUserError.message}</p>}
      {loginUserError && <p style={errorStyle}>Error logging in: {loginUserError.message}</p>}
    </div>
  );
};

const formContainerStyle = {
  maxWidth: '400px',
  margin: 'auto',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  margin: '8px 0',
  padding: '10px',
  fontSize: '16px',
};

const buttonStyle = {
  margin: '16px 0',
  padding: '12px',
  fontSize: '16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  cursor: 'pointer',
};

const toggleButtonStyle = {
  fontSize: '14px',
  color: '#333',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
  marginTop: '10px',
};

export default LoginForm;