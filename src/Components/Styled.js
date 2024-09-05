import styled from "styled-components"

export const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid orange;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    padding: 0 3rem;
`
export const StyledHeader = styled.h1`
    align-self: flex-start;
    &::before {
        content: "|";
        margin-right: 0.5rem;
        font-weight: bold;
    }
`