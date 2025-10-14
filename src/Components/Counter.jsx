import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount((prv) => prv + 1);
    };
    const handleDecrement = () => {
        if(count === 0){
            setCount(0);
        }else{
            setCount((prv) => prv - 1);
        }
    };
    return (
        <div className='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
            <h2 className='text-2xl font-semibold'>{count}</h2>
            <div className='flex space-x-3'>
                <Button handler={handleIncrement}>Increment</Button>
                <Button handler={handleDecrement} type="danger">Decrement</Button>
            </div>
        </div>
    );
};

export default Counter;