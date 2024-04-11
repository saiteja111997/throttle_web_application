import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../AuthContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image1 from '../Images/Image1.jpg';
import Image2 from '../Images/Image2.jpg';
import Image3 from '../Images/Image3.jpg';
import '../ComponentCss/NavBar.css'; // Import CSS file

function LandingPage() {

  const { isLoggedIn, logout } = useContext(AuthContext);
  // const sectionRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('animated');
  //       }
  //     });
  //   });

  //   observer.observe(sectionRef.current);

  //   return () => observer.disconnect();
  // }, []);

  if (!isLoggedIn) {
    // Render the navigation bar for non-logged-in users
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">THROTTLE.AI</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#features">Download Extension</Nav.Link>
              <Link to="/login" className="nav-link">Login</Link> {/* Use Link component for navigation */}
              <Nav.Link href="#register">Register</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="section" >
        <Container>
          <Row>
            <Col md={6}>
            <div className="left-content">
              <div className="image">
                <img src={Image1} alt={Image1} />
              </div>
              </div>
            </Col>
            <Col md={6}>
            <div className="right-content">
              {/* <div className="text"> */}
                <h2>Streamlined Documentation with AI Assistance.</h2>
                <p></p>
                <p>Our AI-driven approach revolutionizes the way developers interact with documentation. With our innovative solution, navigating through the intricacies of documentation becomes effortless. We seamlessly integrate into your workflow, quietly documenting errors as you explore, ensuring minimal disruption to your journey. Leveraging the power of artificial intelligence, we transform these insights into comprehensive developer documentation, tailored to your needs. Say goodbye to cumbersome manual documentation processes and embrace the future of streamlined development with ease.</p>
              </div>
              {/* </div> */}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section">
        <Container>
          <Row>
            <Col md={6}>
            <div className="left-content">
              <div className="text">
                <h2>Efficient Documentation Management and Error Tracking</h2>
                <p>Unlock the full potential of your organization's documentation management with our comprehensive solution. By centralizing your documentation repository, we provide a seamless platform for storing and accessing all your development resources. But we don't stop there. Our advanced error tracking system empowers you to identify recurring issues across your organization, effectively eliminating redundant troubleshooting efforts. Think of it as your internal Stack Overflow, but tailored specifically to your organization's needs. By fostering knowledge sharing and collaboration, we streamline your development process, saving valuable time and resources while promoting efficiency and innovation.</p>
              </div>
              </div>
            </Col>
            <Col md={6}>
            <div className="right-content">
              <div className="image">
              <img src={Image2} alt={Image2} />
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section">
        <Container>
          <Row>
            <Col md={6}>
            <div className="left-content">
              <div className="image">
              <img src={Image3} alt={Image3} />
              </div>
              </div>
            </Col>
            <Col md={6}>
            <div className="right-content">
              <div className="text">
                <h2>Text Content 3</h2>
                <p>This is the text content for the third section.</p>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      </>
    );
  } else {
    // Render the navigation bar for logged-in users
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">THROTTLE.AI</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">My Documentations</Nav.Link>
              <Nav.Link href="#features">Download Extension</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="section">
        <Container>
          <Row>
            <Col md={6}>
              <div className="image">
              <img src={Image1} alt={Image1} />
              </div>
            </Col>
            <Col md={6}>
              <div className="text">
                <h2>Text Content 1</h2>
                <p>This is the text content for the first section.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section">
        <Container>
          <Row>
            <Col md={6}>
              <div className="text">
                <h2>Text Content 2</h2>
                <p>This is the text content for the second section.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="image">
              <img src={Image2} alt={Image2} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section">
        <Container>
          <Row>
            <Col md={6}>
              <div className="image">
              <img src={Image3} alt={Image3} />
              </div>
            </Col>
            <Col md={6}>
              <div className="text">
                <h2>Text Content 3</h2>
                <p>This is the text content for the third section.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      </>
    );
  }
}

export default LandingPage;
