import React, { useEffect } from 'react';

export const Message = () => {
    useEffect(() => {
        console.log('Componente montado');
        return () => {
            console.log('Componente desmontado');
        };
    }, []);

    return (
        <>
            <h1>Hola Mundo</h1>
        </>
    );
};
