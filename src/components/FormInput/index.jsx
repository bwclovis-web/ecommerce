import React from 'react';

import './styles.scss';
 
const FormInput = ({handleChange, label, name, ...props}) => {
    return (
        <div className="group">
            <input
                className="form-input"
                onChange={handleChange}
                name={name}
                {...props}
            />
            <label htmlFor={name} className={`${props.value.length ? 'shrink': ''} form-input-label`}>{label}</label>
        </div>
    );
}
 
export default FormInput;