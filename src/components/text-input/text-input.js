import './text-input.scss';
import React from 'react';

const TextInput = props => {
    const { inputName, placeholderText, className, inputType, labelText, 
        inputPattern, required, minlength, maxlength } = props;

    return (
        <div className={`inputGrp ${className}`}>
            <input className="inputGrp__input"
                type={inputType}
                name={inputName}
                placeholder={placeholderText}
                pattern={inputPattern}
                required={required} 
                minLength={minlength}
                maxLength={maxlength} ></input>
            <label className="inputGrp__label" htmlFor={inputName}>{labelText}</label>
        </div>
    );
}

export default TextInput;