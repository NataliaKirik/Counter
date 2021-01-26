import React, {useState} from 'react';
// import s from './Button.module.css'

type ButtonProps = {
    onButtonClick: () => void
    name: string
    displayValue: number
    disabled: boolean
}

export const Button = (props: ButtonProps) => {

    return (
        <div>
            <button onClick={props.onButtonClick} disabled={props.disabled}>{props.name}</button>
        </div>
    )
}