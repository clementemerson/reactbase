import React from 'react';

const Button = props => {
    const { btnType, btnText, className } = props;

    return (
        <div>
            <button className={`ui button ${className}`} type={btnType}>{btnText}</button>
        </div>
    );
}

export default Button;