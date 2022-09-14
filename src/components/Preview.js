import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const API_KEY = process.env.REACT_APP_API_KEY;

const Preview = (props) => {
  const opts = {
    height: "400px",
    width: "700px",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  let { id } = useParams();
  const [trailer, setTrailer] = useState();
  const getMovieTrailer = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    setTrailer(data);
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="movie_trailer">
        <Modal.Body className="trailer_body">
          <YouTube videoId={trailer?.results[0].key} opts={opts} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default Preview;
//
