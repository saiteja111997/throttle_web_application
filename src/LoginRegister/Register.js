import React from 'react';
import GoogleButton from 'react-google-button' // Assuming GoogleButton is a separate component
import RegisterForm from '../Components/RegsiterForm';
import TypedAnimation from '../Animations/TypeAnimation';
import '../ComponentCss/Login.css' // Assuming TypedAnimation is a separate component

function Register() {
  return (
    <div className="login-container">
      <div className="left">
        <div className="loginText">
          <h4>Sign Up!!</h4>
          <h6>Create your free throttle.ai account</h6>
          <GoogleButton
            onClick={() => { console.log('Google button clicked') }}
          />
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px', marginTop: '30px' }}>
        <div style={{ borderBottom: '1px solid black', flex: '1' }}></div>
        <h6 style={{ margin: '0 20px' }}>Or continue with</h6>
        <div style={{ borderBottom: '1px solid black', flex: '1' }}></div>
      </div>
        </div>
        <RegisterForm />
        <div className='loginFooter'>
          <p><a href="forgot_password_page.html">Already have an account ??</a></p>
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

export default Register;
