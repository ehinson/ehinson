import React, { Component } from "react";
import Header from "./Header";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { TopBar, Modal, GridContentItem, Footer, GridOverlay } from "./Grid";
import PortfolioContent from "../content/portfolio";
import Home from "./Home";
import About from "./About";
import Navigation from "./Navigation";
import Button from "./Button";
import Portfolio from "./Portfolio";
import Content from "./Content";

let keys = [32, 37, 38, 39, 40];

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

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noScroll: false,
      noTrans: false,
      isAnimating: false,
      isRevealed: false,
      modify: false,
      showModal: false,
      currentItem: {}
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
      // this.disableScroll();
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
  handleModalToggle = mappedItem => {
    console.log(mappedItem);
    let showModal = this.state && this.state.showModal;
    this.setState({
      currentItem: mappedItem,
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
          <Header noTrans={this.state.noTrans} modify={this.state.modify}>
            <Button
              modify={this.state.modify}
              onClick={() => this.toggle("revealed")}
            >
              <FontAwesome name="angle-double-down" />
            </Button>
          </Header>

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
        <Modal
          show={this.state.showModal}
          class="scroll-wrap"
          data={this.state.currentItem}
        >
          <GridContentItem className="content__item">
            <h3>{this.state.currentItem.title}</h3>
            <div>
              <p>
                <img
                  src={this.state.currentItem.imageUrl}
                  alt={this.state.currentItem.title}
                />
              </p>
              <p>
                {this.state.currentItem.longDescription}
              </p>
              <button onClick={this.handleModalToggle}>
                <FontAwesome name="close" />
              </button>

            </div>
          </GridContentItem>
        </Modal>
        <GridOverlay show={this.state.showModal} />
      </div>
    );
  }
}
export default Container;
