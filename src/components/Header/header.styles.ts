import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #640000;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 16px;
`;