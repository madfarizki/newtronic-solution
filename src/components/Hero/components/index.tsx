import { Button, FlexContainer, Text, TextBold } from "@/components/index";
import { Container } from "./about.styles";
import { useTheme } from "styled-components";
import { ButtonVariant } from "@/components/ui/Button";
import Breakpoints from "@/consts/breakpoints";
import { useDataContext } from "@/utils/context/DataContext";

function About() {
  const theme = useTheme();
  const { data, loading } = useDataContext();

  const { title, description, banner } = data?.[0] || [];

  const width = window.innerWidth;

  return (
    <Container background={banner}>
      <FlexContainer
        flexDirection={width < Breakpoints.tablet ? "column" : "row"}
        flexWrap={false}
        justifyContent="space-between"
        alignItems="center"
        gap={8}>
        <FlexContainer flexDirection="column" width="80%" gap={8}>
          <TextBold size="h-l" color={theme?.colors.primary.default}>
            {title}
          </TextBold>
          <Text size="h-s" color={theme?.colors.neutral.neutral100}>
            {description}
          </Text>
          <Text size="h-s" color={theme?.colors.neutral.neutral100}>
            Temukan inovasi terbaru dari Newtronic di bidang teknologi pendidikan melalui aplikasi
            canggih yang dirancang untuk meningkatkan interaksi, memperkaya pembelajaran, dan
            menciptakan pengalaman belajar yang menarik dan efektif bagi para pelajar di berbagai
            tingkat pendidikan.
          </Text>
        </FlexContainer>
        <Button size="xl" variant={ButtonVariant.PRIMARY} width="auto">
          Contact Us
        </Button>
      </FlexContainer>
    </Container>
  );
}

export default About;
