import { useDataContext } from "@/utils/context/DataContext";
import { FooterContainer, Logo, SocialMedia, SocialLink, Image } from "./footer.styles";
import { TextSemibold } from "@/components/index";
import { useTheme } from "styled-components";
import { FaGithub, FaGlobe, FaPhone } from "react-icons/fa";
import LogoImg from "@/assets/images/logo.png";

function Footer() {
  const { data } = useDataContext();
  const theme = useTheme();

  const { logo } = data || {};

  return (
    <FooterContainer>
      <Logo to="/">
        <Image src={logo ? logo : LogoImg} />
      </Logo>
      <TextSemibold color={theme?.colors?.neutral.neutral10}>
        &copy; {new Date().getFullYear()} Newtronic Solution
      </TextSemibold>
      <SocialMedia>
        <SocialLink href="https://github.com/madfarizki" target="_blank">
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://madfariz.my.id" target="_blank">
          <FaGlobe />
        </SocialLink>
        <SocialLink href="tel:+62 821 1756 9494" target="_blank">
          <FaPhone />
        </SocialLink>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
