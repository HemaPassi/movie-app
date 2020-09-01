import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default class TabPanelWrapper extends Component {
  render() {
    const { renderedMyContentList, renderedWatchedList } = this.props;
    return (
      <Tabs defaultIndex={0}>
        <h2>My Panel</h2>
        <TabList>
          <Tab>
            <button>My Favourites</button>
          </Tab>
          <Tab>
            <button>Watched</button>
          </Tab>
        </TabList>

        <TabPanel>
          {renderedMyContentList.length === 0 && (
            <div>Press 'Add to my Favourites' to add Movies</div>
          )}
          <div>{renderedMyContentList}</div>
        </TabPanel>
        <TabPanel>
          <div>{renderedWatchedList}</div>
        </TabPanel>
      </Tabs>
    );
  }
}
