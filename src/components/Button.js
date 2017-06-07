import React, { Component } from "react";
import styled from "styled-components";
import { unstyleButton } from "../utils/style-utils";

const Button = styled.button`
    ${unstyleButton};
    position: fixed;
    bottom: 80px;
    left: 50%;
    z-index: 5000;
    display: ${props => (props.modify ? "none" : "block")};
    margin-left: -0.5em;
    padding: 0;
    width: 1em;
    height: 1em;
    border: none;
    cursor: pointer;
    color: #ffffff;
    &:before {
    	position: absolute;
    	bottom: 100%;
    	left: -200%;
    	padding: 0.8em;
    	width: 600%;
    	color: #ffffff;
    	content: "Scroll Down";
      text-transform: uppercase;
      font-weight: 800;
      font-family: "Open Sans", sans-serif;
    	font-size: 0.6em;
    	-webkit-backface-visibility: hidden;
    	backface-visibility: hidden;
    }
    > span {
      	position: relative;
      	display: block;
      	width: 100%;
      	height: 100%;
        &:before {
        	position: absolute;
        	top: 0;
        	left: 100%;
        	width: 100%;
        	height: 100%;
        	color: #fff;
        	text-transform: none;
        	font-weight: normal;
        	font-style: normal;
        	font-variant: normal;
        	font-family: "FontAwesome";
        	line-height: 1;
        	speak: none;
        	-webkit-font-smoothing: antialiased;
        	-moz-osx-font-smoothing: grayscale;
        }


      }
`;

export default Button;
