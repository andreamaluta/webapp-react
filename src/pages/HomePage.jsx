import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <h1>Movies</h1>
            <h2>
                <i>Lista di film</i>
            </h2>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-img-top">
                            <img src="https://picsum.photos/500/300" alt="" className='img-fluid' />
                        </div>
                        <div className="card-body">
                            <h3>Titolo</h3>
                            <h4>Autore</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero voluptates quidem assumenda asperiores, velit dignissimos voluptas recusandae natus nisi praesentium, est aliquid fuga. Molestias ratione quod distinctio, consequatur unde sint.</p>
                            <Link className='btn btn-primary' to='/movies/1'>Leggi di più</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-img-top">
                            <img src="https://picsum.photos/500/300" alt="" className='img-fluid' />
                        </div>
                        <div className="card-body">
                            <h3>Titolo</h3>
                            <h4>Autore</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero voluptates quidem assumenda asperiores, velit dignissimos voluptas recusandae natus nisi praesentium, est aliquid fuga. Molestias ratione quod distinctio, consequatur unde sint.</p>
                            <Link className='btn btn-primary' to='/movies/2'>Leggi di più</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-img-top">
                            <img src="https://picsum.photos/500/300" alt="" className='img-fluid' />
                        </div>
                        <div className="card-body">
                            <h3>Titolo</h3>
                            <h4>Autore</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero voluptates quidem assumenda asperiores, velit dignissimos voluptas recusandae natus nisi praesentium, est aliquid fuga. Molestias ratione quod distinctio, consequatur unde sint.</p>
                            <Link className='btn btn-primary' to='/movies/3'>Leggi di più</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-img-top">
                            <img src="https://picsum.photos/500/300" alt="" className='img-fluid' />
                        </div>
                        <div className="card-body">
                            <h3>Titolo</h3>
                            <h4>Autore</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero voluptates quidem assumenda asperiores, velit dignissimos voluptas recusandae natus nisi praesentium, est aliquid fuga. Molestias ratione quod distinctio, consequatur unde sint.</p>
                            <Link className='btn btn-primary' to='/movies/4'>Leggi di più</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-img-top">
                            <img src="https://picsum.photos/500/300" alt="" className='img-fluid' />
                        </div>
                        <div className="card-body">
                            <h3>Titolo</h3>
                            <h4>Autore</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero voluptates quidem assumenda asperiores, velit dignissimos voluptas recusandae natus nisi praesentium, est aliquid fuga. Molestias ratione quod distinctio, consequatur unde sint.</p>
                            <Link className='btn btn-primary' to='/movies/5'>Leggi di più</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-img-top">
                            <img src="https://picsum.photos/500/300" alt="" className='img-fluid' />
                        </div>
                        <div className="card-body">
                            <h3>Titolo</h3>
                            <h4>Autore</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero voluptates quidem assumenda asperiores, velit dignissimos voluptas recusandae natus nisi praesentium, est aliquid fuga. Molestias ratione quod distinctio, consequatur unde sint.</p>
                            <Link className='btn btn-primary' to='/movies/6'>Leggi di più</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
