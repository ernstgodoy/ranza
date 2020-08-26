import React from 'react';
import { Row, Col, Button } from 'reactstrap'

const Main = () => {
  const chill = require('../images/chill.jpg')
  const book_url = "https://squareup.com/appointments/book/ene3uysi1svlpi/MNZP1SF84014C/start?_savt=113564df-eb01-4591-bcf5-9ebe54314fa8&staff_id=rzc5ooazlpnzyw"
  return (
    <div className="container" id="header">
      <Row>
        <Col md={6} className="align-self-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
        <Col md={6}>
          <img src={chill} alt="guy chillin" id="pic"/>
          <br/>
          <Button href={ book_url } size="sm" target="_blank" rel="noopener noreferrer">
            Book Now
          </Button>

        </Col>
      </Row>
      
    </div>
  );
};

export default Main;