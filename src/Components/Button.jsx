import React from 'react';

const Button = ({ children, type, handler }) => {
    return (
        <div 
            className={`${type === 'danger' 
                ? "bg-red-500 text-white px-3 py-2 rounded shadow cursor-pointer" 
                : "bg-blue-500 text-white px-3 py-2 rounded shadow cursor-pointer"
            }`}
            onClick={handler}>
            {children}
        </div>
    );
};

export default Button;