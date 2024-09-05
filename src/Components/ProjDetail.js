import styled from "styled-components";
import { StyledPage, StyledHeader} from "./Styled";
import { ReactComponent as ReactIcon } from "../assets/stacks/react.svg";
import { ReactComponent as DateIcon } from "../assets/icons/date.svg";

const ProjDetail = () => {
    return (
        <StyledPage>
            <h3>Project Detail</h3>
            <StyledHeader>Project Title</StyledHeader>
            <ProjStacks>
                <ProjStack><StyledReactIcon />React</ProjStack>
                <ProjStack>stack2</ProjStack>
                <ProjStack>stack3</ProjStack>
                <ProjStack>stack4</ProjStack>
            </ProjStacks>
            <ProjInfos>
                <ProjInfo><StyledDateIcon />date</ProjInfo>
                <ProjInfo>participants</ProjInfo>
                <ProjInfo>progress</ProjInfo>
            </ProjInfos>
            <div>description</div>
            <div>
                <h3>page title</h3>
                <p>image</p>
                <p>page description</p>
            </div>
        </StyledPage>
    )
}

export default ProjDetail;

// svg files
const withStyledSvg = (Component) => styled(Component)`
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
    vertical-align: middle;
`
const StyledReactIcon = withStyledSvg(ReactIcon);
const StyledDateIcon = withStyledSvg(DateIcon);

const ProjStacks = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
`
const ProjStack = styled.span`
    background-color: black;
    color: white;
    border-radius: 0.2rem;
    margin-right: 0.5rem;
    padding: 0 0.4rem;
    display: flex;
    align-items: center;
`
const ProjInfos = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    margin: 1rem 0;
`
const ProjInfo = styled.span`
    background-color: gray;
    color: white;
    border-radius: 0.2rem;
    margin-right: 0.5rem;
    padding: 0 0.4rem;
    display: flex;
    align-items: center;
`