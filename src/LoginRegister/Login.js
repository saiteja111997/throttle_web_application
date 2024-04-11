import React from 'react';
import GoogleButton from 'react-google-button' // Assuming GoogleButton is a separate component
import LoginForm from '../Components/LoginForm';
import TypedAnimation from '../Animations/TypeAnimation';
import '../ComponentCss/Login.css' // Assuming TypedAnimation is a separate component

function Login() {
  return (
    <div className="login-container">
      <div className="left">
        <div className="loginText">
          <h4>Welcome Back!!</h4>
          <h6>Login to continue documenting</h6>
          <GoogleButton
            onClick={() => { console.log('Google button clicked') }}
          />
        </div>
        <LoginForm />
        <div className='loginFooter'>
          <p><a href="forgot_password_page.html">Forgot password?</a></p>
          <p><a href="signup_page.html">Don't have an account?</a></p>
        </div>
      </div>
      <div className="right">
        <div className="text">
          <TypedAnimation
            sequence={[
              `Documenting as a developer\n has never been so simple.`,
              500, // Pause for 500 milliseconds after the sentence is typed
              "", // Clear the text
              `THROTTLE.AI`, // Add another sentence
            ]}
            speed={50}
            style={{ whiteSpace: 'pre-line', fontSize: '40px', fontFamily: 'Arial, sans-serif' }}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
