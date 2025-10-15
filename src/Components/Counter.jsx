import React from 'react';
import Button from './Button';

const Counter = ({ count, onIncrement, onDecrement }) => {
    return (
        <div className='p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
            <h2 className='text-2xl font-semibold'>{count}</h2>
            <div className='flex space-x-3'>
                <Button handler={() => onIncrement()}>Increment</Button>
                <Button handler={onDecrement} type="danger">Decrement</Button>
            </div>
        </div>
    );
};

export default Counter;