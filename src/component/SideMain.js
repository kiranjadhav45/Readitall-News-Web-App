import React, { Component } from "react";
import Sidebar from "./Sidebar";
import MainHeadline from "./MainHeadline";
import NewsCard from "./NewsCard";
// import { isDisabled } from "@testing-library/user-event/dist/utils";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

export class SideMain extends Component {
  static defaultProps = {
    history: PropTypes.object.isRequired,
    pageSize: 20,
    category: "general",
  };
  static defaultTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();
    this.state = { articles: [], page: 1, totalResults: 0, loading: true };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=${
      this.props.pageSize
    }`;
    let data = await fetch(url);
    this.props.setProgress(10);
    let parsedData = await data.json();
    this.props.setProgress(100);

    // console.log(this.state.articles.length);
    console.log(parsedData.totalResults);
    // console.log(parsedData);
    // console.log("data", data.json());
    this.setState({
      articles: parsedData.articles,
      totalReults: parsedData.totalResults,
    });
    //console.log(this.state.articles[2]);
    // console.log("aah", this.state.totalResults);
  }

  handleNextClick = async () => {
    console.log("next");
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      // console.log("data", data.json());
      let parsedData = await data.json();

      // console.log(parsedData);
      // this.setState({ articles: parsedData.articles });
      // // console.log("aah", this.state);
      // console.log(this.state.articles[2]);

      this.setState({
        page: this.state.page + 1,
        loading: false,
        // articles: parsedData.articles,
      });
    }
  };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalReults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <div>
        <div className="container-fluid mt-5">
          {/* {this.state.loading && <Spinner />} */}
          <div className="row justify-content-evenly">
            <div className="col-lg-7 mt-4 justify-content-evenly">
              {this.state.articles &&
                this.state.articles.slice(5, 6).map((data) => {
                  return (
                    <div key={data.url}>
                      <MainHeadline
                        title={data.title}
                        imageUrl={data.urlToImage}
                        description={data.description}
                        newsUrl={data.url}
                        newsDate={data.publishedAt}
                        newsSource={data.author}
                      />
                    </div>
                  );
                })}

              <>
                <InfiniteScroll
                  dataLength={this.state.articles.length}
                  next={this.fetchMoreData}
                  hasMore={
                    this.state.articles.length !== this.state.totalResults
                  }
                  loader={<></>}
                >
                  <div className="container">
                    <div className="row justify-content-evenly">
                      {this.state.articles.map((value) => {
                        return (
                          <div
                            key={value.url}
                            className="col-lg-5 mt-4 justify-content-evenly"
                          >
                            <NewsCard
                              title={
                                value.title ? value.title.slice(0, 71) : ""
                              }
                              description={
                                value.description
                                  ? value.description.slice(0, 151)
                                  : ""
                              }
                              imageUrl={
                                value.urlToImage
                                  ? value.urlToImage
                                  : "https://img.etimg.com/thumb/msid-95297088,width-1070,height-580,imgsize-679312,overlay-economictimes/photo.jpg"
                              }
                              newsUrl={value.url}
                              newsSource={value.author}
                              newsDate={value.publishedAt}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </InfiniteScroll>
              </>

              {/* <hr className="text-primary"></hr> */}
              {/* <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="position-centre btn sm-btn-secondary btn-sm btn-secondary btn-lg my-4 "
                  onClick={this.handleNextClick}
                  disabled={
                    this.state.page > 1 //+ 1 >Math.ceil(this.state.totalresults / this.props.pageSize)
                  }
                >
                  MORE STORIES
                </button>
              </div> */}
            </div>
            <div className="col-lg-3 mt-3 justify-content-evenly">
              <h4 className="text-center mt-3">Top Stories</h4>
              {this.state.articles &&
                this.state.articles.map((element) => {
                  return (
                    <div key={element.url}>
                      <Sidebar
                        title={element.title}
                        newsUrl={element.url}
                        newsDate={element.publishedAt}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          {/* <hr className="text-primary"></hr> */}
        </div>
      </div>
    );
  }
}

export default SideMain;
