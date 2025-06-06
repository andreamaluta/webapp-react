import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import ReviewForm from '../components/ReviewForm';

const MoviePage = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const fetchMovie = () => {
        axios.get(`http://127.0.0.1:3000/films/${id}`).then((resp) => { setMovie(resp.data) })
    }

    useEffect(() => {
        fetchMovie();
    }, [])

    if (!movie) return <p>caricamenti</p>

    return (
        <>
            <div className="row d-flex ">
                <div className="col-6 my-4 text-center">
                    <img src={`/${movie.image}`} alt="" className='detail-image' />
                </div>
                <div className='col-6 my-4 d-flex align-items-center'>
                    <div className='mx-3'>
                        <h1>{movie.title}</h1>
                        <p>{movie.abstract}</p>
                    </div>

                </div>
            </div>
            <hr />
            <div className='d-flex align-items-center justify-content-between py-3 '>
                <h3>Recensioni</h3>
                <p>Media recensioni</p>
            </div>
            <div className="row">
                {movie.reviews.map((movie) => {
                    return (
                        <div className="col-12" key={movie.id}>
                            <div className="card my-2">
                                <p className='p-2'>{movie.text}</p>
                                <div className='px-2 pb-2'>
                                    <span><b>{movie.vote}</b></span>
                                    <p>{movie.name}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

                <ReviewForm movie_id={movie.id} reloadReviews={fetchMovie} />


            </div>
        </>
    )
}

export default MoviePage
