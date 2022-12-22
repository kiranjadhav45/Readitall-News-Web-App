import React, { Component } from "react";

export class Sidebar extends Component {
  render() {
    let { title, newsUrl, newsDate } = this.props;
    return (
      <div>
        <hr className="text-primary"></hr>
        <h5>{title}</h5>
        <p>
          {new Date(newsDate).toGMTString()}
          <a
            href={newsUrl}
            target="_blank"
            className="mx-2 btn sm-btn-secondary btn-sm btn-secondary"
          >
            Read More
          </a>
        </p>
      </div>
    );
  }
}

export default Sidebar;
