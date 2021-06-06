import React from 'react';
import s from './Button.module.css'

type ButtonProps = {
    onButtonClick: () => void
    name: string
    disabled: boolean
}

export const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onButtonClick} disabled={props.disabled} className={s.button}>{props.name}
        </button>

    )
}