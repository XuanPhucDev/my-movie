import React, { useEffect, useState } from "react";
import "./CardMovie.css";
import { Container, Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom";

const CardMovie = (props) => {
  return (
    <Link className="cardmovie" to={`/detail-movie/${props.id}`}>
      <div className="thumb">
        <img src={`https://image.tmdb.org/t/p/w500/${props.images}`} alt="" />
      </div>
      <h3 className="mb-3 mt-2">{props.title}</h3>
      <div className="number d-flex align-items-center">
        <p className="day">{props.date}</p>
        <p className="rate">
          <i className="fa-solid fa-star"></i>
          {props.vote}
        </p>
      </div>
    </Link>
  );
};

export default CardMovie;
