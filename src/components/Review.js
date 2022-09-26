import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

const Review = () => {
  let { id } = useParams();
  const [review, setReview] = useState();
  const getMovieReview = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    setReview(data);
    console.log(data);
  };

  useEffect(() => {
    getMovieReview();
  }, []);
  return (
    <div>
      {review?.results.map((review) => (
        <div className="review_info">
          <h4>{review.author}</h4>
          <span>{review.content}</span>
        </div>
      ))}
    </div>
  );
};

export default Review;
