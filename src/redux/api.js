import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { "Content-type": "application/json" },
});

//request를 보내기전에 request 체크
api.interceptors.request.use(
  function (config) {
    return config;
  },
  //에러있으면 print
  function (error) {
    return Promise.reject(error);
  }
);

//interceptors 예시, 없어도 상관없음
//받을 response 데이터 확인가능
api.interceptors.response.use(
  function (response) {
    return response;
  },
  //에러있으면 print
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
