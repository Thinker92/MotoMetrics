import { useState } from 'react';
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
        const user  = await loginUser({ variables: { username: formData.username, password: formData.password }});
        const token =user.data.login.token;
        Auth.login(token);
        console.log(user);

       
      } else {
        const { data } = await createUser({ variables: { username: formData.username, email: formData.email, password: formData.password }});

        console.log(`Successfully Signed up: ${data}`)
        console.log(data)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        )}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
      <button onClick={() => {
        setIsLogin(!isLogin);
        setFormData(initialFormData); // Reset form data when toggling
      }}>
        {isLogin ? 'Need an account? Signup' : 'Have an account? Login'}
      </button>
      {createUserLoading && <p>Creating user...</p>}
      {loginUserLoading && <p>Logging in...</p>}
      {createUserError && <p>Error creating user: {createUserError.message}</p>}
      {loginUserError && <p>Error logging in: {loginUserError.message}</p>}
    </div>
  );
};

export default LoginForm;