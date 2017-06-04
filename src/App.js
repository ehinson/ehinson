import React, { Component } from "react";
import Container from "./components/Container";
import { injectGlobal } from "styled-components";
import Normalize from "normalize.css";

injectGlobal`
  ${Normalize}
  @font-face {
    font-family: 'Open Sans';
    src: url('https://fonts.googleapis.com/css?family=Open+Sans');
  }
  * {
    box-sizing: border-box;
  }

  body{
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    background: #fff;
  	color: #69606b;
  	font-weight: 300;
  	font-size: 22px;
  	line-height: 1.5;
  	text-rendering: optimizeLegibility;
  	-webkit-font-smoothing: antialiased;
  	overflow-x: hidden;
    a {
      outline: none;
      color: #E6781E;
      text-decoration: none;
      }
  }


`;

class App extends Component {
  render() {
    return (
      <div>
        <Container />
      </div>
    );
  }
}

export default App;
