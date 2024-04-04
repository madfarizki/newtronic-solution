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
            <MenuLink to="home">Home</MenuLink>
          </MenuItem>
        </MenuList>
      </Wrapper>
    </Container>
  );
}

export default MenuMobile;
