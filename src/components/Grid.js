import React from "react";
import styled from "styled-components";
import {
  unstyleButton,
  minMedia,
  maxMedia,
  verticalGoldenAbsolute,
  horizontalAlign
} from "../utils/style-utils";

export const Grid = styled.div`
  height: 100vh;
  height: 100%;

`;

export const GridSection = styled.section`
    display: flex;
    position: relative;
    z-index: 50;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    max-width: 75em;
    margin: 0 auto;
    height: 100vh;
    height: 100%;
    &:after {
      content: '';
      background: rgba(202, 202, 202, 0.4);
      opacity: 0;
      position: absolute;
      pointer-events: none;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      -webkit-transition: opacity 0.5s;
      transition: opacity 0.5s;
    }
`;

export const TopBar = styled.header`
    background: #fff;
    width: 100%;
    line-height: 1;
    padding: 15px 5px 10px;
    align-items: center;
    font-size: 0.75em;
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
`;

export const GridItem = styled.div`
    padding: 45px 55px 30px;
    position: relative;
    color: inherit;
    background: #fff;
    min-height: 300px;
    cursor: pointer;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2{
      max-width: 100%;
    }
    .overlay{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: .5s ease;
      background-color: #ffffff;
      .text{
        padding: 22px 22px 15px;
      }
    }
    * {
      z-index: 10;
    }
    img{
      max-width: 100%;
      height: auto;
    }
    &:before {
      position: absolute;
      content: '';
      top: 0px;
      right: 55px;
      bottom: 0px;
      left: 55px;
      border-bottom: 1px solid rgba(74, 74, 74, 0.075);
    }
    &:hover{
      .overlay{
        opacity: 1;
      }
    }

    ${minMedia.phone`
      padding: 45px 45px 30px;
      width: 100%;
      `}
    ${minMedia.tablet`
      width: 50%;
      border: none;
      &:before {
        top: 5px;
        right: 5px;
        bottom: 5px;
        left: 5px;
        border: 1px solid rgba(74,74,74,0.075);
        transition: opacity 0.3s;
      }
      &:hover, &:focus{
        &:before{
          border: 3px solid #BFCCDD;
          opacity: 0.5;
        }
      }
      `}
      ${minMedia.desktop`
        width: 33.33%;
        h2{
          font-size: 1em;
        }
        p,a{
          font-size: 0.75em;
        }
        `}
`;

export const Footer = styled.footer`
    width: 100%;
    background: #fff;
    width: 100%;
    padding: 15px 15px 10px;
    text-align: center;
    font-size: 0.75em;
    font-weight: 800;
    text-transform: uppercase;
    cursor: default;
`;

export const GridContent = styled.section`
    position: fixed;
    background: #ffffff;
  	top: 50%;
  	left: 50%;
  	width: 68%;
    padding: 30px 55px;
  	max-width: 630px;
  	min-width: 320px;
  	height: auto;
    text-align: center;
  	z-index: 30000;
  	visibility: ${props => (props.show ? "visible" : "hidden")};
  	transform: translateX(-50%) translateY(-50%);
    p {
      font-size: 0.75em;
    }
    img {
      display: inline-block;
      max-width: 100%;
    }
    button{
      ${unstyleButton}
      position: absolute;
      top: 0;
      right: 15px;
    }
    &:before{
      border: 1px solid rgba(74,74,74,0.075);
      content: "";
      top: 5px;
      right: 5px;
      bottom: 5px;
      left: 5px;
      transition: opacity 0.3s;
      position: absolute;
      content: '';
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }
`;

export const GridContentItem = styled.article`

`;

export const GridOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    visibility: ${props => (props.show ? "visible" : "hidden")};
    top: 0;
    left: 0;
    z-index: 20000;
    opacity: ${props => (props.show ? "1" : "0")};
    background: rgba(255,255,255,0.8);
    transition: all 0.3s;
`;
