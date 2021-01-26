import React from 'react';
import s from './Display.module.css'

type DisplayProps = {
    displayValue: number
}
export const Display = (props:DisplayProps) => {
    return (
        <div>
            <input type="text" value={props.displayValue} className={props.displayValue === 5 ? s.error : s.ok}/>
        </div>
    )
}
