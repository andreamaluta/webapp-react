import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import MovieCard from '../components/MovieCard';

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



const HomePage = () => {

    const [movies, setMovies] = useState(initialMovies)

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
