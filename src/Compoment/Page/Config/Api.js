import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovie(data.results);
        } catch (err) {
            alert(err);
        }
    };
    useEffect(() => {
        getMovie();
    }, [url]);
    return movie;
};

export default useFetch;