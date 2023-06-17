import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    
    <footer style={{backgroundColor:'#10237a', marginTop:'3rem'}} className="text-light  ">
      <Container>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={4} className="text-center">
            
            <p>General Paz 1200, Córdoba, Argentina</p>
          </Col>
          <Col xs={12} md={4} className="text-center">
           
            <p><i class="bi bi-phone-vibrate"></i> Teléfono: +1234567890</p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            
            <p>Correo electrónico: example@example.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
   
  );
};

export default Footer;


