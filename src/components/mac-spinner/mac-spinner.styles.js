import styled, { keyframes } from "styled-components";

const Spin = keyframes`
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
`;

export const SpinnerContainer = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid #44a8ed;
  border-bottom: 10px solid #44a8ed;
  border-right: 10px solid #5cd0fb;
  border-left: 10px solid #5cd0fb;
  border-radius: 50%;
  animation-name: ${Spin};
  animation-duration: 2s;
  animation-direction: linear;
  animation-iteration-count: infinite;
`;
