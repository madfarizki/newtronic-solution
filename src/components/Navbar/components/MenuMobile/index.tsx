import {
  Container,
  CloseIcon,
  Icon,
  Wrapper,
  MenuList,
  MenuItem,
  MenuLink,
} from "./menu-mobile.styles";

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

function MenuMobile({ isOpen, toggle }: Props) {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <Wrapper>
        <MenuList>
          <MenuItem>
            <MenuLink to="/">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="section-about" smooth duration={100}>
              About
            </MenuLink>
          </MenuItem>
        </MenuList>
      </Wrapper>
    </Container>
  );
}

export default MenuMobile;
