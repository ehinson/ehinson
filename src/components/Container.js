import React, { Component } from "react";
import Header from "./Header";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";
import { unstyleButton, minMedia, maxMedia } from "../utils/style-utils";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Grid as GridContainer,
  GridSection,
  TopBar,
  GridItem,
  GridContent,
  GridContentItem,
  Footer,
  GridOverlay
} from "./Grid";
import PortfolioContent from "../content/portfolio";

let keys = [32, 37, 38, 39, 40];

const Home = () => (
  <div>
    <h3>Home</h3>
    <p>Text</p>
  </div>
);

const About = () => (
  <div>
    <h3>About</h3>
    <p>Text</p>
  </div>
);

const Portfolio = props => {
  console.log("Portfolio", PortfolioContent);
  return (
    <GridContainer id="theGrid">
      <GridSection>
        <TopBar>
          Things I've Done
        </TopBar>
        {PortfolioContent.map((mappedItem, index) => (
          <GridItem onClick={props.onClick}>
            <img src={mappedItem.imageUrl} alt="mappedItem.imageUrl" />
            <div className="overlay">
              <div className="text">
                <h2>
                  {mappedItem.title}
                </h2>
                <a className="grid__item">
                  {mappedItem.link}
                </a>
                <p>{mappedItem.shortDescription}</p>
              </div>
            </div>

          </GridItem>
        ))}

        <Footer class="page-meta">
          Footer
        </Footer>
      </GridSection>

    </GridContainer>
  );
};

const FadeContainer = styled.div`
  .background-image{
    transition-property:${props => !props.notrans && "transform"};
    transition-duration:${props => !props.notrans && "0.5s"};
    transform: ${props => props.modify && "translateY(-25%)"};
    &:after{
      transition-property: ${props => !props.notrans && "opacity"};
      transition-duration: ${props => !props.notrans && "0.5s"};
      opacity: ${props => props.modify && "1"};
    }
  }
  .header{
    h1 {
    	transition-property: ${props => !props.notrans && "color"};
      transition-duration: ${props => !props.notrans && "0.5s"};
    }
    p{
      transition-property: ${props => !props.notrans && "transform, opacity"};
      transition-duration: ${props => !props.notrans && "0.5s"};
    }
  }

`;

const Button = styled.button`
    ${unstyleButton};
    position: fixed;
    bottom: 40px;
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

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noScroll: false,
      noTrans: false,
      isAnimating: false,
      isRevealed: false,
      modify: false,
      showModal: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handlePageScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handlePageScroll);
  }
  handleKeydown = e => {
    for (var i = keys.length; i--; ) {
      if (e.keyCode === keys[i]) {
        console.log("KeyCode", e.keyCode);
        e.preventDefault();
        return;
      }
    }
  };
  handleWheel = e => {
    // for IE
    //if( ie ) {
    //e.preventDefault();;
    //}
  };
  handleTouchMove = e => {
    e.preventDefault();
  };
  getScrollY = e => {
    let scrollTop = e.target.body.scrollTop;
    return scrollTop;
  };
  handlePageScroll = e => {
    let scrollTop = this.getScrollY(e);
    if (this.state.noScroll) {
      if (scrollTop < 0) return false;
      // keep it that way
      window.scrollTo(0, 0);
    }
    if (this.state.notrans) {
      this.setState({
        notrans: false
      });
      return false;
    }

    if (this.state.isAnimating) {
      return false;
    }

    if (scrollTop <= 0 && this.state.isRevealed) {
      this.toggle(0);
    } else if (scrollTop > 0 && !this.state.isRevealed) {
      this.toggle(1);
    }
  };
  toggle = revealed => {
    this.setState({
      isAnimating: true
    });

    if (revealed) {
      this.setState({
        modify: true
      });
    } else {
      this.setState({
        noscroll: true
      });
      this.disableScroll();
      this.setState({
        modify: false
      });
    }

    // simulating the end of the transition:
    setTimeout(
      function() {
        this.setState({
          isRevealed: this.state && !this.state.isRevealed,
          isAnimating: false
        });

        if (revealed) {
          this.setState({
            noscroll: false
          });
          this.enableScroll();
        }
      }.bind(this),
      600
    );
  };
  disableScroll = () => {
    window.onmousewheel = document.onmousewheel = this.handleWheel;
    document.onkeydown = this.handleKeydown;
    document.body.ontouchmove = this.handleTouchMove;
  };
  enableScroll = () => {
    window.onmousewheel = document.onmousewheel = document.onkeydown = document.body.ontouchmove = null;
  };
  handleModalToggle = () => {
    let showModal = this.state && this.state.showModal;
    this.setState({
      showModal: this.state && !this.state.showModal
    });
  };
  render() {
    return (
      <div>
        <FadeContainer noTrans={this.state.noTrans} modify={this.state.modify}>
          <Navigation className="clearfix">
            <a href="/">
              <span>E(Q)H</span>
              <span className="hidden-sm">inson</span>
            </a>
            <span className="right">
              <a href="/portfolio" data-link={"Portfolio"}>
                <FontAwesome name="code" />
                <span className="hidden-sm">Portfolio</span>
              </a>
              <a href="/about" data-link={"About"}>
                <FontAwesome name="user" />
                <span className="hidden-sm">About</span>
              </a>

              <a href="mailto:erinqhinson@gmail.com" data-link={"Contact Me"}>
                <FontAwesome name="envelope" />
                <span className="hidden-sm">Contact Me</span>
              </a>

            </span>
          </Navigation>
          <Header noTrans={this.state.noTrans} modify={this.state.modify} />
          <Button
            modify={this.state.modify}
            onClick={() => this.toggle("revealed")}
          >
            <FontAwesome name="angle-double-down" />
          </Button>

          <Router>
            <Content noTrans={this.state.noTrans} modify={this.state.modify}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route
                path="/portfolio"
                render={() => (
                  <Portfolio
                    show={this.state.showModal}
                    onClick={this.handleModalToggle}
                  />
                )}
              />
            </Content>
          </Router>

        </FadeContainer>
        <GridContent show={this.state.showModal} class="scroll-wrap">
          <GridContentItem className="content__item">
            <h3>Modal Dialog</h3>
            <div>
              <p>
                <img
                  src="https://unsplash.it/300/200/?random
"
                  alt="Random image"
                />
              </p>
              <p>

                <strong>Read:</strong>
                {" "}
                Modal windows will probably tell you something important so don't forget to read what it says.
                <strong>Look:</strong>
                {" "}
                modal windows enjoy a certain kind of attention; just look at it and appreciate its presence.
                <strong>Close:</strong>
                {" "}
                click on the button below to close the modal.
              </p>
              <button onClick={this.handleModalToggle}>
                <FontAwesome name="close" />
              </button>

            </div>
          </GridContentItem>
        </GridContent>
        <GridOverlay show={this.state.showModal} />
      </div>
    );
  }
}
export default Container;
