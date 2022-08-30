import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";
import ClipLoader from "react-spinners/ClipLoader";
import Badge from "react-bootstrap/Badge";

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
  console.log(detail?.genres.map((name) => detail?.genres.name));
  return (
    <div className="movieDetail_wrap">
      <img
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail?.poster_path}`}
      />
      <div>
        {detail?.genres.map((name) => (
          <Badge className="badge" bg="danger">
            {detail?.genres.name}
          </Badge>
        ))}
        <h1>{detail?.title}</h1>
      </div>
    </div>
  );
};

export default MovieDetail;
