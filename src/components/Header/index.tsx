import { useState } from "react";
import MenuMobile from "./components/MenuMobile";
import { Nav, Container, Logo, MenuIcon, NavMenu, NavItem, NavLinks } from "./navbar.styles";
import { FaBars } from "react-icons/fa";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Container>
        <Logo to="/">Newtronic</Logo>
        <MenuIcon onClick={toggle}>
          <FaBars />
        </MenuIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="home">Home</NavLinks>
          </NavItem>
        </NavMenu>
        <MenuMobile isOpen={isOpen} toggle={toggle} />
      </Container>
    </Nav>
  );
}

export default Header;
