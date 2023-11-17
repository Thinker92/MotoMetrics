import { useState } from 'react';

const LoginForm = () => {
  // Controls whether the form is for login or signup
  const [isLogin, setIsLogin] = useState(true); 
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Switch between login route vs signup route when form submitted
    const endpoint = isLogin ? '/api/login' : '/api/signup';
    try {
        const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
        // Handle successful authentication
        console.log('Success:', data);
        // Save token, update user state, redirect, etc.
        } else {
        // Handle errors
        console.error('Error:', data);
        }
    } catch (error) {
        console.error('Request failed:', error);
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit}>
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
      {/* Switch Between Login/Signup */}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need an account? Signup' : 'Have an account? Login'}
      </button>
    </div>
  );
};

export default LoginForm;