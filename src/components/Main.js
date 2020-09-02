import React from 'react';
import { Row, Col, Button } from 'reactstrap'
import Fade from 'react-reveal'


const Main = () => {
  const arcLogo = require('../images/ranza-arc-banner.png')
  const chill = require('../images/chill.jpg')
  return (
    <div className="container" id="header">
      <Fade big>
        <Row md={12} id="arc" className="text-center">
          <img src={arcLogo} className="img-fluid" alt="logo"/>
        </Row>
        <Row md={12}>
          <Col md={6}>
            <img src={chill} alt="guy chillin" id="pic"/>
          </Col>
          <Col md={6} className="align-self-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
        </Row>
      </Fade>
    </div>
  );
};

export default Main;