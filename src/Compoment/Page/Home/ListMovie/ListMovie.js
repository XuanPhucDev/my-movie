import React, { useEffect, useState } from "react";
import "./ListMovie.css";
import { Col, Container } from "react-bootstrap/";
import CardMovie from "../../../Global/CardMovie/CardMovie";

//Import Slide Slick 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const ListMovie = (props) => {
    const [movie, setMovie] = useState([]);
const API_KEY= "e9e9d8da18ae29fc430845952232787c";

    const getMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${props.movieCategory}?api_key=${API_KEY}&page=1`
        );
        const data = await res.json();
        console.log(data.results);
        setMovie(data.results);
      } catch (error) {
        alert(error);
      }
    };
  useEffect(() => {
    getMovie();
  },[]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  return (
    <div className="list-movie">
      <Container>
        <div className="headline">
          <h3>ONLINE STREAMING</h3>
          <h2>{props.h2}</h2>
        </div>
        <Slider {...settings}>
          {movie.map((item) => (
            <Col lg={2} key={item.id}>
              <CardMovie 
                title={item.original_title}
                images={item.poster_path}
                date={item.release_date}
                vote={item.vote_average}
                id={item.id}
              ></CardMovie>
            </Col>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default ListMovie;
