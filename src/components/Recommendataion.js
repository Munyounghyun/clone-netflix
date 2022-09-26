import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

const Recommendataion = () => {
  const [recommend, setRecommend] = useState();
  let { id } = useParams();
  const navigate = useNavigate();

  const getMovieRecommendataion = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    setRecommend(data);
  };

  useEffect(() => {
    getMovieRecommendataion();
  }, [id]);
  return (
    <div className="recommend">
      {recommend?.results.map((item) => (
        <img
          onClick={() => {
            navigate(`/movies/${item?.id}`);
          }}
          className="recommend_movie"
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
        />
      ))}
    </div>
  );
};

export default Recommendataion;
