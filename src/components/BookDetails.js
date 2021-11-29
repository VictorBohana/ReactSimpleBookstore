import React from "react";
import { useLocation } from "react-router";

const BookDetails = (props) => {
  const { state } = useLocation();
  const { title, author, imageUrl, summary } = state;
  return (
    <div className="book-details">
      <div className="info">
        <img src={imageUrl} />
        <h3>{title}</h3>
        <h3>{author}</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default BookDetails;
