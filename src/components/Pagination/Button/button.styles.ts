import styled from "styled-components";

export const StyledPaginationButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 10px auto;

    @media screen and (max-width: 800px) {
        width: 90%;
    }
`;

export const StyledPaginationButton = styled.button<{currentpage: string }>`
    padding: 10px;
    margin: 5px;
    border-radius: 6px;
    
    background-color: ${(props) => props.currentpage == "true" ? '#EF382E' : '#ddd'};
    color: ${(props) => props.currentpage == "true" ? 'white' : 'black'};
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
`;