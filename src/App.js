import React, { Component } from "react";
import Navbar from "./component/Navbar";
import SideMain from "./component/SideMain";
import Footer from "./component/Footer";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    const apiKey = "9e97c8813bcb482e9c32860bffe74cc9";
    const pageSize = 20;
    return (
      <div>
        <Router>
          <LoadingBar color="#f11946" progress={this.state.progress} />

          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <SideMain
                  setProgress={this.setProgress}
                  key="gi"
                  pageSize={pageSize}
                  apiKey={apiKey}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <SideMain
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={pageSize}
                  apiKey={apiKey}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <SideMain
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={pageSize}
                  apiKey={apiKey}
                  category={"Business"}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <SideMain
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={pageSize}
                  apiKey={apiKey}
                  category={"entertainment"}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <SideMain
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={pageSize}
                  apiKey={apiKey}
                  category={"health"}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <SideMain
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={pageSize}
                  apiKey={apiKey}
                  category={"science"}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <SideMain
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={pageSize}
                  apiKey={apiKey}
                  category={"sports"}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <SideMain
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={pageSize}
                  apiKey={apiKey}
                  category={"technology"}
                />
              }
            ></Route>
          </Routes>

          {/* <SideMain setProgress={this.setProgress}
            pageSize={pageSize}
           apiKey={apiKey}
            category={"health"}
          /> */}
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;

// https://newsapi.org/v2/top-headlines?country=in&apiKey=e92698aea53042da83ba1061597be297&page=1&pagesize=20

// npm i react-router-dom
// npm i react-infinite-scroll-component
// npm i react-top-loading-bar
