import React, { Component } from "react";
import {
  Grid as GridContainer,
  GridSection,
  TopBar,
  GridItem,
  Footer
} from "./Grid";
import PortfolioContent from "../content/portfolio";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClick = mappedItem => e => {
    console.log(mappedItem);
    this.props.onClick(mappedItem);
  };
  render() {
    return (
      <GridContainer id="theGrid">
        <GridSection>
          <TopBar>
            Things I've Done
          </TopBar>
          {PortfolioContent.map((mappedItem, index) => {
            return (
              <GridItem onClick={this.onClick(mappedItem)}>
                <img src={mappedItem.imageUrl} alt="mappedItem.imageUrl" />
                <div className="overlay">
                  <div className="text">
                    <h2>
                      {mappedItem.title}
                    </h2>
                    <a className="grid__item" href={mappedItem.link}>
                      <em>{mappedItem.link}</em>

                    </a>
                    <p>{mappedItem.shortDescription}</p>
                  </div>
                </div>

              </GridItem>
            );
          })}

          <Footer class="page-meta">
            Footer
          </Footer>
        </GridSection>

      </GridContainer>
    );
  }
}
