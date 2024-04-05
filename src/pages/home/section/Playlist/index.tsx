import { Card, FlexContainer, Text, TextBold } from "@/components/index";

import { Container } from "./playlist.styles";
import { useDataContext } from "@/utils/context/DataContext";
import { useTheme } from "styled-components";
import Breakpoints from "@/consts/breakpoints";

function Playlist() {
  const theme = useTheme();
  const { data } = useDataContext();

  const width = window.innerWidth;

  return (
    <Container id="section-playlist">
      <TextBold
        size="h-l"
        color={theme?.colors?.primary.default}
        textAlign="center"
        style={{ marginBottom: "24px" }}>
        Our Playlists
      </TextBold>
      <FlexContainer
        gap={34}
        flexDirection={width < Breakpoints.tablet ? "column" : "row"}
        width="100%"
        justifyContent="center"
        alignItems="center">
        {data?.playlist?.map((item) => (
          <Card key={item?.id} {...item} />
        ))}
        {data?.length ? (
          <Text size="xl">
            Unable to fetch data due to CORS policy. For security reasons, APIs must be accessed
            over HTTPS
          </Text>
        ) : null}
      </FlexContainer>
    </Container>
  );
}

export default Playlist;
