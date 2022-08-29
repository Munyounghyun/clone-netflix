import React from "react";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);

  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.poster_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <h2>{item.title}</h2>
        <div>
          {item.genre_ids.map((id) => (
            <Badge className="bagde" bg="danger">
              {genreList.find((item) => item.id == id).name}
            </Badge>
          ))}
        </div>
        <div className="movie_short_info">
          <span className="movie_vote">
            <FontAwesomeIcon icon={faStar} />
            {item.vote_average}
          </span>
          <span>
            {item.adult ? (
              <p className="over18">청불</p>
            ) : (
              <p className="under18">Under 18</p>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
