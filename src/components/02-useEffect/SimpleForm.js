import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({ name: '', email: '' });

    const { name, email } = formState;

    useEffect(() => {
        console.log('hey!');
    }, []);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        });
    };

    return (
        <>
            <h1>useEffect</h1>
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

            {name === '123' && <Message />}
        </>
    );
};
