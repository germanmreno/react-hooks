import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({ name: '', email: '', password: '' });

    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    className="form-control"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    placeholder="Tu email"
                    autoComplete="off"
                    className="form-control"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    placeholder="****"
                    className="form-control"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    );
};
