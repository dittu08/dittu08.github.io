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
            <ProjDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu tortor odio. Morbi iaculis ligula vel accumsan lobortis. Sed felis metus, sagittis accumsan viverra in, elementum vel urna. Nullam non nunc vestibulum, dapibus sem vitae, viverra dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</ProjDesc>
            <ProjBody>
                <ProjPageTitle>page title</ProjPageTitle>
                <ProjPageImgBox>
                    <StyledPageDetailImg alt="temp pic" src="img/6.jpg" />
                </ProjPageImgBox>
                <ProjPageDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu tortor odio. Morbi iaculis ligula vel accumsan lobortis.</ProjPageDesc>
            </ProjBody>
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
const ProjDesc = styled.div`
    border: 1px solid magenta;
    text-align: left;
`
const ProjBody = styled.div`
    border: 1px solid magenta;
    text-align: left;
`
const ProjPageTitle = styled.div`
    border: 1px solid cyan;
    font-size: 2rem;
    font-weight: bold;
`
const ProjPageImgBox = styled.div`
    border: 1px solid cyan;
    overflow: hidden;
`
const StyledPageDetailImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`
const ProjPageDesc = styled.div`
    border: 1px solid cyan;

`