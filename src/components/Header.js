import React from "react";
import styled from "styled-components";
import {
  verticalGoldenAbsolute,
  horizontalAlignAbsolute,
  minMedia
} from "../utils/style-utils";

const StyledHeader = styled.header`
  position: relative;
  margin: 0 auto;
  min-height: 560px;
  width: 100%;
  overflow: hidden;
`;

const StyledBackgroundImage = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backface-visibility: hidden;
  > img {
  	position: absolute;
  	top: 0;
  	left: 0;
  	display: block;
  	min-width: 100%;
  	min-height: 100%;
    max-height: 100%;
  }
  &:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 101%;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  }
`;

const Title = styled.div`
  z-index: 1000;
  margin: 0 auto;
  padding: 0 1.25em;
  width: 100%;
  text-align: left;
	max-width: 900px;
  ${verticalGoldenAbsolute()};
  ${horizontalAlignAbsolute()};
  h1 {
  	padding: 0 0 0.2em;
  	color: ${props => (props.modify ? "#514753" : "#ffffff")};
  	font-weight: 800;
  	font-size: 3em;
  	margin: 0 auto;
    > span#hinson{
      opacity: ${props => (props.modify ? "1" : "0")};
      transform: ${props => (props.modify ? " translateX(0)" : "translateX(-150px)")};
      transition-property:${props => !props.notrans && "transform"};
      transition-duration:${props => !props.notrans && "0.5s"};
    }
    ${minMedia.tablet`font-size: 5em;`}
  }
  p {
   color: ${props => (props.modify ? "#514753" : "#ffffff")};
   padding: 0 0 0.6em;
   font-weight: 300;
   font-size: 0.85em;
   margin: 0 auto;
   opacity: ${props => (props.modify ? "1" : "0")};
   transform: ${props => (props.modify ? " translateX(0)" : "translateX(-150px)")};

  }
  h1, p.subtext {
	 line-height: 1;
   max-width: 100%;
  }
  p.subtext {
    font-size: 1em;
    ${minMedia.tablet`font-size: 1.25em;`}

  }
`;

const Header = props => {
  return (
    <StyledHeader {...props} className="header">
      <StyledBackgroundImage className="background-image">
        <img src="img/background.jpg" alt="Mac and Glasses" />
      </StyledBackgroundImage>
      <Title {...props} className="title">

        <h1>Hi.<span id="hinson">nson</span></h1>
        <p className="subtext">
          I'm Erin.
          {" "}
          <br />
          {" "}
          I'm a designer and developer based in Charlotte, North Carolina. By day, I like to design and develop beautiful sites. By night, I like to design and develop beautiful sites. I love autumn, mixtapes, and box-sizing: border-box.
          {" "}
          <br />
          Trivia nerd.
          {" "}
          <br />
          Cat person.
          {" "}
        </p>
      </Title>
    </StyledHeader>
  );
};

export default Header;
