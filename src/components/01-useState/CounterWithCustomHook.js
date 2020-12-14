import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr />
            <button onClick={() => increment(1)}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={() => decrement(1)}>-1</button>
        </>
    );
};
