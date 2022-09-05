import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";
import ClipLoader from "react-spinners/ClipLoader";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheckToSlot } from "@fortawesome/free-solid-svg-icons";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetail = () => {
  let { id } = useParams();
  const [detail, setDetail] = useState();

  const getMovieDetail = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    setDetail(data);
    console.log(data);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  // const dispatch = useDispatch();
  // const { popularMovies, topRatedMovies, upComingMovies, genreList, loading } =
  //   useSelector((state) => state.movie);

  // const matchMovie = popularMovies.results.find((item) => item.id == id).id;
  // console.log(matchMovie);
  // console.log(genreList);
  // console.log(id);

  // useEffect(() => {
  //   dispatch(movieAction.getMovies());
  // }, []);
  // if (loading) {
  //   return (
  //     <div className="load">
  //       <ClipLoader color="#fff" loading={loading} size={150} />
  //     </div>
  //   );
  // }

  return (
    <div className="movieDetail_wrap">
      <img
        width={"450px"}
        height={"600px"}
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail?.poster_path}`}
      />
      <div className="detail_right_wrap">
        {detail?.genres.map((id) => (
          <Badge className="badge detail_badge" bg="danger">
            {id.name}
          </Badge>
        ))}
        <h1>{detail?.title}</h1>
        <div className="sub_detail">
          <div>
            <FontAwesomeIcon icon={faStar} />
            <span>{detail?.vote_average}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCheckToSlot} />
            <span>{detail?.popularity}</span>
          </div>
          <div>
            <span>
              {detail?.adult ? (
                <span className="over18">청불</span>
              ) : (
                <span className="under18">Under 18</span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
