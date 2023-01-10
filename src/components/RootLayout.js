import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../index.css";

const RootLayout = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar className="color-nav" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={require("../img/treble_cleff.ico")}
              alt=""
              width="50"
              height="50"
            />
          </Navbar.Brand>
          <Nav className="me-auto"></Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="About">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Outlet for Route Rendering */}
      <Outlet />

      {/* Footer */}
      <div className="my-5">
        <footer className="page-footer">
          <div className="py-3">
            © 2023 Sebastián Villegas - sebaena@gmail.com{" "}
          </div>
        </footer>
      </div>
    </>
  );
};

export default RootLayout;
