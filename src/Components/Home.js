import { useEffect, useRef } from "react";
import Typed from "typed.js";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";

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
                    <p>blah blah blah</p>
                    <h2>Personal Information</h2>
                    <StyledHomeUl>
                        <li>Name: </li>
                        <li>Age: </li>
                        <li>Phone: </li>
                        <li>Email: </li>
                    </StyledHomeUl>
                    <StyledHomeStacks>
                        <h3>Links</h3>
                        <StyledHomeA href="https://github.com/dittu08/dittu08" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </StyledHomeA>
                        <StyledHomeA href="https://www.notion.so/hcy0819/React-Node-js-4-_B-d2cfe87178e2430a80d6f72ea2ac10b7?pvs=4" target="_blank" rel="noopener noreferrer">
                            <RiNotionFill />
                        </StyledHomeA>
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
const StyledHomeUl = styled.ul`
    list-style: none;
    padding: 10px;
`
const StyledHomeStacks = styled.div`
`
const StyledHomeA = styled.a`
    color: black;
    font-size: 30px;
    text-decoration: none;
    padding: 10px;
`

export default Home;