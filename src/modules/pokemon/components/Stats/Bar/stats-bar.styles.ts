import styled from "styled-components";

export const StatusBarContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Bar = styled.div<{color: string }>`
    height: 15px;
    width: 25px;
    background-color: ${props => props.color};
`; 