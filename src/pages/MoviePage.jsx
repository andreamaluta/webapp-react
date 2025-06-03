import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const MoviePage = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    const fetchMovie = () => {
        axios.get(`http://127.0.0.1:3000/films/${id}`).then((resp) => { setMovie(resp.data) })
    }

    useEffect(() => {
        fetchMovie();
    }, [])

    return (
        <>
            <div className="row d-flex ">
                <div className="col-6 my-4">
                    <img src={movie.image} alt="" />
                </div>
                <div className='col-6 my-4'>
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
                {movie === null ? ('caricamento') : (
                    <div className="col-12">
                        <div className="card">
                            <p className='p-2'>recensione</p>
                            <div className='px-2 pb-2'>
                                <span><b>Voto</b></span>
                                <p>Nome Utente</p>
                            </div>
                        </div>
                    </div>)}

            </div>
        </>
    )
}

export default MoviePage
