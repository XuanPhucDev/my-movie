import React from 'react';
import ListMovie from './ListMovie';

const ShowMovie = () => {
    const arrCate = [{
        movieCategory: "now_playing",
        heading: "Now Playing Movie"
    },{
        movieCategory: "upcoming",
        heading: "Upcoming Movie"
    },{
        movieCategory: "top_rated",
        heading: "Top Rated Movie"
    }];
    return (
        <div>
            {arrCate.map((item)=>(
            <ListMovie movieCategory={item.movieCategory} h2={item.heading}></ListMovie>
            ))}
        </div>
    );
};

export default ShowMovie;