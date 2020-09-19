import React from 'react';
import classes from './Input.module.css';

const Input = props => {
    return (
        <input className={classes.Input} 
        key={props.id} 
        type={props.type} 
        placeholder={props.placeholder} 
        alt={props.alt} 
        required={props.required} 
        onChange={props.changed} />
    );  
};

export default Input;