import api from "../api";
import { movieActions } from "../reducers/movieReducer";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
  return async (dispatch) => {
    try {
      dispatch(movieActions.getMovieRequest());
      //await 3번 사용 => 끝나면 시작 끝나면 시작 끝나면 시작...
      //=> 해결하기위한 방법으로 Promise.all() 사용(await 없앰) 데이터가 다 올때까지 한번만 기다림
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      let [popularMovies, topRatedMovies, upComingMovies, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedApi,
          upComingApi,
          genreApi,
        ]);
      dispatch(
        movieActions.getAllMovies({
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genreList: genreList.data.genres,
        })
      );
    } catch (error) {
      //에러 핸들링 하는곳
      dispatch(movieActions.getMovieFalure());
    }
  };
}
export const movieAction = {
  getMovies,
};
