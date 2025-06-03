import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import axios from 'axios';

const HomePage = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:3000/films/').then((resp) => {
            setMovies(resp.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <>
            <h1>Movies</h1>
            <h2>
                <i>Lista di film</i>
            </h2>
            <div className="row">
                {movies.map((movie) => {

                    return (
                        <MovieCard movie={movie} key={movie.id} />
                    )
                })}

            </div>
        </>
    )
}

export default HomePage
