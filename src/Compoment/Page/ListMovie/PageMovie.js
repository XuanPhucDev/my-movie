import React, { useEffect, useState } from 'react';
import {  Container } from 'react-bootstrap';
import CardMovie from '../../Global/CardMovie/CardMovie';
import "./PageMovie.css";
import { useParams } from 'react-router-dom';

const PageMovie = () => {

  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const userID = useParams();

    const API_KEY = "e9e9d8da18ae29fc430845952232787c";
    const getMovie = async () => {
      try {
        const res = await fetch(
          (userID.searchQuery ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${userID.searchQuery}&page=${page}` : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`)
        );
        const data = await res.json();
        setMovie([...movie,...data.results]);
      } catch (error) {
        alert(error);
      }
    };
    console.log(movie);
    
  useEffect(() => {
    getMovie();
  },[page]);
  const handleShowMore = () =>{
    setPage(page + 1);
    
  }
    return (
        <>
            <Container className='flex list-movie'>
            {movie.map((item) => (
            <div key={item.id} className='card-list'>
              <CardMovie 
                title={item.original_title}
                images={item.poster_path}
                date={item.release_date}
                vote={item.vote_average}
                id={item.id}
              ></CardMovie>
            </div>
          ))}
          <button onClick={handleShowMore}>Show More</button>
            </Container>
        </>
    );
};

export default PageMovie;