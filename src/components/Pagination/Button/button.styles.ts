import styled from "styled-components";

export const StyledPaginationButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const StyledPaginationButton = styled.button<{currentPage?: boolean }>`
    padding: 10px;
    margin: 5px;
    border-radius: 6px;
    
    background-color: #ddd;
    color: black;
    border: 1px solid transparent;
    font-size: 16px;

    ${(props) => !props.disabled && `
        background-color: white;

        &:hover {
            cursor: pointer;
            background-color: #EF382E;
            color: white;
        }
    `}

    ${(props) => props.currentPage && `
        background-color: #EF382E;
        color: white;
    `}
`;