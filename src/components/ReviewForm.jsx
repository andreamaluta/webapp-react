import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const ReviewForm = ({ movie_id, reloadReviews }) => {
    const initialData = { name: "", text: "", vote: "" };
    const [formData, setFormData] = useState(initialData);

    const setFieldValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(`http://127.0.0.1:3000/films/${movie_id}/reviews`, formData, {
                headers: { "Content-Type": "application/json" },
            })
            .then(() => {
                setFormData(initialData);
                reloadReviews();
            })
    };

    return (
        <div className="card">
            <div className="card-header">
                <h4>Aggiungi la recensione</h4>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="control-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Nome"
                            value={formData.name}
                            onChange={setFieldValue}
                        />

                        <label className="control-label">Voto</label>
                        <input
                            min="0"
                            max="5"
                            type="number"
                            className="form-control"
                            name="vote"
                            placeholder="Voto"
                            value={formData.vote}
                            onChange={setFieldValue}
                        />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Testo</label>
                        <textarea
                            name="text"
                            id="text"
                            className="form-control"
                            value={formData.text}
                            onChange={setFieldValue}
                        ></textarea>
                    </div>
                    <div className="form-group mt-3">
                        <button className="btn btn-primary">Invia</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;
