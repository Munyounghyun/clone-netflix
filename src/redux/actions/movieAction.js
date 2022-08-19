import api from "../api";

function getMovies() {
  return async (dispatch) => {
    //반복되기때문에 생략시켜줌
    // let url1 = `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1`;
    // let response1 = await fetch(url1);
    // let data1 = await response1.json();
    // let url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`;
    // let response2 = await fetch(url2);
    // let data2 = await response2.json();
    // let url3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`;
    // let response3 = await fetch(url3);
    // let data3 = await response3.json();

    const popularMovieApi = await api.get(
      `/movie/popular?api_key=<<api_key>>&language=en-US&page=1`
    );
  };
}
export const movieAction = {
  getMovies,
};
