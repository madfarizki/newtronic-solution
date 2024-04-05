import ReactPlayer from "react-player";
import { Text, TextBold } from "@/components/index";
import { FaDownload } from "react-icons/fa";

import { CardContainer, CardImage, CardContent, DownloadIcon, VideoWrapper } from "./card.styles";
import { useTheme } from "styled-components";

type Props = {
  title: string;
  description: string;
  url: string;
  type: string;
};

function Card(props: Props) {
  const { title, description, url, type } = props;
  const theme = useTheme();

  const handleDownload = async () => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", `${title}.${type === "video" ? "mp4" : "jpg"}`);
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <CardContainer>
      <DownloadIcon onClick={handleDownload}>
        <FaDownload />
      </DownloadIcon>
      {type === "image" ? (
        <CardImage src={url} alt={title} />
      ) : (
        <VideoWrapper>
          <ReactPlayer
            className="react-player"
            url={url}
            width="100%"
            controls={true}
            playing={true}
            loop={true}
          />
        </VideoWrapper>
      )}
      <CardContent>
        <TextBold size="h-m" color={theme?.colors?.secondary.default}>
          {title}
        </TextBold>
        <Text size="xl" color={theme?.colors?.neutral.neutral100}>
          {description}
        </Text>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
