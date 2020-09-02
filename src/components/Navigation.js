import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const arcLogo = require('../images/rdot.png')
  const book_url = "https://squareup.com/appointments/book/ene3uysi1svlpi/MNZP1SF84014C/start?_savt=113564df-eb01-4591-bcf5-9ebe54314fa8&staff_id=rzc5ooazlpnzyw"

  return (
    <div>
        <Navbar color="faded" light expand="md" id="navbar">
          <NavbarBrand href="/"><img src={arcLogo} alt="logo" id="nav-brand"/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar >
              <NavItem>
                <NavLink href={book_url} target="_blank">Book Now</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Portfolio</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
  );
}

export default Navigation;