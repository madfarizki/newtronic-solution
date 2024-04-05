import { useTheme } from "styled-components";
import { Background, Container, Chip, TextWrapper, Image } from "./hero.styles";

import { Button, FlexContainer, TextBold } from "@/components/index";
import { ButtonVariant } from "@/components/ui/Button";

import HeroImage from "@/assets/images/hero.png";

function Hero() {
  const theme = useTheme();

  return (
    <Background>
      <Container>
        <FlexContainer gap={24}>
          <Chip>BEST EDUCATION PLATFORM</Chip>
          <TextWrapper>
            <TextBold size="h-xl" textAlign="center" color={theme?.colors?.neutral.neutral100}>
              Interactive Learning Platform For The Future Of Education
            </TextBold>
          </TextWrapper>
          <FlexContainer justifyContent="center" alignItems="center" gap={12}>
            <Button size="xl" variant={ButtonVariant.PRIMARY} width="auto">
              Get Started
            </Button>
            <Button size="xl" variant={ButtonVariant.OUTLINED} width="auto">
              Watch Video
            </Button>
          </FlexContainer>
        </FlexContainer>
        <Image src={HeroImage} alt="hero" />
      </Container>
    </Background>
  );
}

export default Hero;
