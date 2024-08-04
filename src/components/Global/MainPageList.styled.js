import styled from "styled-components";

export const MainPageList = styled.ul`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding-top: 36px;
    display: flex;
    height: 100%;
    justify-content: center;
    /* flex-wrap: wrap; */
    gap: 38px;
  }
`;

export const MainPageListItem = styled.li`
  @media screen and (min-width: 768px) {
    overflow-y: auto;
  }
  /* max-height: 100vh; */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const MainPageFormWrapper = styled.li`
  @media screen and(min-width: 768px) {
    flex-shrink: 0;
    position: sticky;
    top: 0;
    height: 100vh; /* або вкажіть конкретну висоту */
    overflow: hidden;
  }
`;
