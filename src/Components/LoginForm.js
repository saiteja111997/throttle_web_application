import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../AuthContext';
import Form from 'react-bootstrap/Form';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Construct form data
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      // Set loading state to true while waiting for response
      setLoading(true);

      // Make a POST request to your backend API
      const response = await fetch('http://127.0.0.1:8080/auth/login', {
        method: 'POST',
        body: formData,
      });

      // Check if the request was successful
      if (response.ok) {
        // Reset form fields
        setEmail('');
        setPassword('');
        setRememberMe(false);

        // Handle successful login (e.g., redirect user to dashboard)
        console.log('Login successful!');
        login();
        navigate('/landing_page');
      } else {
        // Handle error response
        const errorData = await response.json();
        setError(errorData.error || 'Incorrect email or password');
      }
    } catch (error) {
      // Handle network errors
      setError('Network error. Please try again later.');
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
      </Form.Group>

      <Button variant="primary" type="submit" className='loginButton customWidth' disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </Button>

      {error && <p className="error-message">{error}</p>}
    </Form>
  );
}

export default LoginForm;
