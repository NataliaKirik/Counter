import React from 'react';
import {Display} from "../Components/Counter/Display/Display";
import {Button} from "../Components/Counter/Button/Button";
import s from "./App.module.css"
import {EntryDisplay} from "../Components/SetValueCounter/EntryDisplay/EntryDisplay";
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './store';
import {initialStateType, setDisplayValue, setMaxValue, setStartValue} from "../bll/mainReducer";

function App() {
    const state = useSelector<AppRootStateType, initialStateType>(state => state.main)
    const dispatch = useDispatch()


    function onButtonIncClick() {
        dispatch(setDisplayValue(+state.displayValue + 1))
    }

    function onButtonResetClick() {
        dispatch(setDisplayValue(0))
        dispatch(setMaxValue(0))
        dispatch(setStartValue(0))
    }

    function onButtonSetClick() {
        dispatch(setDisplayValue(state.startValue))
        localStorage.setItem('maxValue', String(state.maxValue))
        localStorage.setItem('startValue', String(state.startValue))
    }

    function onChangeMaxValue(e: React.ChangeEvent<HTMLInputElement>) {
        const currentValue = +e.currentTarget.value
        if (currentValue < 0) {
            dispatch(setDisplayValue('Incorrect value!'))
            dispatch(setMaxValue(currentValue))
        } else if (currentValue <= state.startValue) {
            dispatch(setDisplayValue('Incorrect value!'))
            dispatch(setMaxValue(currentValue))
        } else {
            dispatch(setDisplayValue("enter values and press 'set'"))
            dispatch(setMaxValue(currentValue))
        }
    }

    function onChangeStartValue(e: React.ChangeEvent<HTMLInputElement>) {
        const currentValue = +e.currentTarget.value
        if (currentValue < 0) {
            dispatch(setDisplayValue('Incorrect value!'))
            dispatch(setStartValue(currentValue))

        } else if (+currentValue >= state.maxValue) {
            dispatch(setStartValue(currentValue))
            dispatch(setDisplayValue('Incorrect value!'))
        } else {
            setDisplayValue("enter values and press 'set'")
            dispatch(setStartValue(currentValue))
        }
    }


    return (
        <div className={s.App}>

            <div className={s.text}>Redux counters:</div>
            <div className={s.counterWrapper}>
                <EntryDisplay maxValue={state.maxValue} startValue={state.startValue}
                              onChangeMaxValue={onChangeMaxValue}
                              onChangeStartValue={onChangeStartValue}/>
                <div className={s.buttonOnEntryDisplay}>
                    <Button onButtonClick={onButtonSetClick} name={'set'}
                            disabled={state.displayValue === 'Incorrect value!'}/></div>
            </div>
            <div className={s.counterWrapper}>
                <Display displayValue={state.displayValue} maxValue={state.maxValue}/>
                <div className={s.buttonsWrapper}>
                    <Button onButtonClick={onButtonIncClick} name={'inc'}
                            disabled={state.displayValue === 'enter values and press \'set\''
                            || state.displayValue === 'Incorrect value!'
                            || state.displayValue === state.maxValue}/>
                    <Button onButtonClick={onButtonResetClick} name={'reset'}
                            disabled={state.displayValue === 0 || state.displayValue === 'Incorrect value!' || state.displayValue === 'enter values and press \'set\''}/>
                </div>
            </div>


        </div>
    );
}

export default App;
