import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    const { id, titolo, regista, genere, descrizione, immagine } = movie
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 g-3" key={id}>
                <div className="card">
                    <div className="card-img-top">
                        <img src={immagine} alt="" className='img-fluid' />
                    </div>
                    <div className="card-body">
                        <h3>{titolo}</h3>
                        <h4>{regista}</h4>
                        <p>{descrizione}</p>
                        <Link className='btn btn-primary' to={`/movies/${id}`}>Leggi di più</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard
