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
            <MenuLink to="/" onClick={toggle}>
              Home
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="section-about" smooth duration={100} onClick={toggle}>
              About
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="section-playlist" smooth duration={100} onClick={toggle}>
              Playlists
            </MenuLink>
          </MenuItem>
        </MenuList>
      </Wrapper>
    </Container>
  );
}

export default MenuMobile;
