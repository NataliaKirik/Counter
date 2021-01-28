import React, {ChangeEvent} from 'react';
import s from './EntryDisplay.module.css'

type  EntryDisplayPropsType = {
    maxValue: string
    startValue: string
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
}


export const EntryDisplay = (props: EntryDisplayPropsType) => {

    return (

        <div>
            <div className={s.valueWrapper}>
                <div className={s.text1}>Max value:</div>
                <input type="number" value={props.maxValue} onChange={props.onChangeMaxValue}
                       className={props.maxValue < '0' ? s.entryDisplayInput + ' ' + s.error : s.entryDisplayInput}/>
            </div>
            <div className={s.valueWrapper}>
                <div className={s.text1}>Start value:</div>
                <input type="number" value={props.startValue} onChange={props.onChangeStartValue}
                       className={props.startValue < '0' ? s.entryDisplayInput + ' ' + s.error : s.entryDisplayInput}/>
            </div>
        </div>
    )
}