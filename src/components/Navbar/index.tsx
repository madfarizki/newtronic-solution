import { useState } from "react";
import MenuMobile from "./components/MenuMobile";
import { Nav, Container, Logo, MenuIcon, NavMenu, NavItem, NavLinks, Image } from "./navbar.styles";
import { FaBars } from "react-icons/fa";
import { useDataContext } from "@/utils/context/DataContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useDataContext();

  const { logo } = data || {};

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Container>
        <Logo to="/">
          <Image src={logo} />
        </Logo>
        <MenuIcon onClick={toggle}>
          <FaBars />
        </MenuIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="section-about" smooth duration={100}>
              About
            </NavLinks>
          </NavItem>
        </NavMenu>
        <MenuMobile isOpen={isOpen} toggle={toggle} />
      </Container>
    </Nav>
  );
}

export default Navbar;
