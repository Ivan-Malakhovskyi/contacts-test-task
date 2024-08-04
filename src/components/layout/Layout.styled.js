import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0px 15px;

  min-width: 370px;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    height: 100vh;
    max-width: 1250px;
  }
`;

export const FallBack = styled.div`
  text-align: center;
  padding-top: 20px;
  font-size: 20px;
  color: "#010101";
`;
