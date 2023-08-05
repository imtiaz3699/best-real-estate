'use client'
import React, {InputHTMLAttributes} from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?:"string";
}
const Input:React.FC<InputProps> = ({label,...inputProps})=> {
    return (
        <>
        {label && <label>{label}</label>}
        <input {...inputProps}/>
        </>
    )
}

export default Input;