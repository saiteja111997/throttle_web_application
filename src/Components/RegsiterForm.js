import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../AuthContext';

function RegisterForm() {
  const [fullName, setFullName] = useState('');
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
    formData.append('full_name', fullName);
    formData.append('email', email);
    formData.append('password', password);
  
    try {
      // Set loading state to true while waiting for response
      setLoading(true);
  
      // Make a POST request to your backend API
      const response = await fetch('http://127.0.0.1:8080/auth/register', {
        method: 'POST',
        body: formData,
      });
  
      // Check if the request was successful
      if (response.ok) {
        // Reset form fields
        setFullName('');
        setEmail('');
        setPassword('');
        setRememberMe(false);
  
        // Handle success response
        console.log('Account created successfully!');
        login();
        navigate('/landing_page');
      } else {
        // Handle error response
        const errorData = await response.json();
        setError(errorData.error || 'Something went wrong');
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
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </Form.Group>

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

      <Button variant="primary" type="submit" className='loginButton' disabled={loading}>
        {loading ? 'Creating Account...' : 'Create Account'}
      </Button>

      {error && <p className="error-message">{error}</p>}
    </Form>
  );
}

export default RegisterForm;
