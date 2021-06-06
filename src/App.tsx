import React, {ChangeEvent, useState} from 'react';
import {Display} from "./Components/Counter/Display/Display";
import {Button} from "./Components/Counter/Button/Button";
import s from "./App.module.css"
import {EntryDisplay} from "./Components/SetValueCounter/EntryDisplay/EntryDisplay";

function App() {

    let buttonName = ['inc', 'reset', 'set']
    let [displayValue, setDisplayValue] = useState<string>('0')
    let [maxValue, setMaxValue] = useState<string>(localStorage.getItem('maxValue') || '0')
    let [startValue, setStartValue] = useState<string>(localStorage.getItem('startValue') || '0')


    function onButtonIncClick() {
        let newValue = parseInt(displayValue) + 1
        setDisplayValue(newValue.toString())
    }

    function onButtonResetClick() {
        setDisplayValue(startValue)
    }

    function onButtonSetClick() {
        setDisplayValue(startValue)
        localStorage.setItem('maxValue', maxValue)
        localStorage.setItem('startValue', startValue)
    }

    function onChangeMaxValue(e: ChangeEvent<HTMLInputElement>) {
        const currentValue = e.currentTarget.value
        if (currentValue < "0") {
            setDisplayValue('Incorrect value!')
            setMaxValue(currentValue)
        } else if (+currentValue <= +startValue) {
            setDisplayValue('Incorrect value!')
            setMaxValue(currentValue)
        } else {
            setDisplayValue("enter values and press 'set'")
            setMaxValue(currentValue)
        }
    }

    function onChangeStartValue(e: ChangeEvent<HTMLInputElement>) {
        const currentValue = e.currentTarget.value
        if (currentValue < "0") {
            setDisplayValue('Incorrect value!')
            setStartValue(currentValue)

        } else if (+currentValue >= +maxValue) {
            setStartValue(currentValue)
            setDisplayValue('Incorrect value!')
        } else {
            setDisplayValue("enter values and press 'set'")
            setStartValue(currentValue)
        }
    }


    return (
        <div className={s.App}>

            <div className={s.text}>Redux counters:</div>
            {/*setValueCounter*/}
            <div className={s.counterWrapper}>
                <EntryDisplay maxValue={maxValue} startValue={startValue} onChangeMaxValue={onChangeMaxValue}
                              onChangeStartValue={onChangeStartValue}/>
                <div className={s.buttonOnEntryDisplay}>
                    <Button onButtonClick={onButtonSetClick} name={buttonName[2]}
                            disabled={displayValue === 'Incorrect value!'}/></div>
            </div>
            {/*counter1*/}
            <div className={s.counterWrapper}>
                <Display displayValue={displayValue} maxValue={maxValue}/>
                <div className={s.buttonsWrapper}>
                    <Button onButtonClick={onButtonIncClick} name={buttonName[0]}
                            disabled={displayValue === 'enter values and press \'set\''
                            || displayValue === 'Incorrect value!'
                            || displayValue === maxValue}/>
                    <Button onButtonClick={onButtonResetClick} name={buttonName[1]}
                            disabled={displayValue === '0' || displayValue === 'Incorrect value!' || displayValue === 'enter values and press \'set\''}/>
                </div>
            </div>


        </div>
    );
}

export default App;
