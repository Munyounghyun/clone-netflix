import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { movieAction } from "../redux/actions/movieAction";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  //loading이 true면 loading스피너를 보여주고
  //loading이 false면 데이터를 보여주고

  //true: 데이터 도착 전
  //false: 데이터 도착 후 , 에러가 났을때

  if (loading) {
    return <ClipLoader color="#fff" loading={loading} size={150} />;
  }
  return (
    <div className="home">
      {/*조건부 랜더링 popularMovies를 바로 못들고 오기때문에 들고올때까지 기다림 -> loading스패너로 기다릴 필요 없어짐*/}
      <Banner movie={popularMovies.results[0]} />
      <div className="movies_wrap">
        <h1>Popular Movie</h1>
        <MovieSlide movies={popularMovies} />
        <h1>Top rated Movie</h1>
        <MovieSlide movies={topRatedMovies} />
        <h1>Upcoming Movie</h1>
        <MovieSlide movies={upComingMovies} />
      </div>
    </div>
  );
};

export default Home;
