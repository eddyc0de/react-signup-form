import React from 'react';
import classes from './Input.module.css';

const Input = props => {
    return (
        <input className={props.isValid ? classes.Input : [classes.Input, classes.Input_invalid].join(' ')} 
        key={props.id} 
        type={props.type} 
        placeholder={props.placeholder} 
        alt={props.alt} 
        required={props.required} 
        onChange={props.changed} />
    );  
};

export default Input;