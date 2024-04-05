import Breakpoints from "@/consts/breakpoints";
import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 45%;
  border: 1px solid ${({ theme }) => theme.colors.neutral.neutral40};
  border-radius: 20px;

  @media screen and (max-width: ${Breakpoints.tablet}px) {
    width: 90%;
  }
`;

export const CardContent = styled.div`
  padding: 20px;
  text-align: center;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CardVideo = styled.video`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const VideoWrapper = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-top: -20px;
  width: 100%;
  height: 100%;
`;

export const DownloadIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: ${({ theme }) => theme.colors.secondary.default};
  padding: 6px 12px;
  border-radius: 10px;
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.neutral.neutral10};
  }
`;
