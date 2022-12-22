import React, { Component } from "react";

export class MainHeadline extends Component {
  render() {
    let { newsSource, newsDate, title, description, imageUrl, newsUrl } =
      this.props;
    return (
      <div>
        <h2>{title}</h2>
        <p>
          {new Date(newsDate).toGMTString()}{" "}
          <a className="mx-4">{newsSource}</a>
        </p>
        <img className="img-fluid" src={imageUrl} alt="" />
        <p className=" mt-2">
          {description}{" "}
          <a href={newsUrl} target="_blank" className="mx-3">
            Read More...
          </a>
        </p>

        {/* <hr className="text-primary"></hr> */}
      </div>
    );
  }
}

export default MainHeadline;
