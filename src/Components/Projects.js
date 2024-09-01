import styled from "styled-components";
import { StyledPage, StyledHeader} from "./Styles";

const Projects = () => {
    return (
        <StyledPage>
            <StyledHeader>Projects</StyledHeader>
            <ProjBox>
                <ProjLogo>
                    logo
                </ProjLogo>
                <div>
                    <p>title</p>
                    <p>date</p>
                    <p>description</p>
                    <p>stacks</p>
                </div>
            </ProjBox>
        </StyledPage>
    )
}

export default Projects;

const ProjBox = styled.div`
    border: 1px solid;
    display: flex;
`
const ProjLogo = styled.div`
    border: 1px solid;
    min-width: 130px;
    max-width: 150px;
`