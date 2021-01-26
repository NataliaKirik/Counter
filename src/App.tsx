import React, {ChangeEvent, useState} from 'react';
import {Display} from "./Components/Counter/Display/Display";
import {Button} from "./Components/Counter/Button/Button";
import s from "./App.module.css"
import {EntryDisplay} from "./Components/SetValueCounter/EntryDisplay/EntryDisplay";

function App() {
    let buttonName = ['inc', 'reset', 'set']
    let [displayValue, setDisplayValue] = useState('0')
    let [maxValue, setMaxValue] = useState('0')
    let [startValue, setStartValue] = useState('0')


    function onButtonIncClick() {
        let newValue = +displayValue + 1
        setDisplayValue(newValue.toString())
    }

    function onButtonResetClick() {
        setDisplayValue('0')
    }

    function onButtonSetClick() {
        if (maxValue < '0' || startValue < '0') {
            setDisplayValue('Incorrect value!')
        } else {
            setDisplayValue(startValue)
        }
    }

    function onChangeMaxValue(e: ChangeEvent<HTMLInputElement>) {
        const currentValue = e.currentTarget.value
        let currentValueString = currentValue.toString()
        setMaxValue(currentValueString)
    }

    function onChangeStartValue(e: ChangeEvent<HTMLInputElement>) {
        const currentValue = e.currentTarget.value
        setStartValue(currentValue)
    }


    return (
        <div className={s.App}>
            {/*counter1*/}
            <div className={s.counterWrapper}>
                <Display displayValue={displayValue} maxValue={maxValue}/>
                <div className={s.buttonsWrapper}>
                    <Button onButtonClick={onButtonIncClick} name={buttonName[0]}
                            disabled={displayValue === maxValue || displayValue === 'Incorrect value!'}/>
                    <Button onButtonClick={onButtonResetClick} name={buttonName[1]}
                            disabled={displayValue === '0' || displayValue === 'Incorrect value!'}/>
                </div>
            </div>
            {/*setValueCounter*/}
            <div className={s.counterWrapper}>
                <EntryDisplay maxValue={maxValue} startValue={startValue} onChangeMaxValue={onChangeMaxValue}
                              onChangeStartValue={onChangeStartValue}/>
                <div className={s.buttonOnEntryDisplay}><Button onButtonClick={onButtonSetClick} name={buttonName[2]}
                                                                disabled={false}/></div>
            </div>
        </div>
    );
}

export default App;
