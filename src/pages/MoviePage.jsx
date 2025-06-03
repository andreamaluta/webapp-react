import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const initialMovies = [
    {
        id: 1,
        titolo: "Il Padrino",
        regista: "Francis Ford Coppola",
        genere: "Drammatico / Crime",
        descrizione: "La saga della famiglia mafiosa Corleone nell'America del dopoguerra.",
        immagine: "https://picsum.photos/500/300"
    },
    {
        id: 2,
        titolo: "Inception",
        regista: "Christopher Nolan",
        genere: "Sci-Fi / Thriller",
        descrizione: "Un ladro che ruba segreti attraverso i sogni deve compiere un'azione impossibile: l'inception.",
        immagine: "https://picsum.photos/500/300"
    },
    {
        id: 3,
        titolo: "La vita è bella",
        regista: "Roberto Benigni",
        genere: "Drammatico / Commedia",
        descrizione: "Un padre usa l'immaginazione per proteggere il figlio dagli orrori dell'Olocausto.",
        immagine: "https://picsum.photos/500/300"
    },
    {
        id: 4,
        titolo: "Pulp Fiction",
        regista: "Quentin Tarantino",
        genere: "Crime / Drammatico",
        descrizione: "Storie intrecciate di criminali, pugili e gangster a Los Angeles.",
        immagine: "https://picsum.photos/500/300"
    },
    {
        id: 5,
        titolo: "Il Signore degli Anelli: La Compagnia dell'Anello",
        regista: "Peter Jackson",
        genere: "Fantasy / Avventura",
        descrizione: "Un giovane hobbit intraprende un viaggio per distruggere un potente anello.",
        immagine: "https://picsum.photos/500/300"
    }
];

const MoviePage = () => {

    const { id } = useParams();
    const [movies, setMovies] = useState(initialMovies);

    const [movie, setMovie] = useState([]);

    const fetchMovie = () => {
        const findMovie = movies.find((actualMovie) => actualMovie.id === parseInt(id));
        setMovie(findMovie);
    }

    useEffect(() => {
        fetchMovie();
    }, [])

    console.log(useParams());

    return (
        <>
            <div className="row d-flex ">
                <div className="col-6 my-4">
                    <img src="https://picsum.photos/500/300" alt="" className='w-100' />
                </div>
                <div className='col-6 my-4'>
                    <div className='mx-3'>
                        <h1>{movie.titolo}</h1>
                        <p>{movie.descrizione}</p>
                    </div>

                </div>
            </div>
            <hr />
            <div className='d-flex align-items-center justify-content-between py-3 '>
                <h3>Recensioni</h3>
                <p>Media recensioni</p>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <p className='p-2'>recensione</p>
                        <div className='px-2 pb-2'>
                            <span><b>Voto</b></span>
                            <p>Nome Utente</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoviePage
