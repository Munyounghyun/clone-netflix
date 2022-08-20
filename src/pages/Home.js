import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Banner from "../components/Banner";
import { movieAction } from "../redux/actions/movieAction";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <div>
      {/*조건부 랜더링 popularMovies를 바로 못들고 오기때문에 들고올때까지 기다림*/}
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
    </div>
  );
};

export default Home;
