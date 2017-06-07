import styled from "styled-components";

const Content = styled.article`
    z-index: 1000;
    position: relative;
    padding: 0 0 3em;
    font-size: 0.85em;
     > div {
       transition-property: ${props => !props.notrans && "transform, opacity"};
       transition-duration: ${props => !props.notrans && "0.5s"};
       opacity: ${props => (props.modify ? "1" : "0")};
       transform: ${props => (props.modify ? "translateY(0)" : "translateY(350px)")};
       &:not(.title){
         margin: 0  auto;
      	max-width: 900px;
      	padding: 0 1.25em;
        p {
        	margin: 0 auto 1.5em auto;
        }
       }
     }
`;

export default Content;
