import styled from "styled-components";

export const StyledPaginationButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const StyledPaginationButton = styled.button`
    padding: 10px;
    margin: 5px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid transparent;
    font-size: 16px;

    ${(props) => !props.disabled && `
        &:hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.3);
        }
    `}
`;