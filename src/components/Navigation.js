import styled from "styled-components";
import { unstyleButton, minMedia, maxMedia } from "../utils/style-utils";

const Navigation = styled.nav`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 0.6em;
    padding: 0 32px;
    letter-spacing: 1px;
    z-index: 10000;
    button {
    	display: inline-block;
    	color: red;
    	transform: translateY(20px);
      a{
        transform: translateY(0);
      }
    }
    a{
      display: inline-block;
    	color: #fff;
    	text-decoration: none;
      transform: translateY(20px);
    }
    span.right {
      float: right;
      position: relative;
    	width: auto;
    	margin: 0 0 0 3em;
      color: #ffffff;
      a {
      	display: block;
        line-height: 1.61;
        position: relative;
        text-align: right;
        & span:before{
          margin: 0  5px;
        }
        &:before{
          content: attr(data-link);
          opacity: 0;
          transform: scale3d(1,1,1);
          transition-delay: 0.1s;
          ${minMedia.tablet`
            opacity: 0;
            `}
        }
      }
      ${maxMedia.tablet`
        a{
          line-height: 2 !important;
          &:hover:before{
            opacity: 1;
            transform: scale3d(0.1,0.1,1);
            transform-origin: 50% 50%;
            transition: opacity 0.5s, transform 0.5s;
            transition-timing-function: cubic-bezier(0.2,1,0.3,1);
          }
        }
      `}

    }
    .hidden-sm{
      display: none;
      ${minMedia.tablet`display: inline-block;`}
    }
`;

export default Navigation;
