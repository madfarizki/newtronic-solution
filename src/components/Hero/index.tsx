import { useTheme } from "styled-components";
import { Background, Container, Chip, TextWrapper } from "./hero.styles";

import { Button, TextBold } from "@/components/index";
import { ButtonVariant } from "../ui/Button";

function Hero() {
  const theme = useTheme();

  return (
    <Background>
      <Container>
        <Chip>BEST EDUCATION PLATFORM</Chip>
        <TextWrapper>
          <TextBold size="h-xl" textAlign="center" color={theme?.colors?.neutral.neutral100}>
            Interactive Learning Platform For The Future Of Education
          </TextBold>
        </TextWrapper>
        <Button size="xl" variant={ButtonVariant.PRIMARY} style={{ margin: "0 auto" }}>
          Get Started
        </Button>
      </Container>
    </Background>
  );
}

export default Hero;
