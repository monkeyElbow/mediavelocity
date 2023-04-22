import { Nav, Navbar, Container } from "react-bootstrap";
import LogoMv from "./LogoMvRed";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        // bg="dark"
        variant="dark"
        className="
        menuMain 
        border-bottom border-2 border-white sticky-top
        "
      >
        <Container className="p-0 d-flex justify-content-center">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Navbar.Brand
              className="d-flex flex-row align-items-center ms-3 me-3"
              href="/"
            >
              <div style={{ width: "30px" }}>
                <LogoMv color="#fff" />
              </div>
              <p className="fs-5 ms-2 mt-3 link-light">MEDIAVELOCITY</p>
            </Navbar.Brand>

            <Nav
              className="text-uppercase m-auto d-flex justify-content-end"
              style={{ width: "70%" }}
            >
              <NavLink to="/work" className="mx-4">
                WORK
              </NavLink>

              <NavLink to="/about" className="mx-4">
                ABOUT
              </NavLink>

              <NavLink to="/gallery" className="mx-4">
                GALLERY
              </NavLink> 

              <NavLink to="/contact" className="mx-4">
                Contact
              </NavLink>

            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuBar;
