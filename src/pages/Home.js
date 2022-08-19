import React, { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { movieAction } from "../redux/actions/movieAction";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieAction.getMovies);
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
