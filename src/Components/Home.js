import { useEffect, useRef } from "react";
import Typed from "typed.js";
import styled from "styled-components";

const Home = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Full Stack Developer"],
            typeSpeed: 50,
            loop: true,
            loopCount: Infinity,
            cursorChar: "|"
        });
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <StyledHome>
            <StyledHomePic alt="temp pic" src="img/temppic.jpg" />
            <StyledHomeInfo>
                <StyledHello>
                    <h1>
                        {" "}
                        Hello, I'm a <StyledSpan ref={el} />{" "}
                    </h1>
                </StyledHello>
                <StyledPerInfo>
                    <h2>personal info</h2>
                    <p>blahblab</p>
                    <ul>
                        <li>Name</li>
                        <li>Age</li>
                        <li>Phone</li>
                        <li>Email</li>
                        <li>Links</li>
                    </ul>
                    <StyledHomeStacks>
                        stacks
                    </StyledHomeStacks>
                </StyledPerInfo>
            </StyledHomeInfo>
        </StyledHome>
    )
}

const StyledHome = styled.div`
    display: flex;
    margin: auto;
    /* border: 1px solid orange; */
    height: 700px;
    max-width: 1140px;
    padding: 50px;
    box-sizing: border-box;
`
const StyledHomePic = styled.img`
    border: 1px solid;
    margin: auto;
    width: 300px;
    height: 400px;
`
const StyledHomeInfo = styled.div`
    margin: auto;
    width: 600px;
`
const StyledHello = styled.div`
    /* border: 1px solid magenta; */
    margin: 30px;
    text-align: start;
`
const StyledSpan = styled.span`
    color: orange;
`
const StyledPerInfo = styled.div`
    /* border: 1px solid cyan; */
    margin: 30px;
    text-align: start;
`
const StyledHomeStacks = styled.div`
`

export default Home;