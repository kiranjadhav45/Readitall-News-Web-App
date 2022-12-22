import React, { Component } from "react";

export class NewsCard extends Component {
  render(props) {
    let { newsDate, newsSource, title, description, newsUrl, imageUrl } =
      this.props;
    return (
      <div className="">
        <hr className="text-primary"></hr>
        <h4 className="mt-4">{title}</h4>
        <p>
          <a className="text-decoration-none" href="/">
            {newsSource}
          </a>{" "}
          {new Date(newsDate).toGMTString()}
        </p>
        <img className="img-fluid" src={imageUrl} />
        <p className="mt-4">{description}</p>
        <a
          href={newsUrl}
          target="_blank"
          className="btn sm-btn-secondary btn-sm btn-secondary"
        >
          {" "}
          Read More
        </a>
      </div>
    );
  }
}

export default NewsCard;
