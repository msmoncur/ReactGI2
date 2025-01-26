import React, { useState } from 'react';

const CounterApp = () => {
    // Initialize the state for the counter
    const [count, setCount] = useState(0);

    // Function to handle incrementing
    const increase = () => {
        setCount(count + 1);
    };

    // Function to handle decrementing
    const decrease = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Count With Me</h1>
            <h2>Current Number: {count}</h2>
            <div>
                <button onClick={increase}>Higher</button>
                <button onClick={decrease}>Lower</button>
            </div>
        </div>
    );
};

export default CounterApp;
