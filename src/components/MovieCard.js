import React from "react";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const { genreList } = useSelector((state) => state.movie);
  const showMovieDetail = () => {
    navigate(`/movies/${item?.id}`);
  };
  return (
    <div
      item={item}
      className="card"
      onClick={showMovieDetail}
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
          <span>
            <FontAwesomeIcon icon={faCheckToSlot} />
            &nbsp;{item.vote_count}
          </span>
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
