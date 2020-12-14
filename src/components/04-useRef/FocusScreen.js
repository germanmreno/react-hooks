import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    };

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input type="text" ref={inputRef} className="form-control" placeholder="Su nombre" />

            <button onClick={handleClick} className="btn btn-outline-primary mt-3">
                Focus
            </button>
        </div>
    );
};
