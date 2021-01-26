import React from 'react';
import s from './Display.module.css'

type DisplayProps = {
    displayValue: string
    maxValue: string
}
export const Display = (props: DisplayProps) => {
    return (
        <div className={s.inputWrapper}>
            <input type="text" value={props.displayValue}
                   className={props.displayValue === 'Incorrect value!' || props.displayValue === props.maxValue ? s.default + ' ' + s.error : s.default}/>
        </div>
    )
}
