import React, { Component } from "react";
import "../Components CSS/style.css";

export default class newsbox extends Component {
  render() {
    let { imgurl, title, description, newsurl, name, date } = this.props;
    const publishedAtDate = new Date(date);

    // Calculate the PST timezone offset (in minutes)
    const pstOffset = publishedAtDate.getTimezoneOffset() + 480; // PST is 480 minutes ahead of UTC

    // Create a PST Date object
    const pstDate = new Date(publishedAtDate.getTime() - pstOffset * 60000);

    // Format the time in PST
    const formattedTime = pstDate.toLocaleString("en-PK", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return (
      <>
        <div className="my-3">
          <div className="card">
            <div className="card-header">Source : {name}</div>
            <img
              src={imgurl}
              className="card-img-top img-thumbnail img-height"
              alt="News-image"
            />
            <div className="card-body">
              <h5 className="card-title title-height breaking">{title}</h5>
              <p className="card-text description-height breaking">
                {description}
              </p>
              <a
                href={newsurl}
                className="btn btn-sm btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
            <div className="card-footer text-body-secondary date-element">{formattedTime} PST</div>
          </div>
        </div>
      </>
    );
  }
}
