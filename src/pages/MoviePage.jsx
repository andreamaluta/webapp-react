import React from 'react'

const MoviePage = () => {
    return (
        <>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 my-4 d-flex">
                    <img src="https://picsum.photos/500/300" alt="" />
                    <div className='mx-3'>
                        <h1>Titolo</h1>
                        <p>informazioni</p>
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
