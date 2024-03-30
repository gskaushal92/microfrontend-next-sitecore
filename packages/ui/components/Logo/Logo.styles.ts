import { NextImage } from "@sitecore-jss/sitecore-jss-nextjs";
import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
`;

export const LogoImg = styled(NextImage)`
  cursor: pointer;
  width: 153px;
  height: auto;
  margin-left: 0;
`;
