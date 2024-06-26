import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import { AppState } from "../../App";
import "./Header.css";

import homelogo from "../../assets/image/10002.png";

function Header({ logout }) {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { user } = useContext(AppState);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const onClickChange = () => {
    logout();
    navigate("");
  };

  return (
    <header
      className={`navbar navbar-expand-lg navbar-light bg-light header ${
        sticky ? "sticky" : ""
      }`}
    >
      <div className="addpad">
        {["md"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className={`nav abebe bg-body-tertiary fixed-top shadow-sm ${
              sticky ? "sticky" : ""
            }`}
          >
            <Container className="cont">
              <Navbar.Brand>
                <Link className="navbar-brand" to={"/"}>
                  <img src={homelogo} alt="Evangadi Logo" />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  ></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">
                      <div
                        className="text-decoration-none nav-txt links"
                        onClick={() =>
                          user.username ? navigate("/") : navigate("/")
                        }
                      >
                        Home
                      </div>
                    </Nav.Link>
                    <Nav.Link href="/">
                      <Link className="links text-decoration-none nav-txt">
                        How it works
                      </Link>{" "}
                    </Nav.Link>
                    <Nav.Link>
                      <div className="connect-block btn-blue">
                        <button
                          className="nav-btn header-btn btn btn-blue btn-success "
                          value="submit"
                        >
                          {token ? (
                            <Link
                              className="link text-decoration-none text-light "
                              to={"/login"}
                              onClick={onClickChange}
                            >
                              Log Out
                            </Link>
                          ) : (
                            <Link
                              to={"/login"}
                              className="link text-decoration-none text-light "
                            >
                              Sign In
                            </Link>
                          )}
                        </button>
                      </div>
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </header>
  );
}

export default Header;