import React, { useEffect, useState } from "react";
import "./DetailMovie.css";
import { useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
function MyVerticallyCenteredModal(props) {
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const [trailer, setTrailer] = useState();
  const { searchQuery } = useParams();
  const getTrailer = async () => {

    try {
      const resTrailer = await fetch(
        `https://api.themoviedb.org/3/movie/${searchQuery}/videos?api_key=${API_KEY}`
      );
      const dataTrailer = await resTrailer.json();
      setTrailer(dataTrailer);
    } catch (error) {
      alert(error);
    }
  };
  const keyTrailer = trailer &&trailer.results.find((element)=> element.type);
  
  useEffect(()=>{
    getTrailer();
  },[]);
  return (
    <Modal
      className="modal-trailer"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Trailer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          width="466"
          height="500"
          src={`https://www.youtube.com/embed/${keyTrailer &&keyTrailer.key}`}
          title="Despicable Me 4 | Official Trailer 2"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Modal.Body>
    </Modal>
  );
}
const DetailMovie = () => {
  const { searchQuery } = useParams();
  const [detail, setDetail] = useState();
  const [modalShow, setModalShow] = React.useState(false);
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const getMovie = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${searchQuery}?api_key=${API_KEY}`
      );

      const data = await res.json();
      setDetail(data);
    } catch (error) {
      alert(error);
    }
  };
//   console.log(`data video: ${data}`);
  
  useEffect(() => {
    getMovie();
  }, [searchQuery]);
  return (
    <>
      <div className="detail mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <img
                src={
                  detail && detail.belongs_to_collection
                    ? `https://image.tmdb.org/t/p/w500/${
                        detail && detail.belongs_to_collection.poster_path
                      }`
                    : `https://image.tmdb.org/t/p/w500/${
                        detail && detail.poster_path
                      }`
                }
              />
            </div>
            <div className="col-lg-9">
              <h1>{detail && detail.original_title}</h1>
              <div className="yearPro d-flex align-items-center gap-2">
                <p className="year mb-0">{detail && detail.release_date}</p>
                <p className="kind">
                  {detail &&
                    detail.genres.map((element) => element.name).join(", ")}
                </p>
                <p className="time mb-0">
                  <i className="fa-regular fa-clock"></i>{" "}
                  {detail && detail.runtime} min
                </p>
              </div>
              <div className="rate d-flex align-items-center">
                <p className="number-rate">
                  {detail && detail.vote_average.toFixed(2)} %
                </p>
                <p className="user">{detail && detail.vote_count}</p>
                {detail && detail.video
                  ? `<p className="playtrailer">
                
                  <i className="fa-solid fa-play">Play Trailer</i> </p>`
                  : ""}
                <p class="playtrailer" onClick={() => setModalShow(true)}>
                  <i class="fa-solid fa-play"></i> Play trailer
                </p>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
              <h3>{detail && detail.title}</h3>
              <h2>Overview</h2>
              <p className="overview"> {detail && detail.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMovie;
