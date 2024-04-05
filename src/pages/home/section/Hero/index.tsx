import { useTheme } from "styled-components";
import {
  Background,
  Container,
  Chip,
  TextWrapper,
  Image,
  VideoPopupContainer,
  PopupContent,
  CloseButton,
} from "./hero.styles";

import { Button, FlexContainer, TextBold } from "@/components/index";
import { ButtonVariant } from "@/components/ui/Button";

import HeroImage from "@/assets/images/hero.png";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Breakpoints from "@/consts/breakpoints";

function Hero() {
  const theme = useTheme();

  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const width = window.innerWidth;

  const openVideoPopup = () => {
    setShowVideoPopup(true);
  };

  const closeVideoPopup = () => {
    setShowVideoPopup(false);
  };

  const scrollToSection = () => {
    const sectionAbout = document.getElementById("section-about");
    if (sectionAbout) {
      sectionAbout.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Background id="home">
      <Container>
        <FlexContainer gap={24}>
          <Chip>BEST EDUCATION PLATFORM</Chip>
          <TextWrapper>
            <TextBold size="h-xl" textAlign="center" color={theme?.colors?.neutral.neutral100}>
              Interactive Learning Platform For The Future Of Education
            </TextBold>
          </TextWrapper>
          <FlexContainer justifyContent="center" alignItems="center" gap={12}>
            <Button
              onClick={scrollToSection}
              size="xl"
              variant={ButtonVariant.PRIMARY}
              width="auto">
              Get Started
            </Button>
            <Button
              onClick={openVideoPopup}
              size="xl"
              variant={ButtonVariant.OUTLINED}
              width="auto">
              Watch Video
            </Button>
          </FlexContainer>
          {showVideoPopup && (
            <VideoPopupContainer>
              <PopupContent>
                <CloseButton onClick={closeVideoPopup}>
                  <FaTimes />
                </CloseButton>
                <iframe
                  title="video"
                  width={width < Breakpoints.tablet ? "100%" : "560"}
                  height="315"
                  src="https://player.vimeo.com/video/558733589?title=0&portrait=0&byline=0&autoplay=1&muted=true"
                  frameBorder="0"
                  allowFullScreen></iframe>
              </PopupContent>
            </VideoPopupContainer>
          )}
        </FlexContainer>
        <Image src={HeroImage} alt="hero" />
      </Container>
    </Background>
  );
}

export default Hero;
