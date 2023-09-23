import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #fff3;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: #110303;
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.p`
  font-family: Mochiy Pop One;
  font-size: 36px;
  margin-left: 10px;
`;

export const HeaderLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;