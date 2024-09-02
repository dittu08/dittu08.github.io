import { useEffect, useRef } from "react";
import Typed from "typed.js";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";

const Home = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Full Stack Developerd"],
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
            <StyledHello>
                <h1>
                    {" "}
                    Hello, I'm a <br /><StyledSpan ref={el} />{" "}
                </h1>
            </StyledHello>
            <StyledHomePicBox>
                <StyledHomePic alt="temp pic" src="img/temppic.jpg" />
            </StyledHomePicBox>
            <StyledPrsnInfo>
                <h2>Personal Information</h2>
                <StyledHomeUl>
                    <li>Name: </li>
                    <li>Age: </li>
                    <li>Phone: </li>
                    <li>Email: </li>
                </StyledHomeUl>
                <p>blah blah blah</p>
                <StyledHomeStacks>
                    <h2>Links</h2>
                    <StyledHomeA href="https://github.com/dittu08/dittu08" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </StyledHomeA>
                    <StyledHomeA href="https://www.notion.so/hcy0819/React-Node-js-4-_B-d2cfe87178e2430a80d6f72ea2ac10b7?pvs=4" target="_blank" rel="noopener noreferrer">
                        <RiNotionFill />
                    </StyledHomeA>
                </StyledHomeStacks>
            </StyledPrsnInfo>
        </StyledHome>
    )
}

// 576 768 992 1200 1400

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid orange;
    max-width: 100%;
    box-sizing: border-box;
    align-items: center;
`
const StyledHomePicBox = styled.div`
    width: 20rem;
    height: 15rem;
    overflow: hidden;
`
const StyledHomePic = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`
const StyledHello = styled.div`
    /* border: 1px solid magenta; */
    text-align: start;
    width: 20rem;
`
const StyledSpan = styled.span`
    color: orange;
    overflow: visible;
    white-space: nowrap;
`
const StyledPrsnInfo = styled.div`
    border: 1px solid cyan;
    text-align: start;
    width: 20rem;
`
const StyledHomeUl = styled.ul`
    border: 1px solid magenta;
    list-style: none;
    padding: 0;
`
const StyledHomeStacks = styled.div`
    border: 1px solid magenta;
`
const StyledHomeA = styled.a`
    color: black;
    font-size: 2rem;
    text-decoration: none;
`

export default Home;