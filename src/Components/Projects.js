import styled from "styled-components";
import { StyledPage, StyledHeader} from "./Styled";

const Projects = () => {
    return (
        <StyledPage>
            <StyledHeader>Projects</StyledHeader>
            <ProjBox>
                <ProjLogo>
                    logo
                </ProjLogo>
                <ProjDesc>
                    <p>title</p>
                    <p>date</p>
                    <p>description</p>
                    <p>stacks</p>
                </ProjDesc>
            </ProjBox>
        </StyledPage>
    )
}

export default Projects;

const ProjBox = styled.div`
    border: 1px solid magenta;
    display: flex;
    width: 20rem;
`
const ProjLogo = styled.div`
    border: 1px solid cyan;
    min-width: 7rem;
`
const ProjDesc = styled.div`
    width: 100%;
    text-align: start;
    padding: 0 1rem;
`