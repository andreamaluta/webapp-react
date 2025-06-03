import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 g-3" key={movie.id}>
                <div className="card">
                    <div className="card-img-top">
                        <img src={movie.image} alt="" className='img-fluid' />
                    </div>
                    <div className="card-body">
                        <h3>{movie.title}</h3>
                        <h4>{movie.director}</h4>
                        <p>{movie.abstract}</p>
                        <Link className='btn btn-primary' to={`/movies/${movie.id}`}>Leggi di più</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard
